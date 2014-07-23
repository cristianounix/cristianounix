---
layout: post
title: Configuring Capistrano
description: "Install and Configure capistrano"
modified: 2014-07-22
category: ruby, deploy, capistrano
tags: [git, ruby]
comments: true
share: true
---

## Ridiculous simple, let´s go:

  put gem 'capistrano' in your Gemfile

  $ bundle install

  Capify your application

  $ bundle exec cap install

  Check this files:

  ├── Capfile<br />
  ├── config<br />
  │   ├── deploy<br />
  │   │   ├── production.rb<br />
  │   │   └── staging.rb<br />
  │   └── deploy.rb<br />
  └── lib<br />
  _____ └── capistrano<br />
  ______________ └── tasks<br />


  For create different stages

  $ bundle exec cap install STAGES=development,production

  Configure your sever address, folder target, public keys and roles
  :application
  :repository
  :deploy_to
  :user

  This will create folders on :deploy_to server

  $ bundle exec cap deploy:setup

  This check your configs

  $ bundle exec cap deploy:check


  if you need more tasks see: deploy.rb

    Example:

    after "deploy", "deploy:symlink_config_files"
    after "deploy", "deploy:restart"
    after "deploy", "deploy:cleanup"


  $ bundle exec cap [STAGE] deploy


  More about Capistrano --> https://github.com/capistrano/capistrano
