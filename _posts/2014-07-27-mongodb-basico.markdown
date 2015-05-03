---
layout: post
title: MongoDb Basico
description: "Comandos basicos do mongodb"
modified: 2014-07-27
category: database, mongodb
tags: [database, mongodb]
comments: true
share: true
---

## Comandos MongoDb comparados ao MySQL

### Introdução

MongoDb - Banco de dados NoSql orientado a documentos escrito em C++, seus dados são salvos em formas de documentos JSON (BSON - JSON "binarizado")

Execmplode de um JSON
´´
{nome:"Testando um JSON" , email: "json@gmail.com" , tel: "5454-5454" }
´´

## Beleza vamos ao que interessa:

Listando todas as bases do Mysql
  $ Show databases

Listando todas as bases do MongoDb
  $ show dbs

Listando todas as tabelas do Mysql
  $ Show databases

Listando todas as coleções do MongoDb
  $ show collections

Criando Tabela
  $ CREATE TABLE .....

Criando Coleção
  $ db.createCollection("pessoas")

Inserindo registros
  $ INSERT INTO pessoas ....

Inserindo na Coleção
  $ db.agenda.insert({nome:"Testando um JSON" , email: "json@gmail.com" , tel: "5454-5454" });

Buscando registro na Tabela
  $ SELECT * FROM pessoas WHERE id = 1

Buscando registro na Coleção
  $ db.agenda.find({id:123})

Removendo registro na tabela
  $ DELETE FROM pessoas WHERE id = 123

Removendo registro da Coleção
  $ db.agenda.remove({id:1});

Atualizando registro na Tabela
  $ UPDATE pessoas SET email = 'pessoa@gmail.com' WHERE id = 123;

Atualizando registro na Coleção

  $ var pess = db.pessoas.find({id:1});
  $ pess.email = "pessoa@gmail.com";
  $ db.pessoas.save(pess);

  ou

  $ db.pessoas.update({email: 'json@gmail.com'}, {$set: {email: "pessoa@gmail.com"}})
    O $set faz com que todos os dados seja mantido, alterado apenas o email.

Buscnado Registros e limitando as ocorrencias
  $ select * from pessoas limit 2

Buscnado Registros e limitando as ocorrencias
  $ db.pessoas.find().limit(2)

Buscnado Registros e ordenando as ocorrencias
  $ select * from pessoas order by email desc

Buscnado Registros e ordenando as ocorrencias
  $ db.pessoas.find().sort({"email":-1})


Deletando um banco de dados
  $ drop database pessoas

Deletando uma Coleção
  $ db.dropDatabase() (irá deletar a coleção que vc está conectado)

Deletando um tabela
  $ drop table pessoas

Deletando uma coleção
  $ db.pessoas.drop()


## Esses são os básicos, depois vou colocando mais aqui