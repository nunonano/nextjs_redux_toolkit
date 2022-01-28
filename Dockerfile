FROM debian
  
# Install.
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN \
  apt-get update && \
  apt-get -y upgrade && \
  DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y yarn procps nginx default-jdk &&  \
  apt-get install -y build-essential npm nodejs net-tools unzip vim wget
RUN apt-get install -y --no-install-recommends --no-install-suggests supervisor cron curl
RUN npm install pm2@latest -g
RUN npm install -g yarn

# Install dep of filebeat
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" |  tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt-get update -y
RUN apt-get install filebeat -y

# Copy filebeat config to "/etc/filebeat/filebeat.yml"
COPY .docker/filebeat.yml /etc/filebeat/filebeat.yml
RUN chmod go-w /etc/filebeat/filebeat.yml

# Create folder "/opt/www/tvonenews-frontend"
RUN mkdir -p /opt/www/tvonenews-frontend
# Create folder "/var/cache/nginx/video-beta-tvonenews-com-cache"
RUN mkdir -p /var/cache/nginx/video-beta-tvonenews-com-cache
# Create folder "/opt/scripts"
RUN mkdir -p /opt/scripts
# Change owner
RUN chown -R www-data:www-data /opt/
# Change Permission
RUN chmod 755 -R /opt/*

# Copy all files with same directory with Dockerfile
COPY . /opt/www/tvonenews-frontend
# Copy application environment file
COPY .docker/.env /opt/www/tvonenews-frontend/.env
# Copy "docker-init.sh" file, execute when startup
COPY .docker/.docker-init.sh /opt/www/tvonenews-frontend/.docker-init.sh
# Copy PM2 ecosystem.config.js
COPY .docker/ecosystem.config.js /opt/www/tvonenews-frontend/ecosystem.config.js
# Copy NGINX config
COPY .docker/nginx.conf /etc/nginx/nginx.conf
# Copy NGINX config for "video-beta.tvonenews.com.conf"
COPY .docker/video-beta.tvonenews.com.conf /etc/nginx/sites-enabled/video-beta.tvonenews.com.conf
# Copy SUPERVISOR config
COPY .docker/supervisor.conf /etc/supervisor/conf.d/supervisor.conf

# Installing node js
RUN curl -sL https://deb.nodesource.com/setup_12.x -o install_node_js12 && chmod +x install_node_js12 && ./install_node_js12
RUN apt -y install nodejs

# Change working directory to "/opt/www/tvonenews-frontend"
WORKDIR /opt/www/tvonenews-frontend
# Yarn install to retrieve dependencies
RUN yarn install
# Yarn build to building and compiling scripts
RUN yarn build

## REMOVE UNUSED FILE/FOLDER ##
RUN \
  rm -rf .git && \
  rm -rf .docker && \
  rm -rf Dockerfile && \
  rm -rf README.md

## RUN NPM AS A SERVICE ##
RUN chmod +x ./.docker-init.sh
ENTRYPOINT ["/opt/www/tvonenews-frontend/.docker-init.sh"]
