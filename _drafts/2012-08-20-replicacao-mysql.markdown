---
layout: post
title: Criando réplicas do banco MySQL
description: "Criando réplicas do banco MySQL"
modified: 2012-08-20
category: mysql, database
tags: [mysql, database]
comments: true
share: true
---

### Replicação de "mão dupla" no MySQL,


<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/mysql-replication.png" alt="Réplicas do MySQL" style="height:350px;">
</p>

Antes disso vamos definir o servidores:

1. SRV-01 (10.0.0.100)

2. SRV-02 (10.0.0.200)

Vou considerar que seu banco dedados já está instalado e rodando sua base de dados.

Beleza, então agora vamos....

A primeira coisa a se fazer, é no servidor **1** fazer backup da base.

SRV-01

{% highlight bash %}
$ mysqldump -u root -p --databases base1 base2 > servidorA-dump.sql
{% endhighlight %}

e em seguida restaurar essa base no servidor replica **2**

SRV-02

{% highlight bash %}
$ mysql -u root -p < servidorA-dump.sql
{% endhighlight %}

> Eu costumo sempre manter o mesmo usuário e mesma senha nos 2 servidores

Vamos agora a parte legal da coisa.

Abra o arquivo de configuração do MySQL **(my.cnf)** no servidor **1*+

{% highlight bash %}
server-id = 100
auto-increment-increment = 2
auto-increment-offset = 1

log-bin
binlog-do-db = database
; caso queira mais bases só replicar a linha acima

master-host = 10.0.0.200
master-user = user_db
master-password = *******
master-port = 3306
master-connect-retry = 60
{% endhighlight %}

Em seguida vamos configurar nosso servidor **2** as configurações vão ser
bem parecidas com o servidor **1** só que no servidor 2 apontamos para o servidor **1**

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

Para garantir que está funcionando você pode fazer alguma alteração no servidor **1**
e ver se foi replicado no servidor **2**

Para certificar que todo processo mais ainda que tudo está ok vamos ver nos 2 servidores
os parâmetros:

.Slave_IO_Running
.Slave_SQL_Running

{% highlight bash %}
mysql> start slave
mysql> show slave statusG
{% endhighlight %}
