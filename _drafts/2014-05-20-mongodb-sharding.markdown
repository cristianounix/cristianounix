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
máquinas e é a abordagem da MongoDB para atender as demandas de crescimento de dados.
À medida que o tamanho dos dados aumenta, uma única máquina pode não ser suficiente
para armazenar os dados, nem proporcionar uma leitura aceitável e escrever rendimento.
Sharding resolve o problema com a escala horizontal.
Com sharding, você adicionar mais máquinas para suportar o crescimento de dados
e as demandas de ler e escrever operações.

<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/sharded-collection-mongodb.png" alt="Sharding MongoDB" style="height:350px;">
</p>

