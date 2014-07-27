---
layout: post
title: Add user database postgre
description: "Create database and add user, alter password user"
modified: 2014-07-27
category: database, postgre
tags: [database, postgre]
comments: true
share: true
---

## Add User and Database


  $ sudo su postgres
  $ pgsql

  postgres=# CREATE USER user_database WITH PASSWORD 'your-password-here';
  postgres=# CREATE DATABASE your_database;
  postgres=# GRANT ALL PRIVILEGES ON DATABASE your_database to user_database;


