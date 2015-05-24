---
layout: post
title: Calculando o desvio padrão
modified: 2015-02-15
category: Mat
tags: [mat]
---

## Vou tentar explicar de forma bem simples e rapida o caluclo do desvio padrão. 

O que seria o Desvio Padrão ?
A Wikipédia define muito bem isso assim:
Em Probabilidade e Estatística, o desvio padrão é a medida mais comum da dispersão estatística (representado pelo símbolo sigma, σ). 
Ele mostra o quanto de variação ou "dispersão" existe em relação à média (ou valor esperado). 
Um baixo desvio padrão indica que os dados tendem a estar próximos da média; 
um desvio padrão alto indica que os dados estão espalhados por uma gama de valores.

Ou seja:
Desvio padrão é uma medida que indica a dispersão dos dados dentro da amostra, em poucas palavras, o quanto os resultados diferem da média. 
 

Calculando:

Amostra = 2,3,4,3,5,4,3


Primeiro vamos encontrar a variância:

Quantidade de itens : n = 7

Média da amotra.
2 + 3 + 4 + 3 + 5 + 4 + 3 => 24/n => 27/7 => 3,4285

Elevamos todos os numeros ao quadrado e somamos eles.
2&sup2; + 3&sup2; + 4&sup2; + 3&sup2; + 5&sup2; + 4&sup2; + 3&sup2; = 88


Variância = ( 88-7(3,4285)&sup2; ) / 7 - 1 
Variância = ( 88-7(11,7546) ) / 7 - 1 
Variância = ( 88-82,2822 ) / 7 - 1 
Variância = ( 5,7178 ) / 7 - 1 
Variância = 0,9529 


Agora Vamos ao desvio padrão:

Desvio padrão é: &radic; [variância]

&radic; 0,9529 => 0,976166




