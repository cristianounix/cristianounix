---
layout: post
title: MongoDB básico que precisa saber.
description: "MongoDB básico"
modified: 2012-10-20
category: database, mongodb
tags: [database, mongodb]
comments: true
share: true
---

### O Banco

MongoDb - Banco de dados NoSql orientado a documentos escrito em C++,
seus dados são salvos em formas de documentos JSON (BSON - JSON "binarizado")

> Essa descrição é algo que você encontra fácil pela internet.

Claro que você já sabe, mas não custa nada mostrar o exemplo de um documento JSON:

{% highlight json %}
{
  "nome":"Testando um JSON",
  "email":"json@gmail.com",
  "tel":"5454-5454"
}
{% endhighlight %}

## Beleza vamos ao que interessa:

Listando todas as bases
{% highlight json %}
  $ show dbs
{% endhighlight %}

Listando todas as coleções
{% highlight bash %}
  $ show collections
{% endhighlight %}

Criando Coleção
{% highlight bash %}
  $ db.createCollection("pessoas")
{% endhighlight %}

Inserindo na Coleção
{% highlight bash %}
  $ db.agenda.insert({nome:"Testando um JSON" , email: "json@gmail.com" , tel: "5454-5454" });
{% endhighlight %}

Buscando registro na Coleção
{% highlight bash %}
  $ db.agenda.find({id:123})
{% endhighlight %}

Removendo registro da Coleção
{% highlight bash %}
  $ db.agenda.remove({id:1});
{% endhighlight %}

Atualizando registro na Coleção.
{% highlight bash %}
  $ var pess = db.pessoas.find({id:1});
  $ pess.email = "pessoa@gmail.com";
  $ db.pessoas.save(pess);
{% endhighlight %}
  ou
{% highlight bash %}
  $ db.pessoas.update({email: 'json@gmail.com'}, {$set: {email: "pessoa@gmail.com"}})
{% endhighlight %}

O **$set** faz com que todos os dados seja mantido, alterado apenas o email.

Buscando eegistros e limitando as ocorrencias.
{% highlight bash %}
  $ db.pessoas.find().limit(2)
{% endhighlight %}

Buscando Registros e ordenando as ocorrencias.
{% highlight bash %}
  $ db.pessoas.find().sort({"email":-1}) // onde 1 ASC e -1 DESC
{% endhighlight %}

Deletando uma base.
{% highlight bash %}
  $ db.dropDatabase() (irá deletar a base que vc está conectado)
{% endhighlight %}

Deletando uma coleção.
{% highlight bash %}
  $ db.pessoas.drop()
{% endhighlight %}

## Esses são os básicos, depois vou colocando mais aqui