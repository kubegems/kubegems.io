FROM nginx:alpine
LABEL MAINTAINER="kubegems"
WORKDIR /usr/src/app

COPY /usr/src/app/dist dist

CMD ["nginx", "-g", "daemon off;"]
