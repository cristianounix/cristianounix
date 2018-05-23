---
layout: post
title: AngularJS Factory, Service e agora josé ?
description: "AngularJS Factory, Service qual devo usar ?"
modified: 2015-05-28
category: angularjs, javascript
tags: [angularjs, javascript]
comments: true
share: true
---

<p>

<img src="{{site.baseurl}}/img/posts/angularjs-banner.jpg" alt="AngularJS">

</p>


Quando começamos a usar o [AngularJS](https://angularjs.org/) mais afundo logo nos deparamos com os conceitos de Factory ou Service .

E depois de testar cada um desses caras vem aquela dúvida.

Qual deles devo usar ?

Se você observar no código fonte do projeto vai perceber bem a diferença,
veja [aqui](https://github.com/angular/angular.js/blob/master/src/auto/injector.js#L687) com seus próprios olhos.

Legal né ?

Percebeu ?

Sim, é isso mesmo que viu o service retorna um factory.

Se olhar com mais atenção vai perceber que a "grande" diferença entre eles está aqui:

{% highlight javascript %}
return $injector.instantiate(constructor);
{% endhighlight %}

----------------------

>   Todos os Services e Factory em Angular são singletons


Vamos fazer um exemplo para ilustrar melhor esses caras:

{% highlight javascript %}

var app = angular.module('app', []);

app.service('helloWorld_Service', function() {
    this.sayHello = function() {
        return "Hello World"
    };
});

app.factory('helloWorld_Factory', function() {
    return {
        sayHello: function() {
            return "Hello World"
        }
    };
});


function CrtlApp($scope, helloWorld_Factory, helloWorld_Service) {
    $scope.many_hello = [
        helloWorld_Factory.sayHello(),
        helloWorld_Service.sayHello()
    ];
}

{% endhighlight %}


{% highlight html %}
<div ng-controller="CrtlApp">
    { { many_hello } }
</div>
{% endhighlight %}





<table style="width: 330px;">
    <tr>
        <td></td>
        <td>Novas Instancias</td>
        <td>Configuravél </td>
    </tr>
    <tr>
        <td>Service</td>
        <td bgcolor="red">NO</td>
        <td bgcolor="red">NO</td>
    </tr>
    <tr>
        <td>Factory</td>
        <td bgcolor="green">YES</td>
        <td bgcolor="red">NO</td>
    </tr>
    <tr>
        <td>Provider</td>
        <td bgcolor="green">YES</td>
        <td bgcolor="green">YES</td>
    </tr>
</table>


##### Eu costumo a usar essa regras:


1. Use Serviço quando você precisa apenas de um objeto simples, como um Hash, por exemplo {bla; "oi", name: "eu"} mas você não pode instanciar-lo.

2. Use fábrica quando você precisa instanciar um objeto, ou seja, para ```new Users()``` ou ```new Comment()```, etc.

3. Use Provider quando você precisa configurá-lo. Ex: URL (homolog, production, test) ou PORT (dev, production)


### O AngularJS tem muitos outros Patters como:

1. Directives
2. Scope
3. Filter
4. Validator
5. Dependency Injection
6. Providers
7. Modules
8. ....
9. ...

