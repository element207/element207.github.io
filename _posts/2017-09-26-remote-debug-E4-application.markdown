---
title:  "Remote Debug E4 Appliction"
date:   2017-09-26 11:43:41 +0800
categories:
          - Tutorials
tags:          
          - Eclise 4
          - RCP Dev
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: Eclipse 4 RCP Application development.
mathjax: true
---


{% include toc %}

# Remote Debug E4 Application

I am working on a UI utility which is set to call a set of commands only existing on server side. So it's impossible to debug application on local envirnoment. It has to be done on server side, following steps is an approach to accomlish this target.

## Start E4 Applicaton  in listening mode
 {% highlight Shell%}
 # on server side start application with following arguments
 $ e4application -vmargs -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000
 {% endhighlight %}


# Remote Debuging Settings

> In Eclipse -> Debug Configurations... -> Add new Remote Java Application->  
Select product project -> specify server ip address and port -> Debug


Check out the [Eclipse RCP remote debugging][remote-debug]{: .btn .btn--info} for more info on how to do this.

[remote-debug]: http://exploreeclipse.blogspot.hk/2016/05/eclipse-rcp-remote-debugging.html
