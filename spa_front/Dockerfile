# Utiliser une image de base officielle Node.js
FROM node:18-bullseye

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
# COPY ./package*.json ./tsconfig.json .
COPY . .

# Installer les dépendances
RUN npm install && npm run build && npm cache clean --force

# Copier le reste de l'application
# COPY . .

# Construire l'application Next.js
# RUN npm run build

# Étape 2 : dev Stage
# FROM base as builder

# Définir le répertoire de travail dans le conteneur
# WORKDIR /app

# Copier uniquement les fichiers de build nécessaires
# COPY --from=builder /app /app

# Nettoyer le cache pour réduire la taille de l'image
# RUN npm cache clean --force

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
