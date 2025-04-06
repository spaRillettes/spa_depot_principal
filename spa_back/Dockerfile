# Étape 1 : Build Stage
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer le projet Nest.js dans le conteneur
RUN npm install && npm i -g typescript && npm run build && npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3001

# Commande pour démarrer l'application en mode développement
CMD ["npm", "run", "start:dev"]
