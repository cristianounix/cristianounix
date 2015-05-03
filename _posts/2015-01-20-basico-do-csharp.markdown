---
layout: post
title: Instruções Básicas do C#
modified: 2015-01-20
category: .net, c#
tags: [.net, c#, visualstudio]
---

## Instruções Básicas do C#


### LOOPS 

#### FOR

	``
	for (int i = 0; i <= 10; i++)
	{
	    MessageBox.Show("6 x " + i.ToString() + " = " + (i * 6).ToString());
	}
	``

	``
	for (int i = 11 - 1; i >= 0; i--)
	{
	    MessageBox.Show("6 x " + i.ToString() + " = " + (i * 6).ToString());
	}
	``


### FOREACH

	``
	foreach (Control item in this.Controls)
	{
	    MessageBox.Show(item.Name);
	}
	``

	``
	string []  nomes = new string[] { "Macoratti", "Miriam", "Pedro"};
	foreach ( string nome in nomes )
	{
		Console.WriteLine ( nome );

		if ( nome == "Miriam" )
			break;
	}
	``


	``
	int div = 1000;

	while (div != 3)
	{
	     div = div / 2;
	     MessageBox.Show("valor de número é: " + div.ToString());
	}
	``

	``
	int num = 10;
	do
	{
	    num += 5;
	    MessageBox.Show("valor de número é: " + num.ToString());
	}
	while (num > 100);
	``



## CONTROLE DE FLUXO

	
	### Switch

	``
	int i = 6;

	switch ( i )
	{
	case 5:
		Console.WriteLine( "Valor de i é  : " + 5 );
			break;
	case 6:
		Console.WriteLine( "Valor de i é  : " + 6 );
			break;
	case 4:
		Console.WriteLine( "Valor de i é  : " + 4 );
			break;
	default:
		Console.WriteLine( "Valor de i é  : " + i );
			break;
	}	
	``

	### IF/ELSE

	``
 	string nome = "Macoratti";
	if ( nome == "Pedro" )
	{
		Console.WriteLine( "Você esta no bloco 'if'" );
	}
	else
	{
		Console.WriteLine( "Você esta no bloco 'else'" );
	}
	``

