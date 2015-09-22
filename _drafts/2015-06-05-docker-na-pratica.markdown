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


<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/docker.jpg" alt="Docker">
</p>

Stop na VM
$ boot2docker down 