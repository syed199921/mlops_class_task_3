FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGODB_URI=mongodb+srv://syedzulkifalbanuri21:mlopsatmongodb@cluster0.qumzw.mongodb.net/

CMD ["node", "src/server.js"]