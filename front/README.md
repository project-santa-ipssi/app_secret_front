# Portail DaD - FrontEnd Source Code

## Description
Santa Secret Font

## Server config
    - Hostname: BILIAPA12.dom101.intres
    - Os: Redhat 7
    - Web Server: Apache Server
    - Listening port: 80 (default port for http)
    - Config location of Apache: /etc/httpd/conf/httpd.conf
    - Path to dist directory: /var/www/
    - Check service health: systemctl status httpd

## Install node
    $ install at least node v10.10 from https://nodejs.org/en/
    $ node -v (check for version)

## Set Up development environment (windows 10)

    $ git clone https://github.com/project-santa-ipssi/app_secret_front.git
    $ cd front
    $ npm install  (generate node_modules folder)
    $ npm serve 



## Generate dist folder with webpack (test environment)

    $ npm run build

## Generate dist folder with webpack (prod environment)

    $ npm run build:prod
