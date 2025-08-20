# Runtime image
FROM node:20-alpine


ENV NODE_ENV=production \
PORT=5002


WORKDIR /app


# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev


# Copy app sources
COPY public ./public
COPY rules ./rules
COPY server.js ./server.js


# Ensure data dir exists (mounted in compose)
RUN mkdir -p /app/data /app/logs \
&& adduser -D app && chown -R app:app /app
USER app


EXPOSE 5002


HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
CMD node -e "require('http').get('http://localhost:' + (process.env.PORT||5002) + '/__health', r=>{process.exit(r.statusCode===200?0:1)}).on('error',()=>process.exit(1))"


CMD ["node","server.js"]