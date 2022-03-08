FROM node:alpine

EXPOSE 3000

RUN mkdir /usr/local/app
WORKDIR /usr/local/app
COPY . .

RUN npm i
RUN npm run build

CMD ["node", "./build"]
