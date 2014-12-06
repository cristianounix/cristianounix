---
layout: post
title: Solve problems with brew update
modified: 2014-12-05
category: brew, git, macos
tags: [git, ruby, brew, mac]
comments: true
share: true
---

## Problems with Brew Update:

####Solution:

	$ cd `brew --prefix`
	$ git remote add origin https://github.com/mxcl/homebrew.git
	$ git fetch origin
	$ git reset --hard origin/master

