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

  ├── Capfile\n
  ├── config\n
  │   ├── deploy\n
  │   │   ├── production.rb\n
  │   │   └── staging.rb\n
  │   └── deploy.rb\n
  └── lib\n
      └── capistrano\n
                  └── tasks\n


  For create different stages

  $ bundle exec cap install STAGES=development,production

  Configure your sever address, folder target, public keys and roles

  $ bundle exec cap [STAGE] deploy


  More about Capistrano --> https://github.com/capistrano/capistrano
