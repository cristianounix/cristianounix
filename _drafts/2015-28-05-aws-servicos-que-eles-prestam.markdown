---
layout: post
title: AWS, O que significa cada sigla, e para que serve cada serviço.
description: "Serviços que a Amazon (AWS) tem disponiveis."
modified: 2015-05-28
category: aws, servidores
tags: [vaws, servidores]
comments: true
share: true
---


Bem, antes de tudo tenho que dizer, não estou aqui para fazer propaganda da Amazon :)

### Banco de Dados:

1. RDS - Relational Database Services é basicamente um serviço que oferece banco
de dados relacional (como o nome mesmo disse). usando o RDS você não precisa ter uma
instância de um banco rodando na sua máquina, pois ele vai está disponivel como um
serviço na aws, os backups são feitos automaticamente e disponibilizados no S3,
a recuperação desses backups podem ser feitas point-in-time, além de outros muito
recursos como replicação em zonas diferentes.
Os bancos que o RDS suporta hoje são
**MySQL**, **Oracle**, **PostgreSQL** e o **SQLServer** ou seja os principais do mercado.

2. DynamoDB - É um serviço de banco de dados **NoSQL** ele é muito rápido altamente
flexivel e tem uma latência abaixo de 10 milisegundos em qualquer escala.

3. ElastiCache - Não tenho muito o que falar, quem já usou **redis**,
**memcache** Serviço de cache basicamente, que tem suporte a replicação
dos nós integração **CloudWatch** entre muitos outros.


### Infraestrutura

1. EC2 -

2. VPC -

3. Direct Connect - É um serviço de rede que basicamente permite você
conectar seu datacenter ou suas máquinas na infraestrutura da Amazon.

4. Route53 - O Amazon Route 53 é um serviço web de DNS altamente disponível e escalável.
Nesse serviço a AWS também oferece serviço de registro de domínios. Você também pode
usar o Route53 para seus serviços fora da infra da Amazon.


### Aplicações

1. SES -

2. SQS -


### Automoção

1. Beanstalk - Esse cara é bem legal, ele basicamente cria todo uma infraestrutura como
provisionamento de recursos, balanceamento de carga, Auto Scaling e monitoramento.
Depois você faz o deploy de sua aplicação e vai configurando do seu gosto.


2. Cloud Formation -

3. OpsWork -

4. CodeDeploy - Automatiza todo processo de deploy de forma confiável e rápida.
Esse serviço elete tem uma série de recusos interessante, e ainda te dá uma certa confiança
de você poder fazer o deploy e se algo der errado o rollback de todo processo vai ser bem indolor.
É possivél fazer deploy em todas as suas instâncias definindo as estratégia de deploy, tipo:
queiro que faça deploy em todas as máquinas ou uma por uma e etc,
quando vc usa o ELB ele aplica a estratégia que você escolheu e impede que as requisições
que estão sendo processadas se perca.

### Administração e Segurança

1. IAM - Identity and Access Management

2. Direct Service -

3. CloudWatch - É um serviço de monitoramento para recursos da AWS,
você pode coletar e rastrear métricas, coletar e monitorar arquivos de log,
além de definir aletas dos serviços, ele pode monitorar Instancias EC2 tabelas
do DynamoDB, instancias do RDS além de você poder personalizar/criar sua propria
métrica.


### Armazenamento e Distribuição de conteúdo

1. S3 - Simple Storage Service é um serviço para armazenamento de objetos,
seguro, durável e altamente escalonável, oferece transferencia de dados
usando SSL e os dados são todos criptografados logo após o upload.
OBS: $0.03 por GB e $0.050 1.000 solicitações

2. Glacier - É um serviço muito parecido com o S3 só que ele é muito mais
barato que o S3 e mais voltado para armazenamentos de backups, ativos empresariais,
substituição de outras mídias como fitas magnéticas e etc.
OBS: $0.01 por GB e $0.050 1.000 solicitações

3. Storage Gateway -








<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/aws-az.jpg" alt="Zonas da AWS">
</p>