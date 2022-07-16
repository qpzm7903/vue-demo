FROM nginx:latest

RUN mkdir -p /opt/demo/web

RUN mkdir -p /opt/nginx/conf

COPY nginx.conf /opt/nginx/conf/

COPY dist/* /opt/demo/web


CMD [ "nginx" ,"-c /opt/nginx/conf/nginx.conf" ]