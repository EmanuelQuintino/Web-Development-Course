# Docker

## Commands

- docker ps -a
- docker run -it ubuntu bash
- docker start [id]
- docker stop [id]

## Docker File

```Dockerfile
# use the official Node.js base image
FROM node:14

# set the working directory inside the container
WORKDIR /app

# copy package.json and package-lock.json to the container
COPY package*.json ./

# install project dependencies
RUN npm install

# copy the entire project content to the container
COPY . .

# expose the port that the application will use
EXPOSE 3000

# command to start the application
CMD ["npm", "start"]
```

## Links

- [Docs](https://www.docker.com/)
