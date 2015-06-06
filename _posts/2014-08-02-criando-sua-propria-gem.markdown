---
layout: post
title: Como criar sua gem, empacotar, instalar e abusar dela.
description: "Processo simples de criação de sua proópria gem, empacotar, instalar em seus projetos"
modified: 2014-08-02
category: ruby, gem, bundler
tags: ["gem, ruby"]
comments: true
---

## Vai logo abrindo o terminal para criar sua gem !


{% highlight bash %}
$ bundle gem my_gem

create my_gem/Gemfile
create my_gem/Rakefile
create my_gem /.gitignore
create my_gem/hello_world.gemspec
create my_gem/lib/my_gem.rb
create my_gem/lib/my_gem/version.rb

Initializating git repo in /Users/cristianounix/git/my_gem
{% endhighlight %}

Todos esses arquivos tem sua importância, mas os que mais se destacam são:

**hello_world.gemspec**

Terá informações, como nome da gem, autor, email, descrição e etc é sempre bom
colocar esses dados pois facilita que outros deves encontrem sua gem.

**version.rb**

Como o nome já diz, ele terá a versão de sua gem,
para entender um pocuo do versionamento dá uma olhada aqui
[Versionamento](http://semver.org/lang/pt-BR/).

**my_gem.rb**

Nesse aqui basicamente terá nossa gem propriamente dito, ou seja toda nossa lógica.
Eu gosto de criar uma outra pasta dentro da lib, e nela criar minhas classes
separadas por módulos, acho que ajuda bastante na hora da manutenção.


### Empacotando a danada

Esse é um dos processos mais complexos de criação da gem, vejam:

{% highlight bash %}
$ gem build hello_world.gemspec

Successfully built RubyGem
Name: my_gem
Version: 0.0.1
File: my_gem-0.0.1.gem
{% endhighlight %}


### Se prepare que agora vou te usar.

Vamos instalar ela primeiro.

{% highlight php %}
	$ gem install my_gem-0.0.1.gem
{% endhighlight %}

Agora vamos fazer um teste.

{% highlight bash %}
$ irb
>require 'my_gem'
>h = Hello.new
>h.say
"Olá sou uma gem danadinha :)"
{% endhighlight %}

Lindo né ?


> PS: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.
