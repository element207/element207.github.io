---
title:  "Bash Output Color of echo"
date:   2018-04-10 10:05:00 +0800
categories:
          - Reference
tags:          
          - Bash
          - Linux
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: Bash script programing.
mathjax: true
---


{% include toc %}

Sometime I am trying to print a text message in the terminal using echo command.
I want to print the message in a different color. How can I do that?

# An Example of tput Usage

An example on ubuntu  
![example-ubuntu][example-ubuntu]

## Usage

Specific `tput` sub-commands are discussed later.


## Direct 
Call `tput` as part of a sequence of commands:

```
tput setaf 1; echo "this is red text"
```
Use `;` instead of `&&` so if `tput` errors the text still shows.

## Shell variables

Another option is to use shell variables:

```
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
echo "${red}red text ${green}green text${reset}"
```

`tput` produces character sequences that are interpreted by the terminal as having a special meaning. They will not be shown themselves. Note that they can still be saved into files or processed as input by programs other than the terminal.

## Command substitution

It may be more convenient to insert `tput` 's output directly into your `echo` strings using [command substitution][command-substitution]{: .btn .btn--info}:

```
echo "$(tput setaf 1)Red text $(tput setab 7)and white background$(tput sgr 0)"
```





Operator|Explaination
-|-
-z string|True if the strings are not equal. 
-n string|True if the length of string is non-zero. 
string1 = string2|True if the strings are equal.
string1 != string2|True if the strings are not equal. 



# More Information 

More information see [Linux 之 shell 比较运算符][bash-operators]{: .btn .btn--info} 

[command-substitution]: http://tldp.org/LDP/abs/html/commandsub.html


[example-ubuntu]: {{site.url}}{{site.baseurl}}/assets/images/posts/BashOutputColor001.png

