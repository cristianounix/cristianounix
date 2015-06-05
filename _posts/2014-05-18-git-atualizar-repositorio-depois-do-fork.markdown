---
layout: post
title: Atualizando meu repositório forked
description: "Preciso ataulizar meu repositório forked"
modified: 2014-05-18
category: git
tags: [git, repository]
comments: true
share: true
---

## Vamos a uma situação que facilmente pode acontecer.

Um belo dia você vai no github, e acha um repositório bem legal de um projeto bem irado,
dai você faz o fork do projeto e agora você já tem uma cópia dele, legal....

Depois de algum tempo você percebeu que o repositório que vc fez o fork está desatualizado, pois
os colaboradores do projeto fizeram muitas atualizações e correções de bugs, mas então e agora ?

> Como manter minha copia atualizada com o repositório original ?

Simples.

Apago esse meu repositório e clono ele novamente !

...

(mas espera, o git é uma ferramenta fantástica, ele deve contemplar isso)

...

Agora vamos fazer da forma certa, divertida, legal, elegante e da forma git de ser.

{% highlight bash %}
$ git remote add upstream [ADDRESS REPO ORIGINAL]
$ git fetch upstream
$ git merge upstream/master
{% endhighlight %}
