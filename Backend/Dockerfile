# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.12.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

# Installer netcat pour wait-for-it.sh
RUN apk add --no-cache bash netcat-openbsd

# Installer les dépendances
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copier le reste des fichiers + wait-for-it.sh
COPY . .
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Utiliser un utilisateur non-root
USER node

# Exposer le port
EXPOSE 3000

# CMD modifié pour attendre MySQL avant de démarrer le backend
CMD ["./wait-for-it.sh", "db", "3306", "--", "npx", "nodemon", "index.js"]
