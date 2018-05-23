---
layout: post
title: Preciso retirar as restrições do meu banco, não importa o motivo, eu quero !
description: "Vim parte 2"
modified: 2013-07-18
category: mysql
tags: [mysql]
comments: true
share: true
---

E então acontece aquele momento que você precisa deletar um dado que está relacionado a muitos outros, ou quer dropar a tabela, 
ou precisa repovoar uma(s) tabela(s) que possui constrains e que você não quer saber delas poruqe você só quer testar uma coisa no seu sistema,
ou até mesmo porque você não quer saber de nada de integridade, você quer zuar todos os dados mesmo e ver o que acontece, entre outros motivos...

Bem no MySQL temos uma variavél de sessão chamada ```FOREIGN_KEY_CHECKS``` 
que nos permite habilitar ou desabilitar essa verificação de constraints nas tabelas InnoDB.


Uma tabela legal da documentação do MySQL
 

| Recurso 								| MyISAM| Memory 	| InnoDB	| Archive 	|
|---									|--:	|---	  	|---	 	|---		|
| Storage limits						| 256TB	| RAM 		| 64TB	 	| None 		|
| Transactions 							| No 	| No 		| Yes 		| No 		|
| Locking granularity 					| Table | Table 	| Row 		| Table 	|
| MVCC 				  					| No 	| No 		| Yes 		| No 		|
| Geospatial data type support  		| Yes 	| No 		| Yes 		| Yes 		|
| Geospatial indexing support 			| Yes 	| No 		| Yes 	 	| No 		|
| B-tree indexes 						| Yes 	| Yes 		| Yes 		| No 		|
| T-tree indexes 						| No 	| No 		| No 		| No 		|
| Hash indexes 							| No 	| Yes 		| No 	 	| No 		|
| Full-text search indexes 				| Yes 	| No		| Yes	 	| No 		|
| Clustered indexes 					| No 	| No 		| Yes 		| No 		|
| Data caches 							| No 	| N/A 		| Yes 		| No 		|
| Index caches 							| Yes 	| N/A 		| Yes 		| No 		|
| Compressed data 						| Yes 	| No 		| Yes	 	| Yes 		|
| Encrypted data[f] 					| Yes 	| Yes 		| Yes 		| Yes 		|
| Cluster database support 				| No 	| No 		| No 		| No 		|
| Replication support[g] 				| Yes 	| Yes 		| Yes 		| Yes 		|
| Foreign key support 					| No 	| No 		| Yes 		| No 		|
| Backup / point-in-time recovery[h] 	| Yes 	| Yes 		| Yes 		| Yes 		|
| Query cache support 					| Yes 	| Yes 		| Yes 		| Yes 		|
| Update statistics for data dictionary | Yes 	| Yes 		| Yes 		| Yes 		|

[Fonte](https://dev.mysql.com/doc/refman/5.1/en/storage-engines.html)

Falei falei mas não disse como desabilitar as verificações né ? :)


{% highlight sql %}
SET FOREIGN_KEY_CHECKS = 0;
 
SELECT @@FOREIGN_KEY_CHECKS;
 
SET FOREIGN_KEY_CHECKS = 1;
{% endhighlight %}

 