FROM debian
RUN apt-get update && apt-get upgrade -y
RUN apt-get install nodejs npm -y
RUN apt-get install wget gnupg -y
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list 
RUN apt-get update
RUN apt-get install -y mongodb-org
COPY . /app
RUN mkdir -p /data/db
WORKDIR /app
EXPOSE 3000 27017 
RUN chmod +x /app/iniciar.sh
CMD /app/iniciar.sh