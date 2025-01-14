# Docker

## Commands

- docker ps -a
- docker run -it ubuntu bash
- docker start [id]
- docker stop [id]

## Docker File

```Dockerfile
# node.js base image
FROM node:18

# set the working directory inside the container
WORKDIR /app

# copy the entire project content to the container
COPY . .

# install project dependencies
RUN npm install

# run build project
RUN npm run build

# expose the port that the application will use
EXPOSE 3000

# command to start the application
CMD ["npm", "start"]
```

## Docker Ignore

```dockerignore
node_modules
dist
Dockerfile
.git
.gitignore
.dockerignore
```

## Links

- [Docs](https://www.docker.com/)
