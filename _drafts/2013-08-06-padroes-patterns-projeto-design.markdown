---
layout: post
title: Listinha de padrões de projeto
description: "Listinha de padrões de projeto "
modified: 2013-08-06
category: patters
tags: [patters]
comments: true
share: true
---


Os tipos estão divididos por afinidade. Estou definindo apenas os mais usados. Os principais tipos de padrões de projetos são :

#### 1- Padrões de Criação (Creational)

1. Abstract Factory - Um método Factory é um método que fabrica objetos de um tipo particular; Um objeto Factory é um objeto que encapsula métodos Factory.

2. Builder - Separa a construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes representações.

3. Factory Method - É uma interface para instanciação de objetos que mantém isoladas as classes concretas usadas da requisição da criação destes objetos.

4. Prototype - O padrão Prototype fornece uma outra maneira de se construir objetos de tipos arbitrários.

5. Singleton. - Garante que para uma classe específica só possa existir uma única instância, a qual é acessível de forma global e uniforme.

#### 2- Padrões de Estrutura (Structural)

1. Adapter - Permite que dois objetos se comuniquem mesmo que tenham interfaces incompatíveis.

2. Bridge - Desacopla a interface da implementação ; Ocultação de detalhes de implementação dos clientes.

3. Composite - lida com uma estrutura de elementos agrupada hierarquicamente (não como meras coleções).

4. Decorator - Atribui responsabilidade adicionais a um objeto dinamicamente. O Decorator fornece uma alternativa flexível a subclasses para a extensão da funcionalidade.

5. Facade - Interface unificada para um subsistema ; Torna o subsistema mais fácil de usar.

6. Flyweight - Usa compartilhamento para dar suporte a vários objetos de forma eficiente.

7. Proxy - Fornece um objeto representante ou procurador de outro objeto para controlar o acesso ao mesmo.

#### 3- Padrões de Comportamento (Behavioral)

1. Chain of Responsability - Evita dependência do remetente(cliente) de uma requisição ao seu destinatário , dando a oportunidade de mais de objeto tratar a requisição.

2. Command - Associa uma ação a diferentes objetos através de uma interface conhecida.

3. Interpreter - Usado para ajudar uma aplicação a entender uma declaração de linguagem natural e executar a funcionalidade da declaração.

4. Iterator - Provê uma forma de percorrermos os elementos de uma coleção sem violar o seu encapsulamento.

5. Mediator - Cria um objeto que age como um  mediador controlando a interação entre um conjunto de objetos.

6. Memento - Torna possível salvar o estado de um objeto de modo que o mesmo possa ser restaurado.

7. Observer - Define uma relação de dependência 1:N de forma que quando um certo objeto (assunto) tem seu estado modificado os demais (observadores) são notificados; Possibilita baixo acoplamento entre os objetos observadores e o assunto.

8. State - Permite objeto alterar seu comportamento quando estado interno muda.

9. Strategy - Permite que uma família de algoritmos seja utilizada de modo independente e seletivo.

10. Template Method - Define o esqueleto de um algoritmo em uma operação adiando a definição de alguns passos para a subclasse.

11. Visitor - Define operações independentes a serem realizadas sobre elementos de uma estrutura.



> Obs: Caso tenha explicado alguma coisa errada, ou escrito algo errado gostaria do seu comentário e sua correção.
