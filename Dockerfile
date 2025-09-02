FROM node:alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm i

# COPY  . 
COPY . .

RUN npm run build
RUN npm run export

# Stage:2 production 
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]