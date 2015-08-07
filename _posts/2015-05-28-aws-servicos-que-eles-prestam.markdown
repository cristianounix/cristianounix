---
layout: post
title: AWS o que significa cada sigla, e para que serve cada uma delas.
description: "Serviços que a Amazon (AWS) tem disponiveis."
modified: 2015-05-28
category: aws, servidores
tags: [vaws, servidores]
comments: true
share: true
---


Bem, antes de tudo tenho que dizer, não estou aqui para fazer propaganda da Amazon :)


<p style="text-align: center;">
<img src="{{site.baseurl}}/img/posts/aws-az.jpg" alt="Zonas da AWS">
</p>

O motivo pelo qual estou fazendo esse post é que a AWS Summit de 2015 em São Paulo foi muitooo legal, bem melhor que nas versões anteriores, simplesmente pq quem estava palestrando eram os engenheiros que estavam por dentro do projeto, e não um cara que tinha uma visão comercial do produto, a organização com fones de ouvido foi uma coisa excelente pena que não dá para você pegar todas as paletras que você deseja pois elas ocorrem em paralelo.

##### Mas chega de conversa e vamos falar um pouco da sopa de letrinhas da Amazon.

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

1. EC2 - Elastic Compute (não sei pq o "2" :)) acho que é uma das partes mais importantes da
AWS, o ec2 é um máquina virtual onde você pode aumentar ou diminuir seus recursos, além de você
poder colocar sua instância numa melhor posição geografica afim de otimizar a latência e ainda
pode criar redundâncias nas suas zonas como mostramos na imagem acima.

2. VPC - (Virtual Private Cloud) é basicamente uma rede virtual que se parece muito com uma rede
tradicional que montamos, na VPC você pode criar várias outras sub-nets.

3. Direct Connect - É um serviço de rede que basicamente permite você
conectar seu datacenter ou suas máquinas na infraestrutura da Amazon.

4. Route53 - O Amazon Route 53 é um serviço web de DNS altamente disponível e escalável.
Nesse serviço a AWS também oferece serviço de registro de domínios. Você também pode
usar o Route53 para seus serviços fora da infra da Amazon.


### Aplicações

1. SES - Simple Email Service em poucas palavras é um serviço de envio (apenas) de emails,
oferece acesso fácil e em tempo real às suas estatísticas de envio e notificações internas de
devoluções.

2. SQS -  Simple Queue Service é um sistema de filas distribuida,
em já usou Sidekiq, Celery, Nats, ou qualquer outro serviço de fila vai se dá bem com o SQS.
Uma coisa interessante a se notar é que como o SQS é distribuido ele não farante o first in, first out
das mensagens colocadas na fila, caso você queira manter a fila na ordem então você deve colocar a informação
da ordem junto com a mensagem enviada, e no final quando o serviço te devolver a mensagem vc deve
ordenar da forma adequada.

3. SNS - Simple Notification Service - serviço de notificações via push,
permite enviar mensagens individuais ou para um grande número de usuários.
Push para dispositivos móveis (Apple, Google, Fire OS e Windows), caixas de e-mail ou
até mesmo para outros serviços como SQS ou Aws Lambda ou para qualquer endpoint HTTP.
O SNS pode tabém enviar SMS para usuários de dispositivos móveis nos EUA.

4. Lambda - Esse cara aqui é muito lega, bem, ele exeuta um código assim que algum evento
acontece, por exemplo, se você quiser um serviço que ao fazer o upload de uma imagem no S3
você pegue essa imagem processe ela em tons de cinza o AWS Lamda é o caminho, basicamente o
evento para acionar o lambda foi o upload da imagem no S3, temos outros eventos como leitura
do **DynamoDB**.
Se quisermos chamar as funções temos [LambdaAPI](http://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html)
[Lambda Preços](http://aws.amazon.com/pt/lambda/pricing/)

### Automoção

1. Beanstalk - Esse cara é bem legal também, ele basicamente cria todo uma infraestrutura como
provisionamento de recursos, balanceamento de carga, Auto Scaling e monitoramento.
Depois você faz o deploy de sua aplicação e vai configurando do seu gosto.


2. Cloud Formation - Esse serviço te permite fazer provisionamento de uma infraestrutura através de um modelo
em Json, exemplo [veja esse modelo](https://s3-us-west-2.amazonaws.com/cloudformation-templates-us-west-2/Rails_Single_Instance.template),
logo no início fica fácil de entender as configurações da infraestrutura. Ele parece fazer a mesma
coisa que o *Beanstalk* faz né ? sim parece, mas o beanstalk está mais voltado a entregar ao desenvolvedor
uma infraestrutura rápida, segura e fácil de escalar, já o cloud formation foca em provisionar a infraestrutura, preocupando-se
mais con os serviços necessários para a sua aplicação.

3. CodeDeploy - Automatiza todo processo de deploy de forma confiável e rápida.
Esse serviço elete tem uma série de recusos interessante, e ainda te dá uma certa confiança
de você poder fazer o deploy e se algo der errado o rollback de todo processo vai ser bem indolor.
É possivél fazer deploy em todas as suas instâncias definindo as estratégia de deploy, tipo:
queiro que faça deploy em todas as máquinas ou uma por uma e etc,
quando vc usa o ELB ele aplica a estratégia que você escolheu e impede que as requisições
que estão sendo processadas se perca.

### Administração e Segurança

1. IAM - (Identity and Access Management ) Basicamente é um recurso que permite gerenciar os serviços e permissões que cada usuário
tem acesso no console da Amazon.

2. CloudWatch - É um serviço de monitoramento para recursos da AWS,
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




