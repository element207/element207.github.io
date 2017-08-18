---
titile: OSG HelloWorld VS2015 Example
categories: 
          - Tutorials
tags:          
          - Examples
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: This is an instruction of saying HelloWorld in OSG style. This project will build by using Visual Studio 2015.
mathjax: true
---

# OSG HelloWorld Example

{% include toc %}

# Precondition

# Overview
Normally you can find many instructions to say "Hello World" in OSG style.  
It should look like following steps:
{% highlight shell %}
1. Create a empty win32 console application.
2. Add OSG lib to project properties
3. Add codes to show a 3D model
4. Compile and run application. 
{% endhighlight %}


Normally codes will be like this:

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


**OSG VS2015 Troubleshooting**
If building or running above project with problems, please check another tutorial. [OSG VS2015 Troubleshooting]({{ site.baseurl }}{% post_url 2017-08-14-OSG-VS2015-TroubleShooting %}){: .btn .btn--info}
{: .notice--info}
