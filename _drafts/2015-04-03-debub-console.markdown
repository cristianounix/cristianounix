---
layout: post
title: Debug Console
description: "Debug Console"
modified: 2015-03-03
category: js,chrome
tags: [chrome,js]
comments: true
share: true
---


<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/docker.jpg" alt="Docker">
</p>


console.log()
console.error()
console.table()
console.clear()
console.dir(object)

### Agrupando erros

  console.group("Erros da pagina inicial")
  console.groupCollapsed()
    //Codigo aqui
  console.groupEnd()


### Verificando performance

  console.time("Verificando codigo while")
  //Codigo a ser verficiado aqui
  console.timeEnd("Verificando codigo while")






