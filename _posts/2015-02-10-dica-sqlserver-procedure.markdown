---
layout: post
title: Sql Server - Uma dica rápida e simples
modified: 2015-01-20
category: .net, c#
tags: [.net, c#, visualstudio]
---

## Dica bem rápida e simples sobre como melhorar a performance em suas procedures no sql server.

Quando executar sua procedure o sql server retorna o total de linhas afetadas por a mesma.

Tipo isso:
```
  (100 row(s) affected)
```

Para remover esse tipo de informação que envolve um processamento de contagem e
trafego de dados, basta colocar uma simples cláusula no inicio de suas procedures.

```
  SET NOCOUNT ON
```







