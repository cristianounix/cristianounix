---
layout: post
title: Enviando emails de localhost com SSMTP
description: "enviando emails de localhost com ssmtp"
modified: 2015-06-01
category: shell
tags: [shell]
comments: true
share: true
---

Chega o momento em que você precisa testar sua rotina de enviar emails ? e ae, o que você faz ?

Coloca no server de homologação e testa ?!

Coloca em produção e testa ?!

Não testa nada disso, #tacalepau e depois vemos !



<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/ssmtp.png" alt="SSMTP enviado emails localmente">
</p>


Bem, esses dias vi uma dica muito boa do
[Elcio Ferreira](https://plus.google.com/111110922991471311551)
onde ele demonstrava como enviar emails da sua máquina local utilizando o SSMTP.

Para instalar não tem nem conversa:

{% highlight bash %}
$ apt-get install ssmtp
{% endhighlight %}


em seguinda configure o arquivo /etc/ssmtp/smtp.conf

{% highlight bash %}
$ vim /etc/ssmtp/smtp.conf
{% endhighlight %}


{% highlight text %}
root=eu@site.com.br # Seu e-mail
mailhub= smtp.site.com.br # Seu servidor smtp, pode ser gmail, você pode por a porta aqui :xx
RewriteDomain=sitenovo.com.br # dominio mostrado na mensagem
hostname=gmail.com # seu dominio
AuthUser=eu@gmail.com # usuário
AuthPass=******* # senha
UseSTARTTLS=YES
{% endhighlight %}

Pronto !

 
