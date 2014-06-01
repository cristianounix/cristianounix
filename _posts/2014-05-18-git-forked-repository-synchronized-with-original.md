---
layout: post
title: You foked repository on git, and now you would like update this repository ! what you do ¿? delete this repo and fork again ? cry? pray?
description: "Repository forked on github sinchronized with original"
modified: 2014-05-18
category: macbook
tags: [git, repository]
comments: true
share: true
---

## You foked repository on git, and now you would like update this repository ! what you do ¿? delete this repo and fork again ? cry? pray?

    $ git remote add upstream [ADDRESS REPO ORIGINAL]
    $ git fetch upstream
    $ git merge upstream/master


Original post:
  [Da2K](http://blog.da2k.com.br/2014/01/19/manter-repositorio-github-forkado-sincronizado-com-o-original/)
Thanks:
  [@VitorBritto](https://twitter.com/vitorbritto)
