# Étape 1 : Build Stage
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
# COPY ./package*.json ./tsconfig.json .
COPY . .

# Installer toutes les dépendances (y compris celles de développement)
RUN npm install && npm i -g typescript && npm run build && npm cache clean --force

# Copier uniquement les fichiers nécessaires à la construction
# COPY . .

# RUN ls -l /app && npm run build
# Construire l'application Nest.js
# RUN npm run build && npm cache clean --force

# Étape 2 : Development Stage
# FROM base as builder

# Définir le répertoire de travail dans le conteneur
# WORKDIR /app

# Copier uniquement les fichiers de build nécessaires
# COPY --from=builder /app /app

# Installer toutes les dépendances (y compris celles de développement)
# RUN npm install

# Nettoyer le cache pour réduire la taille de l'image
# RUN npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["npm", "run", "start:dev"]
