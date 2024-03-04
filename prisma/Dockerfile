# Utiliza la imagen oficial de Node.js
FROM node:lts-alpine

# Crea el directorio de la aplicación
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Expone el puerto de la aplicación
EXPOSE 5000

# Ejecuta la aplicación
CMD [ "npm", "run dev" ]
