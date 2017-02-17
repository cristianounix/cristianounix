---
layout: post
title: preventDefault e stopPropagation
description: "preventDefault e stopPropagation"
modified: 2012-09-08
category: js, javascript
tags: [js, javascript]
comments: true
share: true
---


  event.preventDefault() impede que o evento padrão ocorra (ex.: seguir um link);

  event.stopPropagation() impede que o evento seja propagado para os handlers dos elementos DOM pais;

  return false faz as duas coisas (e ainda interrompe a execução do handler imediatamente, sem executar as instruções que vêm depois).


```javascript
$('#main a').click(function(event) {
    // impede o comportamento default (ir para página "teste")
    event.preventDefault();
    alert('main a');
});
```

```javascript
$('#main a').click(function(event) {
    // impede de propagar o evento para os elementos pais (ex.: #main)
    event.stopPropagation();
    alert('main a');
});
```

```javascript
$('#main a').click(function(event) {
    alert('main a');
    return false;
});
```


