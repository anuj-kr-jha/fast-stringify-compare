FROM node:lts-alpine3.18
WORKDIR /project
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "--watch", "src/main.js"]