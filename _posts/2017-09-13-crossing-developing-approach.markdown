---
title:  "Crossing Developing Approach"
date:   2017-09-13 11:38:41 +0800
categories:
          - Tutorials
tags:          
          - Windows
          - Linux
          - eclipse CDT
          - git
          - docker
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: A good approach to develop a Linux application on Windows.
mathjax: true
---


{% include toc %}

# Overview

Sometime for convenient, user custom or other reasons, I'm always looking for an approach to develop Linux applications on Windows environment, until now I got a good way for this.


> 1. Create a normal project on Windows with eclipse CDT.
2. Create CMakeList.txt to the project.
3. Create .gitignore file which ignores those files only work on Windows or Linux.
4. Commit project to git repository.
5. Convert project to Executable Cygwin GCC project on Windows.
6. Developing push to git when done.
7. Clone the project from Linux.
8. Add project to eclise CDt on Linux.
9. Convert project to Executable Cross GCC project on Linux.
10. Pull update before test on Linux.
11. Clone the project from any version inside docker containers.
12. Build application from older version of Linux.


# On Windows Side
>Create a **normal project** with **CMakelist.txt** and **.gitignore**, commit the project to git repository.(**github** or **gitlab**)

### Create a normal project

In Eclipse CDT
>**File** -> **New** -> **Project...** -> **General** -> **Project**  
>add **CMakeList.txt** and [.gitignore][gitignore]{: .btn .btn--info}  
>Commit to git repository.  

### Convert to Excutable project

>Right click project -> **New** -> **Convert to a C/C++ Project**    
>**Excutable** -> **Cygwin GCC** -> **Finish**  
>**Developing ...** -> **Build ...** -> **Run**

**Cygwin Info**
[Installing Cygwin On Windows][Installing Cygwin]
{: .notice--info}


# On Linux Side
>Clone repository, convert project to **Linux Excutable** type.

### Clone repository

>Clone project from git repository.  

###  Import project

In Eclipse CDT  
>**File** -> **Import...** -> **General** -> **Existing project into Workspace**

### Convert to Excutable project

>Right click project -> **New** -> **Convert to a C/C++ Project**    
>**Excutable** -> **Cross GCC** -> **Finish**  
>**git pull ...** -> **Build ...** -> **Run**

# Inside docker
Sometime we have to build application on an older platform to avoid newer library reference which cannot be found on old platform.  
and we may not find an old platform easily, it's good to use docker for it.


### Find an image in docker
You can find a specific version of CentOs on docker, for example we need CentOs 6
  
> Find CentOs 6
{% highlight Shell %}
$ docker search centos6
NAME                                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
imagine10255/centos6-lnmp-php56          centos6-lnmp-php56                              30                   [OK]
lemonbar/centos6-ssh                     Installed openssh-server on centos6, defau...   14                   [OK]
guyton/centos6                           From official centos6 container with full ...   7                    [OK]
mohri1219/centos6.7-ruby2.2.2-mysql5.6   centos6.7-ruby2.2.2-mysql5.6                    3                    [OK]
antwnis/centos6-cloudera-5.3                                                             2
teradatalabs/centos6-java8-oracle        Docker image of CentOS 6 with Oracle JDK 8...   2
sergeyzh/centos6-nginx                                                                   2                    [OK]
nclans/centos6                                                                           1
edrans/centos6                                                                           1                    [OK]
adrianotto/centos6                       CentOS 6 latest, updates with yum update h...   0                    [OK]
tacit/centos6-chef                       Latest Centos6 release with pre installed ...   0
mconcas/centos6-autobuild-container                                                      0                    [OK]
touche/centos6                           Base centos6 container.                         0
zzzshanghai/centos6-64bit                centos6-64bit                                   0                    [OK]
varsy/centos6-nrpe                                                                       0                    [OK]
chrisshort/docker-centos6-ansible        docker-centos6-ansible                          0                    [OK]
xieyangwanmu/centos6.8-ssh               Installed openssh-server on centos6.8, def...   0
teradatalabs/centos6-ssh-oj8             Centos with ssh and java                        0
surkutlawar/centos6-webserver                                                            0
varsy/centos6-utils                                                                      0                    [OK]
rhub/centos6-epel-rdt                                                                    0
rhub/centos6-epel                                                                        0
13652604711/centos6.8-ssh                                                                0
nodesource/centos6                       The Official NodeSource Docker Images           0

{% endhighlight %}



[gitignore]: https://github.com/github/gitignore
[Installing Cygwin]: https://cygwin.com/install.html

