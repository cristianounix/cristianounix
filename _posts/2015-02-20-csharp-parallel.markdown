---
layout: post
title: Programação Assincrona com c#, sim csharp :( Se vou mexer com isso é bom entender ne ?!
description: "Programação Assincrona com c# usando parallel"
modified: 2015-04-15
category: .net, c#
tags: [.net, c#, visualstudio]
comments: true
share: true
---


Esses tempos no trabalho estávamos lidando com um problema de performance de alguns
processos do nosso projeto, já devo ter comentado antes que o projeto está escrito em
c# (sim é verdade, fazer o que né ?!?!)... foi então que o amigo @Aubry, mais fera que eu no mundo Microsoft me falou que o .NET tinha algumas coisas legais que facilitavam nossa vida na criação de processos em paralelo, e então ele disse:

"...podemos usar o Parallel pra fazer isso..."

<p>

<img src="{{site.baseurl}}/img/posts/parallel-diagram.png" alt="Parallel diagrama">

</p>

O Parallel é bem simples de se usar, veja um exemplo usando um simples **for**:

{% highlight csharp %}
Parallel.For(0, 10, options, i =>
{
    //faz alguma coisa aqui dentro
});
{% endhighlight %}

Então fui pesquisar por "Parallel c#" pra entender mais afundo e não ficar limitado
ao jeito que ele nos mostrou.

====================================================

Programação assíncrona no .NET foi introduzida em 2001 no lançamento de sua primeira versão, a partir dessa eles evoluiram para o Asynchronous Programming Model (APM) esse modelo pelo fato de ter sido o primeiro, foi considerado pela comunidade muito difícil de ser implementado, foi então que teve uma nova evolução e lançaram o novo modelo, que dessa vez, foi o Event-Based Asynchronous Pattern (EAP). Segundo a comunidade esse modelo, simplificou bastante muita coisa, entretanto não estava bom ainda.

Foi então que no .NET 4 nosso tio Bill implementou a Task Parallel Library (TPL)
que é a biblioteca usada atualmente (me corrijam se eu estiver errado por favor :) ).

Pra resumir isso tudo, se eu quiser um processamento paralelo usando for ou foreach ou, quem sabe, invocar tarefas em paralelo, onde vou encontrar ?

Sim na [TPL](https://msdn.microsoft.com/en-us//library/dd460717)

<p>

<img src="{{site.baseurl}}/img/posts/tpl-diagram.png" alt="TPL Diagrama">

</p>

Vamos fazer uns exemplos para entender:

Antes vamos supor que temos 2 métodos implementados e testados que funcionam perfeitamente, são eles:

{% highlight csharp %}
1. List<int> GetPrimeNumbs(int min, int max)
2. boll CheckIsPrimeNumb(int min, int max)
{% endhighlight %}

No item 1. o método retorna uma lista de números primos, essa lista obedeçe o intervalo do min e máx.
Já O item 2. é um método usado internamete pelo item 1. ele verifica se cada ítem do intervalo é um primo ou não.

Pronto sabendo disso let's code:

### Processo Síncrono

{% highlight csharp %}
var time = new Stopwatch();
time.Start();
var primes = GetPrimeNumbs(2, 10000000);
Console.WriteLine("Qtd. Numeros primos: {0}\n Tempo: {1}", primes.Count,time.ElapsedMilliseconds);
{% endhighlight %}

### Processo Asíncrono Utilizndo o **Parallel**

{% highlight csharp %}
var time = new Stopwatch();
time.Start();
int numThreads = 10;
var primes = new List<int>[numThreads];
Parallel.For(0,numThreads,i => primes[i] = GetPrimeNumbs(i== 0 ? 2 : i * 1000000 + 1, (i+1)*1000000));

Console.WriteLine("Qtd. Números primos: {0}\n Tempo: {1}",
                      primes.Sum(p => p.Count),
                      time.ElapsedMilliseconds);

{% endhighlight %}

No código assíncrono perceba que estou usando o Parallel e estou quebrando a tarefa em 10 tarefas (threads) e no final eu faço a contagem e mostro como foi o resultado.

Vamos fazer o mesmo só que agora utilizando a classe **Task**.

{% highlight csharp %}
var time = new Stopwatch();
time.Start();
int numThreads = 10;
var primes = new Task<List<int>>[numThreads];
for (int i = 0; i < numThreads; i++){
    int cnt = i;
    primes[i] = Task.Factory.StartNew(
                  () => GetPrimeNumbs(cnt == 0 ? 2 : cnt * 1000000 + 1, (cnt + 1) * 1000000)
                );
}
Task.WaitAll(primes);
Console.WriteLine("Qtd. Números primos: {0}\n Tempo: {1}", primes.Sum(p => p.Result.Count), time.ElapsedMilliseconds);
{% endhighlight %}

Bem, o interessante aqui é observar que quando fazemos um Task.WaitAll([vetor_de_tarefas])
estamos pedindo para aguardar todas as tarefas lançadas no vetor para serem finalizadas e depois passar para próxima instrução.


Um exemplo diferente para **Parallel Linq**
{% highlight csharp %}
var count = max - min + 1;
return Enumerable.Range(minimum, count).AsParallel().Where(CheckIsPrimeNumb).ToList();
{% endhighlight %}

Você deve tá se perguntando, mas porque ele usou um exemplo diferente para o LINQ?
Porque da forma como eu estava pensando nos outros exemplo o método **GetPrimeNumbs** teria que ser escrito de formas diferente, pois internamente ele usa um outro método o **CheckIsPrimeNumb** e esse é o mais usado pela CPU visto que ele verifica todos os números
dentro do intervalo do min e máx para identificar e gerar assim a lista de números primos,
logo esse método teria que ser escrito pensando nessa abordagem asíncrona.


====

Parallel ForEach e segurança nos dados:

Cuidado com as variáveis compartilhadas!
exemplo:

{% highlight csharp %}
List<decimal> prices;
Parallel.ForEach(products, product =>
{
  decimal price = ConvertPriceToReal(product);
  prices.Add(price);
)};
{% endhighlight %}

Isso não é threadsafe, pois como vão haver threads separadas adicionando preços à lista,
caso ocorra de preços sendo adicionado na mesmo tempo, um deles não vai ser adicionado e sua lista vai ficar incompleta. Para contornar isso usamos os **Locks**, veja:

{% highlight csharp %}
List<decimal> prices;
object price_lock = new object();
Parallel.ForEach(products, product =>
{
  decimal price = ConvertPriceToReal(product);
  lock(price_lock)
  {
    prices.Add(price);
  }
)};
{% endhighlight %}

O que vai acontecer aqui é que, quando duas ou mais threads tentar inserir o preço na lista, a thread vai idenficar o bloqueio e aguardar a liberação permitindo assim, a inserção na lista.


Seguindo o mesmo exemplo, vamos supor que queremos um contador dentro desse processo todo,
então o que fazer? só inserir o contador e sempre ir incrementando-o no loop né? Errado!
Se fizer isso, vai cair no primeiro problema que falamos, variáveis não atômicas ou variáveis compartilhadas. Hummmm! Então colocamos o contador num **lock** certo? Mais ou menos... tem um outro mecanismo feito especialmente para esses casos é o **Interlocked**. Vejamos:

{% highlight csharp %}
int cnt = 0;
List<decimal> prices;
object price_lock = new object();
Parallel.ForEach(products, product =>
{
  decimal price = ConvertPriceToReal(product);
  lock(price_lock)
  {
    prices.Add(price);
  }
  Interlocked.Increment(ref cnt);
)};
{% endhighlight %}


**Parallel.Invoke**
{% highlight csharp %}
Parallel.Invoke(
  () =>
  {
     Console.WriteLine("Iniciando tarefa 1");
     GetSizeWord("Qual o tamanho dessa frase?");
  },
  () =>
  {
     Console.WriteLine("Iniciando tarefa 2");
     GetTotalWords("Quantas palavras tem nessa frase?");
  }
);
{% endhighlight %}

Perceba que usei o **Invoke** para chamar tarefas distintas que serão distribuidas nos meus núcleos de processamento.


====

Agora, como vou conseguir debugar isso?
Bem uma forma que vi algumas pessoas nas comunidades .NET fazendo é:

{% highlight csharp %}
var opt = new ParallelOptions { MaxDegreeOfParallelism = 1 };
Parallel.ForEach(products, opt, product =>
{
  decimal price = ConvertPriceToReal(product);
)};
{% endhighlight %}

Se o **MaxDegreeOfParallelism** estiver definido como -1, que é o padrão dele,
etão ele vai usar quantos processos ele conseguir, entretanto, se for definido para 1,
então ele vai se comportar de forma síncrona permitindo você fazer o debug.




> Obs: todos os códigos aqui foram inspirados e modificados baseando-se na documentação da [Microsoft](msdn.microsoft.com).


> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.