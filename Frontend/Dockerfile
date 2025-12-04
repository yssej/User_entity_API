FROM node:22.12.0-alpine

# Mode dev
ENV NODE_ENV development

WORKDIR /usr/src/app

# Copier package.json + package-lock.json
COPY package*.json ./

# Installer TOUTES les dépendances (dev inclus)
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port Vite
EXPOSE 5173

# Lancer Vite en dev
CMD ["npm", "run", "dev", "--", "--host"]
