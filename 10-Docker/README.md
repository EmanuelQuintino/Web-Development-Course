# Docker

Docker is a container virtualization platform that allows packaging, distributing, and running applications in an isolated and consistent way. Unlike traditional virtual machines, Docker containers share the host system's kernel, making them lighter and more efficient.

## Main Benefits of Docker

- **Isolation**: Each container runs independently, with its own processes, network, and file systems.
- **Portability**: "Build once, run anywhere" – containers can be executed in any environment with Docker installed.
- **Efficiency**: Containers are lighter than traditional VMs and start much faster.
- **Scalability**: Makes it easier to create and manage multiple instances of an application.

---

## Docker Commands

### Image Management

- `docker build -t [alias:v1] .` — Builds an image from a Dockerfile (with version control)
- `docker pull [image]` — Downloads an image from Docker Hub
- `docker images` — Lists all local images
- `docker rmi [name]` — Removes a specific image

### Container Management

- `docker run -p 3333:3333 [name]` — Creates and starts a new container
- `docker ps` — Lists running containers
- `docker ps -a` — Lists all containers (including stopped ones)
- `docker start [id]` — Starts an existing container
- `docker pause [id]` — Pauses a running container
- `docker unpause [id]` — Unpauses a running container
- `docker stop [id]` — Stops a running container
- `docker rm [id]` — Removes a container
  - To remove all containers: `docker rm $(docker ps -aq)`

### Logs & Debugging

- `docker logs [id]` — Shows container logs
- `docker history [name]` — Shows image history
- `docker exec -it [id] bash` — Accesses the container terminal (`bash` or `/bin/sh`)
- `docker container inspect [id]` — Inspects container details
- `docker volume create [alias]` — Creates a volume
- `docker volume inspect [name]` — Inspects a volume
- `docker run -v api-volume:/user/src/app -p 3333:3333 api` — Runs a container with a named volume
- `docker volume rm [name]` — Removes a volume

### Common Flags

- `-d` — Runs in detached mode (background)
- `-p [host-port]:[container-port]` — Maps ports
- `-v [host-path]:[container-path]` — Mounts volumes
- `-t` — Tags an image during build or run
- `-f` — Forces execution
- `-a` — All (e.g. `ps -a`)
- `--name [name]` — Assigns a custom name to the container

## Commands run Linux

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
docker-compose.yml
.dockerignore
.git
.gitignore
```

## Docker Hub

```bash
docker run --name db-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d bitnami/postgresql:latest
```

## Docker Compose

Docker Compose is a tool for orchestrating multi-container applications, allowing you to define and run multiple Docker containers declaratively through a single YAML file. With it, you can configure all the services, networks and volumes needed for your application in a single place, making it easier to manage and deploy complex applications.

### Docker Compose File

```yml
version: "3.9"

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    image: nodejs
    container_name: api
    ports:
      - "3333:3333"
    depends_on:
      - postgres
  postgres:
    image: bitnami/postgresql:latest
    container_name: db-postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: api
    volumes:
      - database:/var/lib/postgresql/data

volumes:
  database:
```

### Docker Compose Commands

- `docker-compose up` - starts all services defined in the docker-compose.yml file
- `docker-compose up --build` - forces rebuilding of images before starting services
- `docker-compose down` - stops and removes all defined containers, networks, and volumes
- `docker-compose ps` - lists all running compose containers
- `docker-compose logs` - displays the logs of all services
- `docker-compose logs [service]` - displays the logs of a specific service
- `docker-compose stop` - stops all services without removing containers
- `docker-compose start` - starts services that have been stopped
- `docker-compose restart` - restarts all services
- `docker-compose exec [service] [command]` - runs a command on a specific service
- `docker-compose run [service] bash` - accesses the bash terminal of a specific service

# Common Docker Compose Flags

- `-d` - run in detached (background) mode
- `--build` - force rebuild of images
- `--force-recreate` - force re-creation of containers
- `-f` - specify an alternative compose file

## Links

- [Docs](https://www.docker.com/)
- [Docs](https://hub.docker.com/)
