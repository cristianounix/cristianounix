---
layout: post
title: Testando a performance de meu serviço com Siege
description: "Testando a performance de meu serviço com Siege"
modified: 2014-03-20
category: siege, performance
tags: [siege, performance]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/atop-status.jpg" alt="ATOP Status">
</p>

O [Siege](https://github.com/JoeDog/siege) é uma ferramenta stressar nosso serviço e vê até onde ele suporta esse stress.

#### MacOS
{% highlight bash %}
$ brew install siege
{% endhighlight %}

#### Linux
{% highlight bash %}
$ apt-get install siege
{% endhighlight %}

#### Windows

[Download](http://download.joedog.org/siege/siege-2.55.tar.gz)

> Basta descompactar navegar até a pasta com o console do windows e executar o siege.exe


#### Realizando um teste básico

Com esse comando abaixo o siege vai fazer um benchmark durante 60 segundos.

{% highlight bash %}
 
$ siege -b -t60S  http://site.com.br
 
{% endhighlight %}



Esse exemplo nós simulamos um acesso de 10 usuários simultâneos onde colocamos um intervalo de 3 segundos para cada usuário fazer interação.

{% highlight bash %}
 
$ siege -c10 -d3 -t2M http://site.com.br
 
{% endhighlight %}


Caso seja necessário abrir várias URLS para fazer o teste podemos usar o parametro ```-f``` e indicar o camiho do arquivo onde estão as URLS, assim:

{% highlight bash %}

$ siege -c5 -d6 -i -f urls-testar.txt

{% endhighlight %}

Obs: a opção ```-i``` faz com que o siege selecione aleatoriamente as URLs no arquivo.


#### Help do Siege

{% highlight bash %}

$ siege

Usage: siege [options]
       siege [options] URL
       siege -g URL
Options:
  -V, --version             VERSION, prints the version number.
  -h, --help                HELP, prints this section.
  -C, --config              CONFIGURATION, show the current config.
  -v, --verbose             VERBOSE, prints notification to screen.
  -q, --quiet               QUIET turns verbose off and suppresses output.
  -g, --get                 GET, pull down HTTP headers and display the
                            transaction. Great for application debugging.
  -c, --concurrent=NUM      CONCURRENT users, default is 10
  -i, --internet            INTERNET user simulation, hits URLs randomly.
  -b, --benchmark           BENCHMARK: no delays between requests.
  -t, --time=NUMm           TIMED testing where "m" is modifier S, M, or H
                            ex: --time=1H, one hour test.
  -r, --reps=NUM            REPS, number of times to run the test.
  -f, --file=FILE           FILE, select a specific URLS FILE.
  -R, --rc=FILE             RC, specify an siegerc file
  -l, --log[=FILE]          LOG to FILE. If FILE is not specified, the
                            default is used: PREFIX/var/siege.log
  -m, --mark="text"         MARK, mark the log file with a string.
  -d, --delay=NUM           Time DELAY, random delay before each requst
                            between 1 and NUM. (NOT COUNTED IN STATS)
  -H, --header="text"       Add a header to request (can be many)
  -A, --user-agent="text"   Sets User-Agent in request
  -T, --content-type="text" Sets Content-Type in request

{% endhighlight %}


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.