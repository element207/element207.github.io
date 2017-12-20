---
title:  "Use log4j in E4 Appliction"
date:   2017-12-20 10:21:0 +0800
categories:
          - Tutorials
tags:          
          - Eclise 4
          - RCP Dev
          - log4j
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: Eclipse 4 RCP Application development.
mathjax: true
---


{% include toc %}

# Use log4j in E4 Appliction

There are many blogs about how to use log4j for logging, but there hard to find an entire instruction for how to use log4j in
E4 application, so I'm going to fill the void.

## Workflow for using log4j
1. Configure log4j
2. Initialize log4j logger in lifecycle
3. Get instantiation for logging


## Configure log4j in E4 application

> First to add log4j plug-in to E4 application plug-in

Open **MANIFEST.MF** -> on tab **Dependencies** add **org.apache.log4j**

> Second to add required plug-ins in product configuration

Open _E4App_**.product** file -> on tab **Contents** click button **Add Required Plug-ins**

**E4app** is the name of the E4 application, for example _RCPApp.product_.
{: .notice--info}

> Finally add **log4j.properties** file to application

Add log4j.propeties file to **src** folder of the E4 application plug-in project

Following is the syntax of log4j.properties file for INFO level
```
# set logging level INFO, output to console and file
log4j.rootCategory=INFO, stdout, file

log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p - %m%n

# Redirect log messages to a log file, support file rolling. only output level >= INFO to log file
log4j.appender.file=org.apache.log4j.RollingFileAppender
log4j.appender.file.File=log4j-RCPProject.log
log4j.appender.file.Append=false
log4j.appender.file.threshold=INFO
log4j.appender.file.filter.filter1=org.apache.log4j.varia.LevelRangeFilter
log4j.appender.file.filter.filter1.levelMin=INFO
log4j.appender.file.filter.filter1.levelMax=OFF
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p - %m%n

```

Following is the syntax of log4j.properties file for DEBUG level
```
# set logging level INFO, output to console and file
log4j.rootCategory=DEBUG, stdout, file, FileDebug

log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n

# Redirect log messages to a log file, support file rolling. only output level >= INFO to log file
log4j.appender.file=org.apache.log4j.RollingFileAppender
log4j.appender.file.File=log4j-RCPProject.log
log4j.appender.file.Append=false
log4j.appender.file.threshold=INFO
log4j.appender.file.filter.filter1=org.apache.log4j.varia.LevelRangeFilter
log4j.appender.file.filter.filter1.levelMin=INFO
log4j.appender.file.filter.filter1.levelMax=OFF
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p - %m%n

# Output messages which are level >= DEBUG to FileDebug
log4j.appender.FileDebug=org.apache.log4j.RollingFileAppender
log4j.appender.FileDebug.File=log4j-RCPProject_Debug.log
log4j.appender.FileDebug.Append=false
log4j.appender.FileDebug.threshold=DEBUG
log4j.appender.FileDebug.filter.filter1=org.apache.log4j.varia.LevelRangeFilter
log4j.appender.FileDebug.filter.filter1.levelMin=DEBUG
log4j.appender.FileDebug.filter.filter1.levelMax=OFF
log4j.appender.FileDebug.layout=org.apache.log4j.PatternLayout
log4j.appender.FileDebug.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n
```
## Initialize log4j logger in lifecycle

> First to register a life cycle hook in E4 application

Add life cycle hook manage by following [**Tutorial**][lifecycle tutorial]{: .btn .btn--info}

**Tutorial**  
[Register a life cycle hook in Eclipse RCP applications - Tutorial - Vogella][lifecycle tutorial]
{: .notice--info}

> Second to define log4j logger in lefecycle

Add following codes in lifecycle manage

```
public class Manager {

    @PostContextCreate
    void postContextCreate(IApplicationContext appContext, Display display, @Preference IEclipsePreferences prefs) {

        // Get log4j.properties from default location
        URL confURL = FrameworkUtil.getBundle(this.getClass()).getResource("log4j.properties");
        try {
            // Get log4j.properties from install location
            URL logPath = new URL(Platform.getInstallLocation().getURL() + "log4j.properties");
            if (new File(logPath.getPath()).exists()) {
                // install location property file if it exists
                confURL = logPath;
            }
        } catch (MalformedURLException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }

        // Set log4j.properties location
        PropertyConfigurator.configure(confURL);
    }
}
```

**About log4j.properties**  
Application will use **default log4j.properties** which is in the **src** folder of the E4 application where we set by last step.
The application will also check the install location path to find if the log4j.properties exists or not, if it does, the application
will use this instead, so by this approach, if we want to change the log level, we can copy the DEBUG level log4j.properties file to
the application install location to get more debug information.
{: .notice--info}

## Get instantiation for logging

> First to declare log4j in classes

```

import org.apache.log4j.Logger;

public class SampleClass {
    // Add this line to declare logger
    private final static Logger logger = Logger.getLogger(SampleClass.class);

    ......
}

```

> Second to use logger 

```

import org.apache.log4j.Logger;

public class SampleClass {
    // Add this line to declare logger
    private final static Logger logger = Logger.getLogger(SampleClass.class);

    ......
    
    public void SampleMethod(){
    
            logger.trace("Trace Message!");
            logger.debug("Debug Message!");
            logger.info("Info Message!");
            logger.warn("Warn Message!");
            logger.error("Error Message!");
            logger.fatal("Fatal Message!");
    
}

```
**Levels**  
Levels are ordered,For the standard levels, we have  
**ALL < DEBUG < INFO < WARN < ERROR < FATAL < OFF**
{: .notice--info}



[lifecycle tutorial]: http://www.vogella.com/tutorials/Eclipse4LifeCycle/article.html
