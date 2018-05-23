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

Mostra o log caso a comparação seja falsa.

```
# console.assert(expression, object)
console.assert(a > b, {'message':'a is not greater than b','a':a,'b':b});
```


Limpa o console de logs.

```
# console.clear()
console.log('Essa mensagem vai desaparecer');
console.clear();
```


Mostra o numero de vezes que foi chamado.

```
# console.count(label)
console.count(name + ' logged in');
```


Mostra qualquer dado no console

```
# console.debug(object [, object, ...])
# console.log(object [, object, ...])
console.log('Hello, Logs!');
console.log(obj);
```

Dir Prints a JavaScript representation of the specified object.
If the object being logged is an HTML element, then the properties of its
DOM representation are printed, as shown below
DirXml Prints an XML representation of the descendant elements of object if possible,
or the JavaScript representation if not. Calling console.dirxml() on HTML and XML elements
is equivalent to calling console.log().

```
# console.dir(object)
# console.dirxml(object)
console.dir({'a':1,'b':2});
console.dirxml(document);
```

Todas essas mostram uma mensagem parecida com .log().

- .error mostra a mensagem com o estilo e icone de erro, junto com o stack trace de onde ele foi chamado.
- .info mostra a mensagem com o icone azul de info.
- .warn similar ao .info só que este mostra em cores amarelas e o icone diferente.


```
# console.error(object [, object, ...])
# console.info(object [, object, ...])
# console.warn(object [, object, ...])
console.error(1);
console.info(1);
console.warn(1);
```

Mostra o stack trace de onde o metodo foi chamado.

```
# console.trace(object)
console.trace('Mostra o stack trace aqui');
```

Mostra os dados em formato de tabela, safari e firefox suportam, chrome ainda não (meu chrome = 56.0.2924.87)

```
# console.table()
console.table([1,2,3]);
```

Cria agrupamento de logs baseado no label, e o groupCollapsed faz com que o agrupamento venha fechado.

```
# console.group(object[, object, ...])
# console.groupCollapsed(object[, object, ...])
# console.groupEnd()

console.group("Erros da pagina inicial")
console.groupCollapsed()
  //Codigo aqui
console.groupEnd()
```

Inicia um timer para verificar o tempo gasto no processamento.
O parametro label permite que você inicie multiplos timers, assim no final de cada um ele irá associar o resultado a o seu determinado label.

```
# console.time([label])
# console.timeEnd([label])
console.time("Timer1");
  //Codigo1
  console.timeEnd("Timer2");
    //Codigo1
  console.timeEnd("Timer2");
console.timeEnd("Timer1");
```

Inicia um profile da CPU, funciona da mesma forma como o .time().

```
# console.profile([label])
# console.profileEnd()
console.profile("ProcessandoImagem");
//Processamento de imagem
console.profileEnd();
```
