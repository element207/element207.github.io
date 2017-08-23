---
titile: OSG HelloWorld QT Example
categories: 
          - Tutorials
tags:          
          - Examples
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: This is an instruction of saying _Hello World!_ in OSG style. This project will build by using QtCreator.
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
* Qt Kit installed
    * MSVC2015 32bit or 64bit should be same with OSG library build      


# Overview
Normally you can find many instructions to say "Hello World" in OSG style.  
It should look like following steps:
> 1. Create a empty Qt Console Application.
2. Add OSG lib to project properties
3. Add codes to show a 3D model
4. Compile and run application. 

# Create Project
> Create an empty **_Qt Console Application_** project.

### Create new project

> **_File_** -> **_New File or Project..._**    
> select -> **_Application_** -> **_Qt Console Application_** -> **_Choose..._**  
> _Build system_ -> **_qmake_** -> Next  
> _Kit Selection_ -> **_MSVC2015 64bit_** -> **_Finish_**

![create new project][create new project]

![application settings][application settings]

### Configure Project Properties

> right click project -> **Add libraries...**    
> Type -> select **_External library_**  -> Next  
> Details select **_D:\OSG\lib\osg.lib_** -> Next   
> Summary -> **_Finish_**  
> Follow the same process to add  
**_osgViewer.lib  
osgDB.lib  
OpenThreads.lib_**    
> Build -> **_Run qmake_**

**Important**  
It's a very important procedure never forget it, is to run **_qmake_** again after adding library, or it will not be imported to the project.
{: .notice--info}

![project properties][project properties1]{: .align-center}

![project properties][project properties2]{: .align-center}  

![project properties][project properties3]{: .align-center}

**Notice**  
pay more attention to using same x64 or x32 **_Platform_** configuration!
{: .notice--danger}

# Add Codes


> Normally codes will be like this:

{% highlight C++ %}

#include <osgViewer/Viewer>
#include <osgdb/readfile>


int main(){

    osg::ref_ptr <osgViewer::Viewer> viewer = new osgViewer::Viewer;

    // set background color to dark
    viewer->getCamera()->setClearColor(osg::Vec4(0.2f, 0.2f,0.2f, 0.0f));

    // load osg model data which has been set under "OSG_FILE_PATH"
    viewer->setSceneData(osgDB::readNodeFile("glider.osg"));

    // set window start position and size
    viewer->setUpViewInWindow(400,200,800,600);
    viewer->realize();

    // run viewer
    int ret = viewer->run();
    return ret;
}
{% endhighlight %}


> Alternatively, if we want to keep the same source code also can be built on Visual Studio, can add following code

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

#include <osgViewer/Viewer>
#include <osgdb/readfile>


int main(){

    osg::ref_ptr <osgViewer::Viewer> viewer = new osgViewer::Viewer;

    // set background color to dark
    viewer->getCamera()->setClearColor(osg::Vec4(0.2f, 0.2f,0.2f, 0.0f));

    // load osg model data which has been set under "OSG_FILE_PATH"
    viewer->setSceneData(osgDB::readNodeFile("glider.osg"));

    // set window start position and size
    viewer->setUpViewInWindow(400,200,800,600);
    viewer->realize();

    // run viewer
    int ret = viewer->run();
    return ret;
}

{% endhighlight %}


# Compile and Run

> A 3D model should be displayed on the screen correctly.

![HelloOsg run][HelloOsg run]


[create new project]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt01.png
[application settings]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt02.png
[project properties1]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt03.png
[project properties2]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt04.png
[project properties3]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt05.png
[HelloOsg run]: {{site.url}}{{site.baseurl}}/assets/images/posts/HelloOsg/HelloOsgQt06.png
