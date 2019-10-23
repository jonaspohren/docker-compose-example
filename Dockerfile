FROM node:alpine
WORKDIR /var/www/app
COPY . .
RUN apk add yarn && \
    yarn install
EXPOSE 3000
CMD ["yarn", "run", "serve"]