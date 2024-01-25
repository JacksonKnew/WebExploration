FROM node:18.18.2-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
RUN mkdir ./certs

EXPOSE 3500
CMD ["node", "index.js"]