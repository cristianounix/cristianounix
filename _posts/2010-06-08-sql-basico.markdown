---
layout: post
title: SELECT JOINS
description: "select joins e vamos entender"
modified: 2010-06-08
category: sql, db
tags: [sql, db]
comments: true
share: true
---

Como vocês sabem o [SQL](https://pt.wikipedia.org/wiki/SQL){:target="_blank"}  é uma linguagem de pesquisa declarativa que se tornou padrão nos bancos de dados relacionais.

O que quero mostrar aqui é como relacionar os dados usando sql, a principal motivação para isso foi ver muita gente  fazendo consultas de forma totalmente errada, ou então em muitos casos pegando uma parte alí outra aqui e juntando na camada de aplicação.

O comando mais básico do SQL é o Select exemplos:

{% highlight sql %}
select name from users 
-- retorna todos os usuarios

select name from users where name = 'Pitolomeu' 
-- retorna todos os usuarios onde o nome é igual a Pitolomeu

select name from users where age > 30
-- retorna todos os usuarios onde a idades deles é maior que 30 anos

select name from users where LEN(name) >= 50
-- retorna todos os usuarios onde a quantidade de 
-- caracters no nome deles é maior ou igual a 50

select name, project 
from  users as u
join  projects as p on p.user_id = u.id
where name like 'Leonardo da Vinci%'
-- retorna todos os usuarios e seus projetos onde o nome do 
-- usuário começa com 'Leonardo da Vinci' e pode ter qualquer coisa depois 
{% endhighlight %}


Eu tiver pesquisando afim de saber se aguém já havia explicado isso e como foi a abordagem dele, para eu tomar uma linha diferente de explicação, e então me deparei com algumas imagens no nosso querido StackOverflow, para explica o assunto basta somente expor essas imagens.


<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/SQL_JOINS.jpg" alt="JOINS SQL">
</p>


#### INNER JOIN

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/inner_join.png" alt="SQL Inner Join">
</p>

#### LEFT JOIN

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/left_join.png" alt="SQL Left Join">
</p>

#### RIGHT JOIN

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/right_join.png" alt="SQL Right Join">
</p>

#### OUTER JOIN

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/full_outer_join.png" alt="SQL Full Outer Join">
</p>


Um bom lugar para treinar esses comandos pode ser [aqui](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_columns){:target="_blank"}

