# Utiliser une image de base officielle Node.js
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer et build le projet Next.js dans le conteneur
RUN npm install && npm run build && npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
