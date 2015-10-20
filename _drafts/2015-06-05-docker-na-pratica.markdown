---
layout: post
title: Docker na prática
description: "Docker na prática"
modified: 2015-06-05
category: docker
tags: [docker]
comments: true
share: true
---

Não vou falar muito o que é o docker, ou como ele funciona por baixo dos panos entre outros, pq existe excelentes posts tanto em português e ainda mais em inglês, vamos então meter mão. 

Só para darmos inicio vou tentar colocar uma definição bem grossa sobre o docker:

Docker é como uma pequena e muito leve VM, onde você não precisa ter um SO completo e seu hardware é compartilhado com sua VM. 

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/containers.jpg" alt="Containers Docker">
</p>


#### Instalando Docker no Mac.

Antes de tudo se você seria bom você ter o [HomeBrew](http://brew.sh/) instalado :)

	$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Aproveitando o embalo do Brew vamos instalar o [BrewCask](http://caskroom.io/) que é um complemento do Brew só que ele te ajuda a instalar aplicacoes como FireFox, Chrome, Skype etc etc...

	$ brew install caskroom/cask/brew-cask

--------------

Agora vamos instalar o docker:


$ brew cask install virtualbox

$ brew install docker

$ brew install boot2docker

$ boot2docker init

$ boot2docker up

$ docker run mongo  (Executar ou baixar a imagem do mongo)

$ docker run -it mongo bash  (Vai executar o bash dentro do docker e com isso vc vai ter um terminal disponivél )

	Obs: para sair da docker =  CRTL + D

$ docker ps  (Mostra dockers em execução)


Pronto agora vc tem uma Docker rodando mongo 


\o/

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/docker.jpg" alt="Docker">
</p>


Para destruir um container basta fazer:

$ docker rm -f [container_a_ser_destruido]

Para destruir uma imagem:

$ docker rmi -f [imagem_a_ser_deletada]   //Isso remove todas as imagens  


OBS: Você não irá conseguir remover uma imagem que ainda está em uso por um container, então você precisará remover o container  primerio :)


Caso queira saber como anda o desempenho do seu container:

$ docker stats [container]  


:>)

Beleza isso foi o basicão do Docker.
 









