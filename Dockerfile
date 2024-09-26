FROM node:20-slim AS builder

WORKDIR /app

# install
COPY package.json .
COPY package-lock.json .
RUN npm ci

# build
COPY src ./src
COPY tsconfig.json .
RUN npm run build


FROM node:20-slim AS runner

WORKDIR /app

COPY --from=builder /app/build ./build

COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev

ENTRYPOINT ["node", "."]
CMD ["--help"]
