FROM node:16-alpine

ENV PORT=3000

WORKDIR /app

COPY . .

RUN yarn install --production && \
  yarn cache clean && \
  apk --no-cache add curl

HEALTHCHECK \
  --interval=10s \
  --timeout=10s \
  --start-period=10s \
  --retries=3 \
  CMD curl -I 0.0.0.0:$PORT

CMD ["yarn", "start"]
