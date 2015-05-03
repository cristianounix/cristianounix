---
layout: post
title: Instalando vagrant no Windows
modified: 2015-01-10
category: vagrant, linux
tags: [vagrant, linux]
---

## Vagrant + Windows:

Sempre fui usuário Linux/Mac só que nesse inicio de 2015 com algumas mudanças no trabalho precisei começar
e usar Windows, logo de cara senti a necessidade de uma maquina linux pq tinha problemas que conseguia resolver
de forma bem limpa e facil usando um bom terminal (aquilo que vem no windows não deve ser chamado de terminal :) ).
Eu já sabia da existência do Vagrant então não perdi tempo,
instalei [Virtual Box] (https://www.virtualbox.org/) depois [Vagrant] (https://www.vagrantup.com/),
antes de continuar falando sobre como foi o resto processo vou deixar claro para quem não sabe o que são esses caras acima.

Vagrant - Ferramenta construir e gerenciar ambientes virtualizados de desenvolvimentos, desenvolvida por Mitchell Hashimoto e John Bender. Ou seja, Vagrant simula uma stack completa de um sistema operacional.

Virtual Box - Software de virtualização desenvolvido pela empresa Innotek depois comprado pela Sun Microsystems que posteriormente foi comprada pela Oracle que, como o VMware Workstation, visa criar ambientes para instalação de um sistema operacional.


Mas como assim, as 2 ferramentas são faz a mesma coisa ?

Não, na verdade o Vagrant usa por debaixo dos panos a API do Virtual Box para criar suas máquinas.

Mas e qual o sentido de usar o Vagrant se posso usar o Virtual Box diretamente ?

Meus 2 principais motivos são:
  - Pq com Vagrant não preciso carregar toda aquele interface ou tudo que o virtual box utiliza para dosponibilizar uma maquina.
  - Pq com Vagrant consigo configurar minha maquina com um único arquivo (Vagrantfile)

Agora voltemos ao processo de instalação.

Depois do VirtualBox e Vagrant instalados, abra o CMD (Terminal Windows) e vamos aos passos:
Dentro da pasta do seu projeto execute.

$ vagrant box and add hashicorp/precise32
(Isso vai adicionar uma box do sistema operacional Ubuntu 12.04 - 32-bit)
Para outros sistema dá uma olhada aqui https://atlas.hashicorp

$ vagrant up
Irá iniciar a maquina.

$ vagrant ssh
Com isso você vai acessar a máquina
Obs: por padrão a porta SSH é 2222, caso tenha problemas com suas chaves de acesso dá uma olhada no
[puttygen] (http://the.earth.li/~sgtatham/putty/latest/x86/puttygen.exe)

$ Vagrant suspend
Salvar o estado atual da máquina e para.

$ vagrant halt
Irá desligar completamente a maquina.

$ vagrant destroy
Vai remover tudo relacionado a essa maquina.





