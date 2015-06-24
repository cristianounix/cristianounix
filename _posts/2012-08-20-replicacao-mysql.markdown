---
layout: post
title: MMMs - Criando réplicas Multi-Master MySQL
description: "Criando réplicas do banco MySQL"
modified: 2012-08-20
category: mysql, database
tags: [mysql, database]
comments: true
share: true
---

### MMMs - Criando réplicas Multi-Master MySQL


<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/mysql-replication.png" alt="Réplicas do MySQL" style="height:350px;">
</p>

#### Antes disso vamos definir quem são nossos servidores:


<p style="text-align: center;">
SRV-01 (10.0.0.100)
<br>
<img src="{{site.baseurl}}/img/posts/db1.png" alt="Servidor Db1" style="height:100px;border:1px solid blue;">
</p>

<p style="text-align: center;">
SRV-02 (10.0.0.200)
<br>
<img src="{{site.baseurl}}/img/posts/db1.png" alt="Servidor Db2" style="height:100px;border:1px solid red;">
</p>

Vou considerar que seu banco de dados já está instalado e rodando perfeitamente.

Beleza, então vamos por a mão na massa....

A primeira coisa a se fazer, é no servidor **SRV-01**
fazer backup da base ou das bases que deseja replicar.

SRV-01

{% highlight bash %}
$ mysqldump -u root -p --databases db1 > db1.sql
{% endhighlight %}

e em seguida restaurar essa base no servidor replica **SRV-02**

SRV-02

{% highlight bash %}
$ mysql -u root -p < db1.sql
{% endhighlight %}

> Eu costumo sempre manter o mesmo usuário e mesma senha nos 2 servidores

#### Vamos agora a parte legal da coisa.

Abra o arquivo de configuração do MySQL **(my.cnf)** no servidor **SRV-01**

{% highlight bash %}
server-id = 100
auto-increment-increment = 2
auto-increment-offset = 1

log-bin
binlog-do-db = db1
; caso queira mais bases só replicar a linha acima

master-host = 10.0.0.200
master-user = user_db
master-password = *******
master-port = 3306
master-connect-retry = 60
{% endhighlight %}

Em seguida vamos configurar nosso servidor **SRV-02**, as configurações vão ser
bem parecidas com o servidor **SRV-01** só que agora apontamos para o servidor **1**,
fica assim então:

**SRV-01** ==> **SRV-02**

**SRV-01** <== **SRV-02**

> Resumindo, tudo que acontecer de alteração no 1 vai ser replicada para o 2 e vice-versa.

**SRV-02**

{% highlight bash %}
server-id = 200
auto-increment-increment = 2
auto-increment-offset = 2

log-bin
binlog-do-db = database
; caso queira mais bases só replicar a linha acima

master-host = 10.0.0.100
master-user = user_db
master-password = *******
master-port = 3306
master-connect-retry = 60
{% endhighlight %}


Pronto!

Depois disso vamos reinicar o MySQL e testar nossa replicação

{% highlight bash %}
$ service mysql restart
{% endhighlight %}

Nesse ponto tudo deve está funcionando perfeitamente.

Para garantir que está funcionando, você pode fazer alguma alteração no servidor **1**
e ver se foi replicado no servidor **2**.

Para certificar mais ainda que todo processo está ok vamos ver nos dois servidores
os parâmetros:

1. Slave_IO_Running
2. Slave_SQL_Running

{% highlight bash %}
mysql> start slave
mysql> show slave status
{% endhighlight %}

Agora é só correr para o abraço.

Você pode está com dúvida sobre as configurações né ?
deve tá se perguntando, para que server aquelas configurações:

1. auto-increment-increment = 2
2. auto-increment-offset = 2

Beleza, vamos tentar responder de forma simles e fácil.


O **auto-increment-increment** é nosso velho conhecido
"id int AUTO_INCREMENT", sim essa configuração é o nosso fator
de crescimento, geralmente ela é de 1, por exemplo logo após criarmos uma tabela assim:

{% highlight sql %}
CREATE TABLE tabela (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) DEFAULT NULL,
  PRIMARY KEY (id)
)
{% endhighlight %}

e em seguida fizermos um insert nela
{% highlight sql %}
insert into tabela values ('aaa');
{% endhighlight %}

Qual seria nosso **id** ?

1 certo ?

Sim, pq noso fato de crescimento é de 1 ou seja 1,2,3,4,5,....

Se alteramos esse fato para 6 nossos IDs seriam assim 6,12,18,24,....

> Obs: esse fator pode ser um número entre 1 e 65365

Fechado, e o que seria o nosso **auto-increment-offset** ?

Esse cara é muito importante pois ele evita conflitos de IDs caso ocorra
uma inserção simultânea na mesma tablea nas 2 bases em questão.

Vamos ver na prática como fica isso:

Servidor 1:
increment = 2
offset = 1

Servidor 2:
increment = 2
offset = 2


Servidor 1  (ids)              | Servidor 2 (ids)
------------------------------:|:-----------------------
 (primeiro insert)**1**        |**2** (primeiro insert)
 **3**                         |**4**
 **5**                         |**6**
 **7**                         |**8**
 **9**                         |**10**
 ...                           |...

