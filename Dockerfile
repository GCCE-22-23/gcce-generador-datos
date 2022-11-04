FROM docker.io/library/node:18-alpine as BUILDER
WORKDIR /usr/src/app
RUN apk add --no-cache dumb-init
COPY package.json package-lock.json /usr/src/app
RUN npm ci
COPY . /usr/src/app
RUN npm run build

FROM docker.io/library/node:18-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --from=BUILDER /usr/bin/dumb-init /usr/bin/dumb-init
COPY --chown=node:node package.json package-lock.json /usr/src/app
RUN npm ci --only=production
COPY --from=BUILDER --chown=node:node /usr/src/app/dist /usr/src/app
USER node
CMD ["dumb-init", "node", "/usr/src/app/index.js"]
