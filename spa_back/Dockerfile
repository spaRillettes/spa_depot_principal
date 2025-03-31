# Utiliser une image de base officielle Node.js
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Construire l'application Nest.js
RUN npm run build

# Nettoyer le cache pour réduire la taille de l'image
RUN npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]
