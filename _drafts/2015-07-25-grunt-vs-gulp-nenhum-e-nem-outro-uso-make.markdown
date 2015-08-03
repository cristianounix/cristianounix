---
layout: post
title: Jaime o garoto quer Make !
description: "Grunt vs Gulp nenhum e nem outro uso make"
modified: 2015-07-25
tags: [tasks, grunt, make]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/make-makefile.png" alt="Make - Makefile" style="height:350px;" >
</p>

Hoje em dia só se fala em automatização de tarefas e etc etc, e com isso surgiram ferramentas fantásticas como Grunt, Gulp e outras que devem existir por esse mundão a fora.

Show !

Mas se voltarmos um pouco no tempo vamos encontrar um cara chamado ```MAKE```, sim o velho e querido make, quem já instalou algum programa em alguma distribuição unix-like usando os fontes sabe bem do quem estou falando.

{% highlight bash %}
$ ./configure
$ make
$ make install
{% endhighlight %}

Esse era o processo básico pra instalar o programa. 

Mas junto com isso você tinha que resolver problemas de dependências, caminhos de arquivos, permissões, versão e em último caso ligava ou chamava quele amigo que manjava muito de linux e pedia aquela ajuda quase chorando porque foi vencido pelo maldito pacote.... 

Muitos podem ver com algo ruim e etc, mas observe melhor, isso faz com que você entenda para onde os arquivos estão indo, que para um programa funcionar ele depende de outros ou de outras bibliotecas, que você tem que ter uma permissão especial em determinados arquivos em em outros não e etc...

Bem, voltando ao assunto principal....

Tá mas que diabos é o Make e qual a relação dele com o Grunt ou Glup ?

#### Make

> Basicamente o MAKE é um atomatizador de tarefas em ambientes unix que foi e é muito usado para compilar programas.


***Agora vocês entenderam a relação com o Gulp/Grunt ??***


No processo básico de instalação que falei acima o que acontecia era o seguinte:

1. ```$ ./configure``` era um script que depois de executado com sucesso criava o arquivo ```Makefile```

2. ```Makefile``` é o arquivo que dizia ao **make** quais eram as tarefas a serem realizadas para compilar o programa, essas tarefas eram feitas numa ordem topologica respeitando as dependências dos arquivos

3. ```$ make install``` esse comando chamava uma tarefa que estava definida no makefile e que tinha como objetivo fazer a instalação do programa compilado anteriormente


<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/graph.png" alt="Make - Topological" style="height:350px;" >
</p>


Veja mais sobre ordenação topologica [aqui](https://en.wikipedia.org/wiki/Topological_sorting), mas acho que futuramente faço um post sobre algum algoritimos de ordenação.

----

O Make é nativo das plataformas linux, mas caso não tenha basta instalar o pacote ```build-essential``` 

{% highlight bash %}
$ apt-get install build-essential
{% endhighlight%}

Antes de brincarmos com o make seria bom criar uma pasta em qualquer lugar de sua preferência, e dentro dela vamos criar nosso arquivo ```Makefile```.

No arquivo (makefile) que criamos vamos colocar esse conteúdo (respeitando as tabulações):

{% highlight bash %}
string = "Finalizando..."

all: task_all

task_all: dep1 dep2 dep3
	@echo $(string)
	@echo "Pronto !!"

dep1:
	@echo "Dependencia 1 "

dep2:
	@echo "Dependencia 2 "

dep3:
	@echo "Dependencia 3 "
	@echo
{% endhighlight %}


Agora via terminal e dentro dessa pasta execute o make.

{% highlight bash %}
$ make
----------------
Dependencia 1
Dependencia 2
Dependencia 3

Finalizando...
Pronto !!
{% endhighlight %}


Legal né ?

Se quiser mudar a ordem de execução só alterar a linha abaixo:

{% highlight bash %}
task_all: dep1 dep2 dep3
{% endhighlight%}

Para:

{% highlight bash %}
task_all: dep3 dep2 dep1
{% endhighlight%}

Execute o make e observe a saida novamente, (percebeu que a ordem mudou ?!).

Você também pode chamar uma tarefa especifica, assim: 

{% highlight bash %}
$ make dep2
{% endhighlight%}


#### Vamos fazer algo útil


Agora que sabemos o básico do make, vamos pensar em como poderiamos substituir uma tarefa simples do grunt, nosso problema será esse:

1. Compilar nossos arquivos stylus
2. Concatenar todos os arquivos
3. Minificar 


{% highlight bash %}
# Compila, concatena e minifica todos os arquivos de estilo
# Obs: verifica se você tem disponivel os executaveis globalmente,
#     senão terá que colocar o path deles

PATH_STYL=styl/*.styl
PATH_CSS=css
STYLUS_CMD=stylus
CONCAT_CMD=cat 
CONCAT_PATH=styl/header.css styl/body.css styl/footer.css > css/style.css
UGLIFY_CMD=uglify
UGLIFY_PATH=-s ./css/style.css -o ./css/style.min.css -c

all: task_all

task_all: compile concat minify clean
	@echo "Pronto !!"

compile:
	$(STYLUS_CMD) $(PATH_STYL)
	@echo "Stylus compilado..."

concat:
	$(CONCAT_CMD) $(CONCAT_PATH)
	@echo "Concatenando..."

minify:
	$(UGLIFY_CMD) $(UGLIFY_PATH)
	@echo "Minificando..."
 
clean:
	rm styl/*.css
	@echo "Limpando a bagunça..."	
{% endhighlight%}


<p style="text-align: center;">
A saída desse cara que nós acabamos de fazer vai ser algo assim:	
</p>

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/gif-make-makefile-front.gif" alt="Make Makefile FrontEnd">
</p>


##### Vamos tentar deixar um pouco mais legal.


{% highlight bash %}
# Compila, concatena e minifica todos os arquivos de estilo
# Obs: verifica se você tem disponivel os executaveis globalmente,
#     senão terá que colocar o path deles

CSS_FINAL = css/style.min.css
STYLUS_FILES = styl/header.styl \
                 styl/body.styl \
                 styl/footer.styl

CSS_MIN = $(STYLUS_FILES:.styl=.min.css) 

all: $(CSS_FINAL)
 
$(CSS_FINAL): $(CSS_MIN)
	cat $^ >$@
	rm -f $(CSS_MIN)

%.min.css: %.styl
	stylus --compress <$< >$@

clean:
	rm -f $(CSS_FINAL)
{% endhighlight%}

<br>

---

<br>

##### Existem alguns variavéis do Make que devemos saber:

***$@*** - isso mostra o nome target atual:

{% highlight bash %}
all: blabla
	@echo "Ei"
blabla:
	@echo $@

# Saída será:
# 	blabla
#	Ei
{% endhighlight %}


***$<*** - isso mostra o nome da primeira dependência:

{% highlight bash %}
all: blabla vixi
	@echo "A dependencia desse target é" $<

blabla:

vixi:

# Saída será:
# 	A dependência desse target é blabla
{% endhighlight %}

  
***[$^]*** - isso mostra a lsita das dependências do target:

{% highlight bash %}
all: blabla vixi
	@echo "As dependências desse target são" $^

blabla:

vixi:

# Saída será:
# 	As dependências desse target são blabla vixi
{% endhighlight %}


 
***[$?]*** - Lista de todos arquivos de dependências mais recentes que a regra, a lista de arquivos é separada por espaço:

Crie 2 ou mais arquivos *.txt na pasta que irá ficar esse teste do makefile e coloquei qualquer texto dentro deles.

{% highlight bash %}
HEAD_CMD=head
FILES=$(shell find . -name '*.o')

show: $(FILES)
	$(HEAD_CMD) $?

# Saída será:
#	head file1.txt file2.txt file3.txt [...]
#	==> file1.txt <==
#	[CABECALHO_1]
#	==> file2.txt <==
#	[CABECALHO_2]
{% endhighlight %}


***[\$\*]*** - Nome do arquivo sem a extensão:

{% highlight bash %}
CSS_FINAL = css/style.min.css
STYLUS_FILES = styl/header.styl  \
                 styl/body.styl \
                 styl/footer.styl

CSS_MIN = $(STYLUS_FILES:.styl=.min.css) 

all: $(CSS_FINAL)
 
$(CSS_FINAL): $(CSS_MIN)

%.min.css: %.styl
	@echo "Arquivo ->" $*

# Saída será:
#	Arquivo -> styl/header
#	Arquivo -> styl/body
#	Arquivo -> styl/footer
{% endhighlight %}


Muita coisa legal dá pra fazer com o Make. 

Dá para por exemplo você se conectar via ssh ou ftp e fazer o upload ou download de arquivos, rodar um shell script  com diversas rotinas, você pode criar todo o setup da sua máquina colocando o make para instalar tudo que vc usa precisa: vim, mongodb, git, nodejs, sublime, brew, ou até mesmo configurar o deploy de sua aplicação, etc etc....


Isso só foi o ponto de partida, foi o básico do básico do básico e mais um pouco básico do que o make faz....


##### Vocês trocariam seu Gruntfile (ou semelhantes) por um Makefile ?

> Haa não tô dizendo que as outras ferramentas são ruins, ou que não se deve usar elas, quero chamar atenção para as ferramentas que já estão aqui a muito muito tempo e não conhecemos tão bem quanto pensamos.

<br>

Ps: Lembre-se que tudo isso só é possivél estando fora da win-matrix, então faça sua escolha e tome a pilula vermelha, pq só assim conseguirá ver fora da janela :)

<br>

Referência suprema > [Manual Make](http://www.gnu.org/software/make/manual/make.html){:target="_blank"}



