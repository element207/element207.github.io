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

### Create a normal project with Eclipse CDT

>**File** -> **New** -> **Project...** -> **General** -> **Project**  
>add **CMakeList.txt** and [.gitignore](https://github.com/github/gitignore){: .btn .btn--info}  
>Commit to git repository.  
  
{% highlight Shell %}
# assuming server ip address is 192.168.0.100 
$ bundle exec jekyll serve --host 192.168.0.100
{% endhighlight %}

> Now, You can access the web pages by access **http://192.168.0.100:4000** from anywhere you want within the intranet.


To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works. 

Check out the [Jekyll docs][jekyll-docs]{: .btn .btn--info} for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh]{: .btn .btn--info}. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk]{: .btn .btn--info}.

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
