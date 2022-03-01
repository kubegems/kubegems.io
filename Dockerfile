FROM nginx:alpine
LABEL MAINTAINER="kubegems"
WORKDIR /usr/src/app
COPY dist dist
CMD ["nginx", "-g", "daemon off;"]
