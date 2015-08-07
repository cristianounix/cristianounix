---
layout: post
title: Instalando vagrant no Windows (eca ... )
modified: 2015-01-10
category: vagrant, linux
tags: [vagrant, linux]
---

Sempre fui usuário Linux/Mac só que nesse inicio de 2015 com algumas mudanças no trabalho precisei começar
e usar Windows, logo de cara senti a necessidade de uma maquina linux pq tinha problemas que conseguia resolver
de forma bem limpa e facil usando um bom terminal (aquilo que vem no windows não deve ser chamado de terminal :) ).

Eu já sabia da existência do Vagrant então não perdi tempo,
instalei [Virtual Box](https://www.virtualbox.org/) depois [Vagrant](https://www.vagrantup.com/),
antes de continuar falando sobre como foi o resto processo vou deixar claro para quem não sabe o que são esses caras acima.

Vagrant - Ferramenta construir e gerenciar ambientes virtualizados de desenvolvimentos, desenvolvida por Mitchell Hashimoto e John Bender.
Ou seja, Vagrant simula uma stack completa de um sistema operacional.

Virtual Box - Software de virtualização desenvolvido pela empresa Innotek depois comprado pela Sun Microsystems que posteriormente foi comprada pela Oracle que,
como o VMware Workstation, visa criar ambientes para instalação de um sistema operacional.


Mas como assim, as 2 ferramentas são faz a mesma coisa ?

Não, na verdade o Vagrant usa por debaixo dos panos a API do Virtual Box para criar suas máquinas.

Mas e qual o sentido de usar o Vagrant se posso usar o Virtual Box diretamente ?

Meus 2 principais motivos são:
1.Pq com Vagrant não preciso carregar toda aquele interface ou tudo que o virtual box utiliza para dosponibilizar uma maquina.
2.Pq com Vagrant consigo configurar minha maquina com um único arquivo (Vagrantfile)

###Agora voltemos ao processo de instalação.

Depois do VirtualBox e Vagrant instalados, abra o CMD (Terminal Windows) e vamos aos passos:

Dentro da pasta do seu projeto execute.

{% highlight bash %}
$ vagrant box and add hashicorp/precise64
{% endhighlight %}

(Isso vai adicionar uma vagrant-box com sistema operacional Ubuntu 12.04 LTS 64-bit.)
Para outras boxs dá uma olhada aqui [vagrantcloud](https://vagrantcloud.com/)

{% highlight bash %}
$ vagrant up
{% endhighlight %}

Irá iniciar a maquina.

{% highlight bash %}
$ vagrant ssh
{% endhighlight %}

Com isso você vai acessar a máquina
Obs: por padrão a porta SSH é 22, caso tenha problemas com suas chaves de acesso dá uma olhada no
[puttygen](http://the.earth.li/~sgtatham/putty/latest/x86/puttygen.exe)

{% highlight bash %}
$ Vagrant suspend
{% endhighlight %}

Salvar o estado atual da máquina e para.

{% highlight bash %}
$ vagrant halt
{% endhighlight %}

Irá desligar completamente a maquina.

{% highlight bash %}
$ vagrant destroy
{% endhighlight %}

Vai remover tudo relacionado a essa maquina.

Tem um projeto bem legal chamado [Vaprobash](https://github.com/fideloper/Vaprobash),
depois dá uma olhada, se você gostou do vagrant vai curtir muito o projeto.




