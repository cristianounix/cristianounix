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
veja [aqui](https://github.com/angular/angular.js/blob/master/src/auto/injector.js) com seus proprios olhos

Legal né ?

Percebeu ? 

Sim, é isso mesmo que viu o Service retorna um factory


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
    {{many_hello}}
</div>
{% endhighlight %}





                             _                _  _____ 
     /\                     | |              | |/ ____|
    /  \   _ __   __ _ _   _| | __ _ _ __    | | (___  
   / /\ \ | '_ \ / _` | | | | |/ _` | '__|   | |\___ \ 
  / ____ \| | | | (_| | |_| | | (_| | | | |__| |____) |
 /_/    \_\_| |_|\__, |\__,_|_|\__,_|_|  \____/|_____/ 
                  __/ |                                
                 |___/                                 

Tem muitos outros Patters como:

Directives
Scope
Filter
Validator
Dependency Injection
Providers
Modules
....
...


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.