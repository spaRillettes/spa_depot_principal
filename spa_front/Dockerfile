# Utiliser une image de base officielle Node.js
FROM node:18-bullseye AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY spa_front/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY spa_front/ .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : dev Stage
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers de build nécessaires
COPY --from=builder /app /app

# Nettoyer le cache pour réduire la taille de l'image
RUN npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
