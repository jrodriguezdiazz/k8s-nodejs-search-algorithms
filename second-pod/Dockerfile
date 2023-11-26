FROM node:18.12.1

WORKDIR /usr/src/app

COPY . .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "app.js" ]
