---
titile: OSG HelloWorld VS2015 Example
categories: 
          - Tutorials
tags:          
          - Examples
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: This is an instruction of saying _Hello World!_ in OSG style. This project will build by using Visual Studio 2015.
mathjax: true
---

{% include toc %}

# Precondition

> * OSG library has been built in x32 or x64
* OSG Example data has been downloaded. 
* assuming OSGPATH is setting as D:\OSG
    * _include_ - D:\OSG\include
    * _lib_     - D:\OSG\lib
    * _bin_     - D:\OSG\bin
    * _data_    - D:\OSG\data
* System environment has been set corroctly
    * _PATH_          - add D:\OSG\bin to _PATH_
    * _OSG_FILE_PATH_ - create this key with value _D:\OSG\data_  


# Overview
Normally you can find many instructions to say "Hello World" in OSG style.  
It should look like following steps:
> 1. Create a empty win32 console application.
2. Add OSG lib to project properties.
3. Add codes to show a 3D model.
4. Compile and run application. 

# Create Project
> Create an empty win32 console appliction project.

### Create new project

> file -> new -> project...  
> select -> Win32 -> Win32 Console Application -> OK  

![create new project][create new project]{: .align-center}

> Application Settings -> check Empty project -> Finish  

![application settings][application settings]{: .align-center}

### Configure Project Properties

> project -> Properties -> VC++ Directories  
> Executable Directories - add **_D:\OSG\bin_**  
> Include Directories - add **_D:\OSG\include_**  
> Library Directories - add **_D:\OSG\lib_**  

![project properties][project properties]{: .align-center}

**Notice**  
pay more attention to using same x64 or x86 **_Platform_** configuration!
{: .notice--danger}

# Add Codes


> Normally codes will be like this:

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

#if defined(_WIN32) || defined(_WIN32) || defined(__WIN32__) || defined(_WIN64)
#include <windows.h>
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


# Compile and Run

> A 3D model should be displayed on the screen correctly.

![HelloOsg run][HelloOsg run]{: .align-center}


**OSG VS2015 Troubleshooting**
If building or running above project with problems, please check another tutorial. [LEARN MORE]({{ site.baseurl }}{% post_url 2017-08-14-OSG-VS2015-TroubleShooting %}){: .btn .btn--info}
{: .notice--info}


[create new project]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsg01.png
[application settings]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsg02.png
[project properties]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsg03.png
[HelloOsg run]: {{site.url}}{{site.baseurl}}/assets/images/osg/glider.jpg


