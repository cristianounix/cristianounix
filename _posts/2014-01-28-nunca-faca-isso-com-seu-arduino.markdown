---
layout: post
title:  Nunca faça isso com seu Arduino
date:   2014-01-28 16:57:51
---

Nunca ligue seus Leds ou qualquer outro tipo de componente diretamente nas portas do Arduino sem suar um resistor.
As saídas do Arduino suportam no máximo 40mA de corrente.
Usando a lei Ohm é facil perceber que terá dores de cabeça se fizer essa ligação direta nas portas digitais.
A resistência do Led tende para  zero, e a corrente do Arduino tende a infinito seu projeto irá para o saco.

Observer a forma correta:
Queda de tensão de Led comum = 2V
Corrente desejada para o Led = 10mA (menor que 40mA suportados pelo Arduino)
Tensão fornecida pelas saídas digitais do Arduino = 5V
Pela Lei de Ohm temos:

R = V/I -> R = (5 – 2) / 0,010 -> R = 300 Ohms

Portando, se for ligar Leds às saídas do seu Arduino use um resistor de 300 Ohms
em série para não danificar seu projeto.

O mesmo para qualquer tipo de componente.



Cuidado quando estiver ligando os fios do seu circuito pois, sem querer,
você poderá ligar um dos pinos do Arduino diretamente ao terra.
Se o pino ligado desta forma for programado como saída digital você irá “torrar” sua plataforma.
O raciocínio é o mesmo do 1º Erro explicado anteriormente, ou seja,
ao ligar um pino de saída ao terra você não limitará a corrente fornecida pelo
microcontrolador e rapidamente ela ultrapassará o limite de 40mA já mencionado acabando com sua alegria.


Ae vc logo pensa, vou ligar 10 Leds, um em cada porta, cada um com 25mA (para ficar bem “brilhante”) e farei uma sequencial de Leds.
Se em algum momento vc ligar um conjunto de leds fazendo com que a somatória das correntes consumidas ultrapasse um certo valor, você terá problemas.
A corrente máxima total que o microcontrolador é capaz de suportar são 200mA.
Se a soma de todas as correntes fornecidas pelo Arduino ultrapassar esse limite, você o danificará.