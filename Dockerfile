# path: Dockerfile
FROM node:20-alpine

WORKDIR /app

# dependencies (using cache)
COPY package*.json ./
RUN npm ci --omit=dev

# app source
COPY public ./public
COPY rules  ./rules
COPY lib    ./lib
COPY server.js ./server.js

# runtime prep
RUN mkdir -p /app/data /app/logs \
    && adduser -D app \
    && chown -R app:app /app

USER app
EXPOSE 5002
ENV NODE_ENV=production
CMD ["node", "server.js"]


