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

## Problems with Brew Update:

####Solution:

	$ cd `brew --prefix`
	$ git remote add origin https://github.com/mxcl/homebrew.git
	$ git fetch origin
	$ git reset --hard origin/master

