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
for more details check another tutorial: [OSG HelloWorld Example]({{ site.baseurl }}{% post_url 2017-08-10-OSG-HelloWorld-Example %}){: .btn .btn--info}
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

# Compile Error

if you build the codes above maybe you will get many errors.

**Notice**
Make sure you are using the same platform configuration about x64 or x86, or you will get similar error message like below:
<br><br>`fatal error C1083: Cannot open include file: 'osgviewer/viewer': No such file or directory.`
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

for this error MSDN tells us we should include windows.h header.
add those lines to above source codes.

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

/***************************** added new lines start *************************************/
#if defined(_WIN32) || defined(_WIN32) || defined(__WIN32__) || defined(_WIN64)
#include <windows.h>
#endif
/******************************** added new lines end *************************************/

#include <osgviewer/viewer>
#include <osgdb/readfile>

int main()
{
	osg::ref_ptr <osgViewer::Viewer> viewer = new osgViewer::Viewer;
	viewer->setSceneData(osgDB::readNodeFile("glider.osg"));
	return viewer->run();
}
{% endhighlight %}

then we can build successfully.

# Runtime Error

Run the program we built just now, maybe we can run it correctly, maybe not, because we may meet following error:

**Error** "The program cann't start because **zlibd1.dll** is missing from your computer. Try reinstalling the program to fix this problem."
{: .notice--danger} 

I don't know why, but the fact is that We can find zlib*.dll files under OSGPATH/bin folder, but we perhaps  notice that there is no `zlibd1.dll` file in that folder, we may get `zlib1.dll` and `zlibd1d.dll` instead. `zlibd1d.dll` is for debug mode, then what we need to do is to copy `zlib1.dll` to a new name `zlibd1.dll`, and copy it into windows path:

**Informaton**
<br>`x86: copy zlibd1.dll to C:\Windows\System32\`
{: .notice--info}
`x64: copy zlibd1.dll  C:\Windows\SysWOW64\`
{: .notice--info}
and run above program again. this time we should get glider model displayed on screen.
![glider.osg screen capture]({{site.url}}{{site.baseurl}}/assets/images/osg/glider.jpg)
{: .align-center}