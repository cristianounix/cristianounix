---
layout: post
title: Enviando arquivo com CURL + PHP
description: "Enviando arquivo com CURL + PHP"
modified: 2014-02-10
category: php, curl
tags: [php, curl]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/php-curl.png" alt="PHP + cURL">
</p>

Hoje vi uma pergunta de um cara novo na comunidade phpba.

Ele perguntava:

> "Como faço para enviar um arquivo qualquer através de um script php para outro script php ?"

Depois de vê a pergunta fui trabalhar, pq sabia que depois de alguns minutos o cara teria a resposta dele.

Dito e feito, depois de uns 15 min ele já tinha algumas respostas não tão interessantes mas que já abriam caminho para uma solução melhor.

Basicamente todas as respostas "boas" utilizavam a lib [cURL](http://php.net/manual/en/book.curl.php) para fazer o trabalho pesado, só que percebi que todas as respostas a galera não utilizava uma forma "correta", com o [cURLFile](http://php.net/manual/en/class.curlfile.php)


Chega de leriado e let's code !


Arquivo ``send.php``

{% highlight php %}
<?php

$curl = curl_init('upload.php');
$curl_file = new CURLFile('arquivo.zip','application/zip','name_file');
$file = array('arquivo' => $curl_file);
curl_setopt($curl, CURLOPT_POST,1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $file);
curl_exec($curl);

?>
{% endhighlight %}


No seu arquivo ``upload.php``

{% highlight php %}
<?php

var_dump($_FILES);

?>
{% endhighlight %}


Pronto é isso ae, simples como tem que ser e lindo como o PHP é :)



> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.