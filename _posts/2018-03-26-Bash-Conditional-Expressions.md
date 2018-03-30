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

Operator|Explaination|Example
-|-|-
-e filename|如果 filename 存在，则为真|[ -e /var/log/syslog ]
-d filename|如果 filename 为目录，则为真|[ -d /tmp/mydir ]
-f filename|如果 filename 为常规文件，则为真|[ -f /usr/bin/grep ]
-L filename|如果 filename 为符号链接，则为真|[ -L /usr/bin/grep ]
-r filename|如果 filename 可读，则为真|[ -r /var/log/syslog ]
-w filename|如果 filename 可写，则为真|[ -w /var/mytmp.txt ]
-x filename|如果 filename 可执行，则为真|[ -L /usr/bin/grep ]
filename1 -nt filename2|如果 filename1 比 filename2 新，则为真|[ /tmp/install/etc/services -nt /etc/services ]
filename1 -ot filename2|如果 filename1 比 filename2 旧，则为真|[ /boot/bzImage -ot arch/i386/boot/bzImage ]
