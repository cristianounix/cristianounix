---
layout: post
title: Não vá dizer que Exception é o mesmo que Erro !
description: "Exception não é Erro"
modified: 2012-10-08
category: dev
tags: [dev]
comments: true
share: true
---


O que é Exception e o que é Erro ?

Sabemos que uma Exception é bem diferente de um Error não só sintaticamente falando, mas semanticamente também, vejamos.

Segundo o Dicionário:

#### Exceção:
Ruptura de uma regra ou norma; desvio de um padrão estabelecido; rompimento do que se considera normal: não há regra sem exceção.
Que não pertence ao todo: todos chegaram com exceção do filho.
Estado ou circunstância fora do comum: vantajosas eram as exceções.
Figurado. Pessoa cujo modo de pensar ou de proceder não é comum.
Jurídico. Mecanismo de proteção, ou de defesa, utilizado pelo réu com o propósito de anular os poderes do autor da ação ou de atrasar o seu prosseguimento.
Indivíduo que não respeita, ou rejeita, normas, padrões e regras.
Ação ou efeito de excetuar, de excluir.


#### Erro
É uma consequência de uma ação inesperada, sem planejamento, conhecimento. Pode ser uma falha humano ou por equipamento.

<hr>

No nosso mundo de programadores um bloco ***try catch*** é como um bloco "protegido" de falhas,
sendo mais direto quero dizer que quando ocorrer um problema no ***TRY** a execução do código irá desviar para a instrução ***CATCH***

Sintax básica

{% highlight java %}
try {
  //Meus comandos
}
catch (Exception e) {
 //Meu tratamento de exceção
}
{% endhighlight %}


Leia mais em: Blocos Try/Catch http://www.devmedia.com.br/blocos-try-catch/7339#ixzz3fJLw2ymn

Legal agora que sabemos a diferença, vamos a alguns exemplos, vou começar primeiro pelo **Erro**:


{% highlight php %}
<?php
function dividir($num1, $num2) {
    return $num1/$num2;
}

echo dividir(5,3) //Saída - Fatal Error (pois  falta o ";")
echo div(5,3); //Saída - Fatal Error (pois não definimos a função "div")
?>
{% endhighlight %}

Pronto, bem simples demonstrar um erro.


#### Agora vamos as Exceções (Exceptions)


Vamos pensar numa função de dividir dois números, essa função recebe 2 parametros que são os números a serem divididos.


{% highlight php %}
<?php
function dividir($num1, $num2) {
    if (!$num2) {
        throw new Exception('Não é possvél realizar a divisão por zero');
    }
    return $num1/$num2;
}


try {
    echo dividir(5,3); // Saída 1.6666666666667
    echo dividir(3,0); // Saída - Não é possvél realizar a divisão por zero
} catch (Exception $e) {
    echo 'Exceção: '.  $e->getMessage();
}
?>
{% endhighlight %}


Legal né :)


Agora vamos a um exemplo sem **Try Catch**

{% highlight php %}
<?php
function dividir($num1, $num2) {
    return $num1/$num2;
}

echo dividir(5,3); // Saída 1.6666666666667
echo dividir(3,0); // Saída - Warning:  Division by zero
?>
{% endhighlight %}


Perceba que agora a mensagem foi diferente da que adotamos no primeiro exemplo, vamos entender o motivo.

Quando dividimos dois números inteiros uma função chamada intdiv é chamada.

Olhando mais a fundo [AQUI](https://github.com/php/php-src/blob/94722e12cf4ba9a16f8a9f009d60b2e3f0f80e12/ext/standard/math.c) logo nas últimas linhas vamos
encontrar algo assim:

{% highlight c %}
PHP_FUNCTION(intdiv)
{
  zend_long numerator, divisor;
  if (zend_parse_parameters(ZEND_NUM_ARGS(), "ll", &numerator, &divisor) == FAILURE) {
    return;
  }
  if (divisor == 0) {
    zend_throw_exception_ex(zend_ce_division_by_zero_error, 0, "Division by zero");
    return;
  } else if (divisor == -1 && numerator == ZEND_LONG_MIN) {
    /* Prevent overflow error/crash ... really should not happen:
       We don't return a float here as that violates function contract */
    zend_throw_exception_ex(zend_ce_arithmetic_error, 0, "Division of PHP_INT_MIN by -1 is not an integer");
    return;
  }

  RETURN_LONG(numerator / divisor);
}
{% endhighlight %}



A função ***intdiv*** que está em (ext/standard/math.c) é responsavél por dividir 2 numeros interiros e caso o divisor seja igual a zero ele lança sua ***Exception***

{% highlight c %}
zend_throw_exception_ex(zend_ce_division_by_zero_error, 0, "Division by zero");
{% endhighlight %}


<hr>

### Vamos fazer alguns Tray Catch em outras linguagens:


#### Ruby



#### Python



#### JavaScript
{% highlight javascript %}
function dividir(n1, n2){
  if(n2 == 0) throw "Divisão por zero não é possivel";
  return n1/n2;
}

try {
    var result = dividir(2,0);
}
catch(err) {
    console.log(err)
}
{% endhighlight %}


#### Swift
{% highlight swift %}
enum EncryptionError: ErrorType {
    case Empty
    case Short
}

guard password.characters.count > 0 else { throw EncryptionError.Empty }
guard password.characters.count >= 5 else { throw EncryptionError.Short }

do {
    let encrypted = try encryptString("secret information!", withPassword: "")
    print(encrypted)
} catch EncryptionError.Empty {
    print("You must provide a password.")
} catch EncryptionError.Short {
    print("Passwords must be at least five characters, preferably eight or more.")
} catch {
    print("Something went wrong!")
}
{% endhighlight %}

[Fonte desse exemplo](https://www.hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch)


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.
