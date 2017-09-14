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




[gitignore]: https://github.com/github/gitignore
[Installing Cygwin]: https://cygwin.com/install.html

