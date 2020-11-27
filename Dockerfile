FROM node:lts-alpine

RUN apk update && apk add --no-cache less

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN echo "nameserver 8.8.8.8" >> /etc/resolv.conf

RUN chmod +x ./post-up.sh

CMD sh /app/post-up.sh

EXPOSE 8080
