---
layout: post
title: Git password no more
description: "You not have enter password git"
modified: 2013-04-20
category: git
tags: [git, osx, terminal, shell]
comments: true
share: true
---

## Ridiculous simple, let´s go:

    $ ssh-keygen -t rsa -C "your-email@teste.com"
    $ cd ~/.ssh
    $ ls -al (this will list files id_rsa and id_rsa.pub)

The file id_rsa are your private-key keep it with you soul :)
The file id_rsa.pub are you public-key this file you put on https://github.com/settings/ssh

    $ pbcopy < ~/.ssh/id_rsa.pub

After clik "Add SSH key" - CMD+V - SAVE
Testing

    $ ssh -T git@github.com


