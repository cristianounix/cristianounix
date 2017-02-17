---
layout: post
title: Quais os testes técnicos que você precisa saber desenrolar
description: "Quais os testes técnicos que você precisa saber desenrolar"
modified: 2012-10-12
category: teste
tags: [teste]
comments: true
share: true
---

<p style="text-align: center;">
  <img src="{{site.baseurl}}/img/posts/vim3.gif" alt="VIM">
</p>


<div class="md"><p><strong>General</strong></p>

<ul>
<li><p>Find the most frequent integer in an array</p></li>
<li><p>Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time)</p></li>
<li><p>Given 2 integer arrays, determine of the 2nd array is a rotated version of the 1st array. Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3} </p></li>
<li><p>Write fibbonaci iteratively and recursively (bonus: use dynamic programming)</p></li>
<li><p>Find the only element in an array that only occurs once.</p></li>
<li><p>Find the common elements of 2 int arrays</p></li>
<li><p>Implement binary search of a sorted array of integers</p></li>
<li><p>Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})</p></li>
<li><p>Use dynamic programming to find the first X prime numbers</p></li>
<li><p>Write a function that prints out the binary form of an int</p></li>
<li><p>Implement parseInt</p></li>
<li><p>Implement squareroot function</p></li>
<li><p>Implement an exponent function (bonus: now try in log(n) time)</p></li>
<li><p>Write a multiply function that multiples 2 integers without using *</p></li>
<li><p>HARD: Given a function rand5() that returns a random int between 0 and 5, implement rand7()</p></li>
<li><p>HARD: Given a 2D array of 1s and 0s, count the number of "islands of 1s" (e.g. groups of connecting 1s)</p></li>
</ul>

<p><strong>Strings</strong></p>

<ul>
<li><p>Find the first non-repeated character in a String</p></li>
<li><p>Reverse a String iteratively and recursively</p></li>
<li><p>Determine if 2 Strings are anagrams</p></li>
<li><p>Check if String is a palindrome</p></li>
<li><p>Check if a String is composed of all unique characters</p></li>
<li><p>Determine if a String is an int or a double</p></li>
<li><p>HARD: Find the shortest palindrome in a String</p></li>
<li><p>HARD: Print all permutations of a String</p></li>
<li><p>HARD: Given a single-line text String and a maximum width value, write the function 'String justify(String text, int maxWidth)' that formats the input text using full-justification, i.e., extra spaces on each line are equally distributed between the words; the first word on each line is flushed left and the last word on each line is flushed right</p></li>
</ul>

<p><strong>Trees</strong></p>

<ul>
<li><p>Implement a BST with insert and delete functions</p></li>
<li><p>Print a tree using BFS and DFS</p></li>
<li><p>Write a function that determines if a tree is a BST</p></li>
<li><p>Find the smallest element in a BST</p></li>
<li><p>Find the 2nd largest number in a BST</p></li>
<li><p>Given a binary tree which is a sum tree (child nodes add to parent), write an algorithm to determine whether the tree is a valid sum tree</p></li>
<li><p>Find the distance between 2 nodes in a BST and a normal binary tree</p></li>
<li><p>Print the coordinates of every node in a binary tree, where root is 0,0</p></li>
<li><p>Print a tree by levels</p></li>
<li><p>Given a binary tree which is a sum tree, write an algorithm to determine whether the tree is a valid sum tree</p></li>
<li><p>Given a tree, verify that it contains a subtree.</p></li>
<li><p>HARD: Find the max distance between 2 nodes in a BST.</p></li>
<li><p>HARD: Construct a BST given the pre-order and in-order traversal Strings</p></li>
</ul>

<p><strong>Stacks, Queues, and Heaps</strong></p>

<ul>
<li><p>Implement a stack with push and pop functions</p></li>
<li><p>Implement a queue with queue and dequeue functions</p></li>
<li><p>Find the minimum element in a stack in O(1) time</p></li>
<li><p>Write a function that sorts a stack (bonus: sort the stack in place without extra memory)</p></li>
<li><p>Implement a binary min heap. Turn it into a binary max heap</p></li>
<li><p>HARD: Implement a queue using 2 stacks</p></li>
</ul>

<p><strong>Linked Lists</strong></p>

<ul>
<li><p>Implement a linked list (with insert and delete functions)</p></li>
<li><p>Find the Nth element in a linked list</p></li>
<li><p>Remove the Nth element of a linked list</p></li>
<li><p>Check if a linked list has cycles</p></li>
<li><p>Given a circular linked list, find the node at the beginning of the loop. Example: A--&gt;B--&gt;C --&gt; D--&gt;E --&gt;C, C is the node that begins the loop</p></li>
<li><p>Check whether a link list is a palindrome</p></li>
<li><p>Reverse a linked list iteratively and recursively</p></li>
</ul>

<p><strong>Sorting</strong></p>

<ul>
<li><p>Implement bubble sort</p></li>
<li><p>Implement selection sort</p></li>
<li><p>Implement insertion sort</p></li>
<li><p>Implement merge sort</p></li>
<li><p>Implement quick sort</p></li>
</ul>
</div>




------------- 


<div class="md"><p>I've been interviewing for JS positions over the past few months and have noticed the same questions pop up in the technical parts of the interview. There have been similar posts to this but I really received a benefit from them and thought I'd echo my experience. Two of these "interviews" were online assessments, two were in person, and two were over Skype. The positions I've applied for are mainly at start ups and not for any specified Jr / Mid / Sr level. </p>

<p>I know that a lot of people disagree with this type of interview, like them or not, in my experience they've been a reality. When you're self-taught and haven't had your first job, I guess you have to prove yourself somehow. An assessment of Github / portfolio links would be a more ideal measure of progress but doesn't seem to count for everything. </p>

<ul>
<li>Algorithmic*</li>
</ul>

<ol>
<li>Define a function that returns <em>n</em> lines of <a href="https://en.wikipedia.org/wiki/Pascal%27s_triangle">Pascal’s Triangle</a>. (this question was the entire interview)</li>
<li>Define a function that takes an array of strings, and returns the most commonly occurring string that array (this question came with an execution time limit)</li>
<li><p>Use recursion to log a fibonacci sequence of <em>n</em> length.</p>

<p><em>Definitional</em></p></li>
<li><p>Explain the use cases for, and differences between — <em>bind</em>, <em>apply</em> and <em>call</em>.</p></li>
<li><p>Explain event delegation and why it is useful.</p></li>
<li><p>What is the event loop?</p></li>
<li><p>How does hoisting work in JavaScript?</p>

<p><em>Discussion</em></p></li>
<li><p>Walk us through the process of creation of an application or website you've built.</p></li>
<li><p>Which new JavaScript / browser features are you most excited about and why?</p></li>
<li><p>What are the differences between functional and imperative programming styles, and explain your preference, if any.</p></li>
</ol>
</div>