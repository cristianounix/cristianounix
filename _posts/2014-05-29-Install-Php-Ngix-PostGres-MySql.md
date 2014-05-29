---
layout: post
title: Install php, mysql, ngix, postgres all this on mac
description: "Install php, ngix, mysql, postgres on mac"
modified: 2014-05-29
category: macbook
tags: [php, ngix, postgres, mysql, mac, osx, terminal, shell]
comments: true
share: true
---

# Install Php, Ngix, MySql, PostGres

```

*PHP
-brew tap josegonzalez/php
-brew tap homebrew/dupes


*PostGres
-brew update
-brew doctor
-brew install postgresql

*Install PHP
-brew options php54
-brew install php54 --with-fpm  --with-imap  --without-apache --with-debug --with-pgsql

**Obs: Read and Read

*Mysql
-brew install mysql --enable-debug

-mysql_secure_installation

**WorkBench
-ln -s /usr/local/Cellar/mysql/5.6.10 /usr/local/mysql
-sudo ln -s /usr/local/Cellar/mysql/5.6.10/my.cnf /etc/my.cnf


*NgiX
-brew install nginx

-cp /usr/local/Cellar/nginx/1.4.1/homebrew.mxcl.nginx.plist ~/Library/LaunchAgents/
-launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist (Start)
-launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist (Stop)
-vim /usr/local/etc/nginx/nginx.conf
-Put line "include sites-enabled/*.conf;" on block http{}


```
