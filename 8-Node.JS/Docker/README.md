# Docker

## Commands

- docker ps -a
- docker run -it ubuntu bash
- docker start [id]
- docker stop [id]

## Docker File

```docker
# Use a imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do projeto para o container
COPY . .

# Expõe a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]

```

## Links

- [docs](https://www.docker.com/)
