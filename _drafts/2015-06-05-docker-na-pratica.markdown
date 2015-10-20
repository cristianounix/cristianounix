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

### Agora vamos instalar o docker:

{% highlight shell %}

	$ brew cask install virtualbox

	$ brew install docker

	$ brew install boot2docker

	$ boot2docker init

	$ boot2docker up

	$ docker run mongo  (Executar ou baixar a imagem do mongo)

	$ docker run -it mongo bash  (Vai executar o bash dentro do docker e com isso vc vai ter um terminal disponivél )

		Obs: para sair da docker =  CRTL + D

	$ docker ps  (Mostra dockers em execução)

{% endhighlight %}

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
 


### Bonus Dockerfile

Vamos criar um Dockerfile com o nginx

{% highlight shell %}
	
	$ mkdir nginx

	$ cd nginx
	
	$ vim Dockerfile

{% endhighlight %}

```
##
# Dockerfile with Ubuntu 14.10
FROM ubuntu:14.10
MAINTAINER Seu Nome <seuemail@venturus.org.br>

# Install Nginx.
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/* && echo "daemon off;" >> /etc/nginx/nginx.conf
 
# Define working directory.
WORKDIR /etc/nginx
 
# Define default command.
CMD ["nginx"]
 
# Expose ports.
EXPOSE 8080

```

Sobre o arquivo acima vamos as explicações:

FROM: Informa a base/imagem que o docker deve usar para o container.
ENV: Define uma variável de ambiente.
RUN: O comando é executado como root.
CMD: Só pode haver uma instrução CMD. Usada para informar o comando que executa quando subir o container.
EXPOSE: Ela permite liberar acesso à portas TCP do container pelo host.

Pronto agora vamos fazer build da imagem e em seguinda vamos rodar ela.


{% highlight shell %}

	$ sudo docker build -t nginx .

	$ docker run -p 8080:8080 -d nginx

{% endhighlight %}


> -p indica para fazer o bind entre a porta 8080 do host e do container.


Prontinho agora só acessar seu navegador com a url => http://localhost:8080


Abraço !