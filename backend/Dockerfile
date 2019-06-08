FROM tomcat:8.5.40-jre11-slim
WORKDIR /usr/local/tomcat/webapps
CMD mvn war:war
CMD cp target/*.war /usr/local/tomcat/webapps
