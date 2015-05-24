---
layout: post
title: Calculando o desvio padrão
modified: 2015-02-15
category: Mat
tags: ['mat, calc']
---

## Vou tentar explicar de forma bem simples e rápida o cálculo do desvio padrão.


O que seria o Desvio Padrão ?

<p>

<img src="{{site.baseurl}}/img/posts/desvio-padrao.png" alt="Desvio padão">

</p>

A Wikipédia define muito bem isso assim:

  "Em Probabilidade e Estatística, o desvio padrão é a medida mais comum da dispersão estatística (representado pelo símbolo sigma, σ).
  Ele mostra o quanto de variação ou "dispersão" existe em relação à média (ou valor esperado).
  Um baixo desvio padrão indica que os dados tendem a estar próximos da média;
  um desvio padrão alto indica que os dados estão espalhados por uma gama de valores."

Ou seja:

  Desvio padrão é uma medida que indica a dispersão dos dados dentro da amostra, em poucas palavras, o quanto os resultados diferem da média.


### Calculando:
```
Amostra = 2,3,4,7,12,3
```

Primeiro vamos encontrar a variância:

Quantidade de itens : n = 6

Média da amotra.

  ```
  2 + 3 + 4 + 7 + 12 + 3 =>
  31/n =>
  31/6 =>
  5,16
  ```

Agora vamos calcular o desvio dos itens da amostra com base na média.

<table>
    <tr>
        <th width="2%">Item</th>
        <th width="2%">Média</th>
        <th width="5%">Desvio (item - média)</th>
        <th width="5%">Quadrado do Desvio</th>
    </tr>
    <tr>
      <td>2</td>
      <td>5,16</td>
      <td>-3,16</td>
      <td>9.9856</td>
    </tr>
    <tr>
      <td>3</td>
      <td>5,16</td>
      <td>-2,16</td>
      <td>4.6656</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5,16</td>
      <td>-1,16</td>
      <td>1.3456</td>
    </tr>
    <tr>
      <td>7</td>
      <td>5,16</td>
      <td>1,84</td>
      <td>3.3856</td>
    </tr>
    <tr>
      <td>12</td>
      <td>5,16</td>
      <td>6,84</td>
      <td>46.7856</td>
    </tr>
    <tr>
      <td>3</td>
      <td>5,16</td>
      <td>-2,16</td>
      <td>4.6656</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Total (soma)</td>
      <td>70.8336</td>
    </tr>
</table>

Com o desvio em mãos agora vamos calcular a variância.

A variância nada mais é que:
a média da soma dos quadrados dos desvios, ou seja

  ```
  9.9856 + 4.6656 + 1.3456 + 3.3856 + 46.7856 + 4.6656 = 11.8056
  ```

> Obs: Um dos motivos de elevarmos o desvio ao quadrado é
para evitar a tendência do resultado para zero.



###Agora Vamos ao desvio padrão:###

Desvio padrão é: &radic;[variância]

&radic; 11.8056 => ```3.44 (aproximadamente)```

Pronto !
:)

> PS: Caso tenha explicado alguma coisa errada,
ou escrito algo errado gostaria do seu comentário e sua correção.
