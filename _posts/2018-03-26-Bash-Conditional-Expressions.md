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


# Test command

Evaluate a conditional expression expr.

```
Syntax
      test expr
         [ expr ]
        [[ expr ]]
```

[ is a synonym for test but requires a final argument of ].

The double bracket [[ construct, also known as 'extended test' or 'New Test' is more versatile, the old test [ is more portable.
In most cases, on modern systems, you should prefer the use of new test [[

Spaces around the brackets are important - each operator and operand must be a separate argument.

To do a simple numeric comparison (or any other shell arithmetic), use (( )) instead of test:

To test variables you should quote the "variablename" as they may undergo word splitting or globbing, with New test [[ this is not necessary

[ "$DEMO" = 5 ]

[[ $DEMO == 10 ]]

Multiple Expressions can be combined using the following operators, listed in decreasing order of precedence.

  ! expr           True if expr is false.
  ( expr )         Returns the value of expr. This can be used to override the normal precedence of operators.

  expr1 && expr2   True if both expr1 and expr2 are true. 

  expr1 || expr2   True if either expr1 or expr2 is true.

    The old test [ can also use the -a and -o operators, and ( ... ) grouping, as defined by POSIX but only for strictly limited cases, and these are now marked as deprecated.

The test and [ builtins evaluate conditional expressions using a set of rules based on the number of arguments.

  0 arguments  The expression is false.

  1 argument   The expression is true if and only if the argument is not null.

  2 arguments  If the first argument is `!', the expression is true if and only if the second argument is
               null. If the first argument is one of the unary conditional operators, the expression is true
               if the unary test is true. If the first argument is not a valid unary operator, the expression is false.

  3 arguments  If the second argument is one of the binary conditional operators, the result of the expression
               is the result of the binary test using the first and third arguments as operands. If the first
               argument  is `!', the value is the negation of the two-argument test using the second and third
               arguments. If the first argument is exactly  `(' and the third argument is exactly `)', the result
               is the one-argument test of the second argument. Otherwise, the expression is false.
               The `-a' and `-o' operators are considered binary operators in this case.

  4 arguments  If the first argument is `!', the result is the negation of the three-argument expression composed
               of the remaining arguments. Otherwise, the expression is parsed and evaluated according
               to precedence using the rules listed above.

  5 or more arguments   The expression is parsed and evaluated according to precedence using the rules listed above.

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

More information see [Linux 之 shell 比较运算符][bash-operators]{: .btn .btn--info} 

[bash-operators]: https://blog.csdn.net/ithomer/article/details/6836382

