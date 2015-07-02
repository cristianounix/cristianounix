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

$ch = curl_init('upload.php');
$cfile = new CURLFile('arquivo.zip','application/zip','name_file');
$data = array('arquivo' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_exec($ch);

?>
{% endhighlight %}


No seu arquivo ``upload.php``

{% highlight php %}
<?php

var_dump($_FILES); 

?>
{% endhighlight %}
