---
title:  "Welcome to Jekyll!"
date:   2017-08-07 11:41:41 +0800
categories:
          - Tutorials
tags:          
          - jekyll
          - command
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: Favorite commands to be used frequently.
mathjax: true
---


{% include toc %}

# Welcome to Jekyll!

I always build pages locally before uploading to GitHub, I can rebuild the site in many different ways, but the most common way is to run  
 {% highlight Shell%}
 $ jekyll serve 
 {% endhighlight %}
 under my web project folder, which launches a web server and auto-regenerates my site when a file is updated.

> But you can only access the web on the server machine itself, because it is using **http://127.0.0.1:4000** to host the pages.

# Specify Jekyll Serve IP
If you want to access the web pages on the other client, there is a way to start web server:
  
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
