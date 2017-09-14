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
Create a **normal project** with **CMakelist.txt** and **.gitignore**, commit the project to git repository.(**github** or **gitlab**)

### Create a normal project

In Eclipse CDT
>**File** -> **New** -> **Project...** -> **General** -> **Project**  
>add **CMakeList.txt** and [.gitignore][gitignore]{: .btn .btn--info}  
>Commit to git repository.  

### Convert to Excutable project

>Right click project -> **New** -> **Convert to a C/C++ Project**    
>**Excutable** -> **Cygwin GCC** -> **Finish**  
**Developing ...** -> **Build ...** -> **Run**

**Cygwin Info**
[Installing Cygwin On Windows][Installing Cygwin]
{: .notice--info}


# On Linux Side
Clone repository, convert project to **Linux Excutable** type.

### Clone repository

Clone project from git repository.  

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


### Download CentOs 6

{% highlight Shell %}
# for example we get the first one of above images
$ docker pull imagine10255/centos6-lnmp-php56
5b0f327be733: Pull complete
Digest: sha256:1f1404e9ea1a6665e3664626c5d2cda76cf90a4df50cfee16aab1a78f58a3f95
... ...
Status: Downloaded newer image for imagine10255/centos6-lnmp-php56:latest

{% endhighlight %}

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works. 

### Rename an image
The names of images downloaded from repository are various, we need give an name which is easy to understand, we can rename the images.

{% highlight Shell %}
# use docker tag to rename image
# docker tag image NewName
$ docker tag imagine10255/centos6-lnmp-php56 centos6

# Now you can check the new name by 'docker images'
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos6-lnmp-php56  latest              c569983eaba4        20 hours ago        1.266 GB
centos6             latest              c569983eaba4        20 hours ago        1.266 GB
ubuntu_new          latest              ccc7a11d65b1        4 weeks ago         120.1 MB
centos7             latest              328edcd84f1b        5 weeks ago         192.5 MB
docker-whale        latest              8c5b46cbf2b6        20 months ago       274.2 MB
hello               latest              690ed74de00f        23 months ago       960 B
docker/whalesay     latest              c9fc7f8eec37        2 years ago         247 MB

# and you can delete the old name by 'docker rmi OldName'
$ docker rmi imagine10255/centos6-lnmp-php56
Untagged: imagine10255/centos6-lnmp-php56:latest

{% endhighlight %}

### Run an image

{% highlight Shell %}
# Run an image
$ docker run -it centos6
# Entering the centos console which hostname is code
[root@c569983eaba4 /]#

# Give the hostname at runing
$ docker run -it --hostname Build centos6
[root@Build /]#exit

#check all containers
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                    PORTS               NAMES
c4e35c206aa4        centos6-gcc49       "/usr/bin/scl enable "   15 seconds ago      Created                                       kickass_jepsen

# The container name is generated random as "kickass_jepsen", rename it
$ docker rename kickass\_jepsen cpp\_build
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                    PORTS               NAMES
c4e35c206aa4        centos6-gcc49       "/usr/bin/scl enable "   15 seconds ago      Created                                       cpp_build

# Start and attach the container
$ docker start cpp_build
cpp_build
$ docker attach cpp_build
[root@Build /]#

{% endhighlight %}

### other docker commands

{% highlight Shell %}
# Remove all containers
$ docker rm $(docker ps -aq)

{% endhighlight %}

### run project in doecker

>* Clone project from git repository  
>* Make sure cmake is installed
>* Build and Run project  

  {% highlight Shell %}
# make build directory under project path
$ mkdir build
$ cd build
# build release target
$ cmake -DCMAKE_BUILD_TYPE=Release ..
-- The C compiler identification is GNU 4.9.2
-- The CXX compiler identification is GNU 4.9.2
-- Check for working C compiler: /opt/rh/devtoolset-3/root/usr/bin/cc
-- Check for working C compiler: /opt/rh/devtoolset-3/root/usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /opt/rh/devtoolset-3/root/usr/bin/c++
-- Check for working CXX compiler: /opt/rh/devtoolset-3/root/usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
-- Build files have been written to: /root/test/TestGit/build
$ make
Scanning dependencies of target cli_ExportPatb
[ 14%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/ConvertGeomFormat.cpp.o
[ 28%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/Logger.cpp.o
[ 42%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/PfCliCmd.cpp.o
[ 57%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/PgCnvCmd.cpp.o
[ 71%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/PgFormat.cpp.o
[ 85%] Building CXX object CMakeFiles/cli_ExportPatb.dir/src/cli_export_frame.cpp.o
[100%] Linking CXX executable cli_ExportPatb
[100%] Built target cli_ExportPatb

{% endhighlight %}


[gitignore]: https://github.com/github/gitignore
[Installing Cygwin]: https://cygwin.com/install.html

