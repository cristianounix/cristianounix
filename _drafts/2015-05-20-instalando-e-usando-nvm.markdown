---
layout: post
title: Sopa de versoes usando NVM
description: "Instalando e usando NVM para gerenciar suas versoes do node"
modified: 2015-05-20
category: docker
tags: [nodejs,nvm]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/nvm.png" alt="Node Version Manager">
</p>

Instalando:

  CURL
    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.28.0/install.sh | bash
  WGET
    $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.28.0/install.sh | bash

Ele ira clonar o projeto na pasta ~/.nvm

Para ativar o NVM vc precisa rodar o script:

  $ . ~/.nvm/nvm.sh

Vamos usar o bicho

  Instalar ou usar uma nova versao

  $ nvm install 0.10
  $ nvm use 0.10

  Listar as versoes instaladas

  $ nvm ls


