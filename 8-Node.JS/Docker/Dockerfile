FROM node:22-alpine

WORKDIR /user/src/app

COPY . . 

RUN npm install

RUN npm run build

EXPOSE 3333

CMD ["npm", "start"]
