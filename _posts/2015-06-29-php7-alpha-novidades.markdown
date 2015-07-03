---
layout: post
title: Novidades do PHP7 (Alpha Version)
description: "Novidades do PHP7 (Alpha Version)"
modified: 2015-06-29
category: php
tags: [php]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/php7-is-coming.png" alt="PHP7">
</p>

Bem se você achava o PHP rápido eu tenho algo pra te dizer, ele está 2 vezes mais rápido !!


* A versão 7 é até duas vezes mais rápido que o PHP 5.6
* Suporte de 64 bits consistente
* Muitos erros fatais são agora Exceções
* Remoção de SAPIs e extensões antigas e sem suporte
* O operador nulo coalescente (??)
* Operador de comparação combinada (<=>)
* Declarações do tipo de retorno
* Declarações tipo escalar
* Classes anônimos
 
Vamos a alguns exemplos desses caras acima:

#### Coalesce Operator

{% highlight php %}
<?php
echo false ?? 'B'; // B
echo null ?? 'B'; // B
?>
{% endhighlight %}

{% highlight php %}
<?php
var_dump(2 ?? 3 ? 4 : 5);      // (2 ?? 3) ? 4 : 5        => int(4)

$x1 = NULL;
$x2 = NULL;
$x3 = 3;
var_dump($x1 ?? $x2 ?? $x3); // int(3)

var_dump(0 || 2 ?? 3 ? 4 : 5); // int(4)
?>
{% endhighlight %}

{% highlight php %}
<?php
function bla() {
    echo "Testando";
}
?>
{% endhighlight %}

{% highlight php %}
<?php
var_dump(true ?? bla()); // bool(true)
?>
{% endhighlight %}



#### Operador de comparação combinada 

Retornos:

- 0 se são iguais
- 1 se o da esquerda é o maior
- -1 se o da direita é o maior

Ou seja: [ <, <=, ==, >=, > ]

Exemplos:

{% highlight php %} 
<?php
// Integers
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1

// Floats
echo 1.5 <=> 1.5; // 0
echo 1.5 <=> 2.5; // -1
echo 2.5 <=> 1.5; // 1
?>
{% endhighlight %}

{% highlight php %} 
<?php
// Strings
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1
echo "a" <=> "aa"; // -1
echo "zz" <=> "aa"; // 1
?>
{% endhighlight %}

{% highlight php %} 
<?php
// Arrays
echo [] <=> []; // 0
echo [1, 2, 3] <=> [1, 2, 3]; // 0
echo [1, 2, 3] <=> []; // 1
echo [1, 2, 3] <=> [1, 2, 1]; // 1
echo [1, 2, 3] <=> [1, 2, 4]; // -1
?>
{% endhighlight %}

{% highlight php %} 
<?php
// Objects
$a = (object) ["a" => "b"]; 
$b = (object) ["a" => "b"]; 
echo $a <=> $b; // 0
 
$a = (object) ["a" => "b"]; 
$b = (object) ["a" => "c"]; 
echo $a <=> $b; // -1
 
$a = (object) ["a" => "c"]; 
$b = (object) ["a" => "b"]; 
echo $a <=> $b; // 1
 
// only values are compared
$a = (object) ["a" => "b"]; 
$b = (object) ["b" => "b"]; 
echo $a <=> $b; // 0
?>
{% endhighlight %}



#### Declarações do tipo de retorno

{% highlight php %}
<?php
function get_config(): array {
    return 42;
}
get_config();
 
function answer(): int {
    return 42;
}
answer();
?>
{% endhighlight %}



#### Declarações tipo escalar

Para que tenha uma rigorosa checkagem de tipos é necessário ativar, basta fazer:

{% highlight php %}
<?php
declare(strict_types=1);
?>
{% endhighlight %}

Logo no inicio do arquivo, depois disso todas as funções e metodos que estão nesse arquivo serão rigorosamente verificadas.


Exemplos:

{% highlight php %} 
<?php
function soma(float $a, float $b) {
    return $a + $b;
} 
soma(1, 2); // float(3)
soma(1.1, 2.2); // float(3.3)
soma("1", "2"); // Erro - a non well formed numeric value encountered 
 
function soma(int $a, int $b) {
    return $a + $b;
} 
soma(10, 20); // float(30)
soma("1", "2"); // Erro - Argument 1 passed to soma() must be of the type integer, string given
?>
{% endhighlight %}



#### Anonymous Class

{% highlight php %} s
<?php
var_dump(new class($i) {
		    public function __construct($i) {
		        $this->i = $i;
		    }
		});


$bla->setMsg(new class {
				  public function log() {
				    echo "Oi galerinha !";
				  }
				});
?>
{% endhighlight %}



[PHP7 Doc](https://wiki.php.net/rfc#php_70)


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.
