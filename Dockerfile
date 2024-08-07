FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run seed

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]