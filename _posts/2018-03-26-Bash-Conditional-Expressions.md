---
title:  "Bash Conditional Expressions"
date:   2018-03-30 14:22:41 +0800
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






# File Comparation

Operator|Explaination
-|-
-a file|True if file exists.
-b file|True if file exists and is a block special file.
-e file|True if file exists. 
-d file|True if file exists and is a directory. 
-f file|True if file exists and is a regular file. 
-h file|True if file exists and is a symbolic link.
-r file|True if file exists and is readable. 
-w file|True if file exists and is writable. 
-x file|True if file exists and is executable. 
-L file|True if file exists and is a symbolic link. 
file1 -nt file2|True if file1 is newer than file2, or if file1 exists and file2 does not. 
file1 -ot file2|True if file1 is older than file2, or if file2 exists and file1 does not. 



# String Comparation


Operator|Explaination
-|-
-z string|True if the strings are not equal. 
-n string|True if the length of string is non-zero. 
string1 = string2|True if the strings are equal.
string1 != string2|True if the strings are not equal. 



# Arithmetic Comparation


Operator|Explaination
-|-
arg1 -eq arg2 string|=
arg1 -ne arg2 string|!=
arg1 -lt arg2 string|<
arg1 -lq arg2 string|<=
arg1 -gt arg2 string|>
arg1 -ge arg2 string|>=


# More Information 

More information [Linux 之 shell 比较运算符][bash-operators]{: .btn .btn--info} 

[bash-operators]: https://blog.csdn.net/ithomer/article/details/6836382

