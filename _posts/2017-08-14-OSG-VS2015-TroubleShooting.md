---
titile: OSG VS2015 TroubleShooting
categories: 
          - Tutorials
tags:          
          - TroubleShooting
          - OSG
          - VS 2015
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
  
excerpt: First time mess with OSG & VS2015 met lots of problems which were really tricky, I decide to write this information, hope it can help others.
mathjax: true
---

{% include toc %}


# Overview
Normally you can find many instructions to say "Hello World" in OSG style.  
It should look like following steps:
{% highlight shell %}
1. Create a empty win32 console application.
2. Add OSG lib to project properties
3. Add codes to show a 3D model
4. Compile and run application. 
{% endhighlight %}

**OSG Hello World**
for more details check another tutorial: [OSG Hello World Example]({{ site.baseurl }}{% post_url 2017-08-10-my-first-blog %}){: .btn .btn--info}
{: .notice--info}

Normally codes will be like this:
{% highlight C++ %}

#ifdef _DEBUG
#pragma comment(lib, "osgViewerd.lib")
#pragma comment(lib, "osgDBd.lib")
#pragma comment(lib, "OpenThreadsd.lib")
#pragma comment(lib, "osgd.lib")
#else
#pragma comment(lib, "osgViewer.lib")
#pragma comment(lib, "osgDB.lib")
#pragma comment(lib, "OpenThreads.lib")
#pragma comment(lib, "osg.lib")
#endif


#include <osgviewer/viewer>
#include <osgdb/readfile>

int main()
{
	osg::ref_ptr <osgViewer::Viewer> viewer = new osgViewer::Viewer;
	viewer->setSceneData(osgDB::readNodeFile("glider.osg"));
	return viewer->run();
}
{% endhighlight %}

if you build the codes above maybe you will get many errors.

**Notice**
Make sure you are using the same platform configuration about x64 or x86, or you will get similar error message like below:
<br><br>`fatal error C1083: Cannot open include file: 'osgviewer/viewer': No such file or directory`.
{: .notice--danger}

{% highlight Console %}
1>------ Build started: Project: test, Configuration: Debug x64 ------
1>  main.cpp
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): error C2144: syntax error: 'void' should be preceded by ';'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): error C4430: missing type specifier - int assumed. Note: C++ does not support default-int
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1158): error C2144: syntax error: 'void' should be preceded by ';'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1158): error C4430: missing type specifier - int assumed. Note: C++ does not support default-int
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1158): error C2086: 'int WINGDIAPI': redefinition
1>  c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): note: see declaration of 'WINGDIAPI'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1159): error C4430: missing type specifier - int assumed. Note: C++ does not support default-int
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1159): error C2086: 'int WINGDIAPI': redefinition
1>  c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): note: see declaration of 'WINGDIAPI'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1159): error C2146: syntax error: missing ';' before identifier 'GLboolean'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1160): error C2144: syntax error: 'void' should be preceded by ';'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1160): error C4430: missing type specifier - int assumed. Note: C++ does not support default-int
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1160): error C2086: 'int WINGDIAPI': redefinition
1>  c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): note: see declaration of 'WINGDIAPI'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1161): error C2144: syntax error: 'void' should be preceded by ';'
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1161): error C4430: missing type specifier - int assumed. Note: C++ does not support default-int
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1161): error C2086: 'int WINGDIAPI': redefinition
1>  c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1157): note: see declaration of 'WINGDIAPI'
......
1>c:\program files (x86)\windows kits\10\include\10.0.15063.0\um\gl\gl.h(1207): fatal error C1003: error count exceeds 100; stopping compilation
========== Build: 0 succeeded, 1 failed, 0 up-to-date, 0 skipped ==========
{% endhighlight %}

