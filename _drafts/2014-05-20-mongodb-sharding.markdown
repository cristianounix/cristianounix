---
layout: post
title: MongoDB Sharding
description: "MongoDB Sharding"
modified: 2014-05-20
category: vim, shell
tags: [vim, shell]
comments: true
share: true
---

### MongoDB Sharding

Mas o que é Sharding?

Na a documentação do MongoDB diz:

> Sharding é o processo de armazenamento de registros de dados em várias
máquinas e é a abordagem do MongoDB para atender as demandas de crescimento de dados.
À medida que o tamanho dos dados aumenta, uma única máquina pode não ser suficiente
para armazenar os dados, nem proporcionar uma leitura aceitável.
Sharding resolve o problema com a escala horizontal.
Com sharding, você adicionar mais máquinas para suportar o crescimento de dados
e as demandas de ler e escrever operações.

<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/sharded-collection-mongodb.png" alt="Sharding MongoDB" style="height:350px;">
</p>


Legal então já sabemos que Sharding é um mecanismo do MongoDB que nos ajuda a escalar de forma horizontal nosso banco.

O que seria escalar de forma horizontal ?

Escalar uma aplicação de forma **horizontal** nada mais é do que vc adicionar mais maquinas para responder aquele serviço.

Já esclar de forma **vertical** quer dizer que você terá que por mais hardware na sua máquina afim de que ela suporte aquela demanda.

Beleza, então vamos fazer esse tal de sharding:
