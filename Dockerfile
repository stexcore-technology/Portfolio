# 🧱 Stage 1: Builder
FROM node:24-alpine3.21 AS builder

WORKDIR /app

# Copy only what's needed to install dependencies
COPY package.json package-lock.json ./

RUN npm ci

# Copy the rest of the source code
COPY . .

# Run the build process
RUN npm run build

# 🧼 Stage 2: Final runtime image
FROM node:24-alpine3.21 AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary build artifacts from the builder
COPY --from=builder /app/server ./server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Install only production dependencies
RUN npm install --omit=dev --ignore-scripts

EXPOSE 3000

CMD ["node", "server/entry.express"]