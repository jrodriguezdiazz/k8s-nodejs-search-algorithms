FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install

COPY . .

EXPOSE 3001

CMD [ "node", "app.js" ]
