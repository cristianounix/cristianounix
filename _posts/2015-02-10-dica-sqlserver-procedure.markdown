---
layout: post
title: Sql Server - Uma dica rápida e simples
modified: 2015-01-20
category: .net, c#
tags: [.net, c#, visualstudio]
---

## Bem vou dá uma dica bem rápida e simples sobre suas procedures no sql server

Quando executar sua procedure o sql server retorna o total de linhas afetadas por aquela procedure.
Tipo isso:
(100 row(s) affected)


Para remover esse tipo de informação que envolve um processamento de contagem e um trafego de dados basta colocar:
Uma simples cláusula SET NOCOUNT ON no inicio de suas procedures.







