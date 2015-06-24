---
layout: post
title: AngularJS Factory ou Service e agora josé ?
description: " AngularJS Factory ou Service e agora josé ?"
modified: 2015-05-10
category: angularjs, javascript
tags: [angularjs, javascript]
comments: true
share: true
--- 

<p>

<img src="{{site.baseurl}}/img/posts/angularjs-banner.jpg" alt="AngularJS">

</p>
 


Quando começamos a usar o [AngularJS](https://angularjs.org/) logo nos deparamos com os conceitos de Factory e Service, 
mas.. 

1. Quem são esses caras ?
2. Eles não fazem a mesma coisa ?



Se você observar no codigo fonte do projeto vai perceber bem a diferença, 
veja [aqui](https://github.com/angular/angular.js/blob/master/src/auto/injector.js#L687) com seus proprios olhos

Legal né ?

Percebeu ? 

Sim, é isso mesmo que viu o Service retorna um factory, vamos fazer um exemplo para explicar melhor quem são esses caras:



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


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.