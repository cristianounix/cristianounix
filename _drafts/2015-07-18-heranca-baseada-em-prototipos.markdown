---
layout: post
title: Herança baseada em protótipos
description: "Herança baseada em protótipos"
modified: 2015-07-18
category: javascript,js
tags: [javascript,js]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/heranca.jpg" alt="Js inheritance">
</p>


{% highlight javascript %}

function Pessoa() {}

Pessoa.prototype.nome = 'red';
Pessoa.prototype.digaMeuNome = function () {
	console.log(this.nome);
};

function PessoaLegal() {}

PessoaLegal.prototype = new Pessoa();

var pessoaA = new Pessoa();
var pessoaB = new PessoaLegal();

pessoaA.nome = 'Sou só uma Pessoa :|';
pessoaB.nome = 'Eu sou uma Pessoa bem Legal :)';

//Testando
pessoaA.digaMeuNome(); 
pessoaB.digaMeuNome();


//Vamos agora adicionar mais um metodo no objeto A
Pessoa.prototype.metodoNovo = function(){
	console.log(this.nome);
}

//Testar
pessoaA.metodoNovo()

{% endhighlight %}


#### Tirando a prova dos nove

{% highlight javascript %}

pessoaB instanceof pessoaA

{% endhighlight %}