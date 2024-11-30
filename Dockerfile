FROM node:23-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --audit=false --fund=false

CMD ["npm", "start"]