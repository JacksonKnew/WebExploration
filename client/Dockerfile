FROM node:18.18.2-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@latest -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/webexploration.conf /etc/nginx/conf.d/webexploration.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN mkdir /etc/nginx/certs
CMD ["nginx", "-g", "daemon off;"]
