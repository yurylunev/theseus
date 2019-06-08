FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./conf.d/* /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/

COPY ./html/ ./html/
