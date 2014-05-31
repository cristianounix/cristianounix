---
layout: post
title: Install php, ruby, rbenv, mysql, nginx, postgres all this on mac
description: "Install php, ngix, mysql, postgres on mac"
modified: 2014-05-29
category: macbook
tags: [php, ruby, rbenv, ngix, postgres, mysql, mac, osx, terminal, shell]
comments: true
share: true
---

# Install Homebrew, Php, Ruby, Rbenv, Ngix, MySql, PostGres

### Rbenv:

    $ git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
    $ git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
    $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
    $ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

Dont forget run '$ rbenv rehash' if you install any gem not using Gemfile Ex. '$ gem install foo'


### Ruby:

    $ rbenv install [ruby-version]

After you install ruby set your global version

    $ rbenv global [ruby-version]
    $ gem install bundler
    $ rbenv rehash

For more options use: '$ rbenv'


### HomeBrew:

    $ brew ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
    $ brew doctor


### PHP (with fpm, without apache mod and with pgsql):

    $ brew tap josegonzalez/php
    $ brew tap homebrew/dupes
    $ brew options php54
    $ brew install --without-apache --with-fpm --with-mysql --with-pgsql --with-debug php55
    $ cp /usr/local/Cellar/php55/5.5.12/homebrew.mxcl.php55.plist ~/Library/LaunchAgents/
    $ launchctl load -w ~/Library/LaunchAgents/homebrew-php.josegonzalez.php54.plist (Start)
    $ launchctl unload -w ~/Library/LaunchAgents/homebrew-php.josegonzalez.php54.plist (Stop)



### PostGres

    $ brew install postgresql


### Mysql:

    $ brew install mysql --enable-debug
    $ mysql_secure_installation
    $ mysql.server {start|stop|restart|reload|force-reload|status}

#### WorkBench:

    $ ln -s /usr/local/Cellar/mysql/5.6.10 /usr/local/mysql
    $ sudo ln -s /usr/local/Cellar/mysql/5.6.10/my.cnf /etc/my.cnf


### NgiX:

    $ brew install nginx
    $ cp /usr/local/Cellar/nginx/1.4.1/homebrew.mxcl.nginx.plist ~/Library/LaunchAgents/
    $ launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist (Start)
    $ launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist (Stop)
    $ vim /usr/local/etc/nginx/nginx.conf

Put line "include sites-enabled/*.conf;" on block http{}


## Other:

    $ brew install tig
    $ brew isntall htop
    $ brew install wget
    $ brew install node
    $ brew install vim
    $ brew install openssl
    $ brew install git
    $ brew install autoconf


