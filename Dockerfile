FROM node:24-alpine3.21 AS builder

WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias
COPY package.json package-lock.json ./

RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el build
RUN npm run build

# 🧼 Etapa 2: Final (runtime limpio)
FROM node:24-alpine3.21 AS runner

WORKDIR /app

ENV NODE_ENV=production

# Solo copiamos lo necesario del builder
COPY --from=builder /app/server ./server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Instalamos solo dependencias de producción
RUN npm install --omit=dev --ignore-scripts

EXPOSE 3000

CMD ["node", "server/entry.express"]