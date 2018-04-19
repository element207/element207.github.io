---
title:  "postgres and pgadmin"
date:   2018-04-19 16:30:00 +0800
categories:
          - Reference
tags:          
          - database
          - postgres
          - pgadmin3
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: postgres configuration and accessing database by GUI tool pgAdmin.
mathjax: true
---

{% include toc %}

# Settings on postgres

First, open the PostgreSQL configuration file and make sure that the service 
is going to listen outside of localhost.  

```
# sudo [editor] /etc/postgresql/[version]/main/postgresql.conf
$ sudo vim /etc/postgresql/9.6/main/postgresql.conf
```

Search down to the section titled 'Connections and Authentication'. The first
 setting should be 'listen_addresses', and might look like this:
```
#listen_addresses = 'localhost'     # what IP address(es) to listen on;
listen_addresses = '*'
```

The comments to the right give good instructions on how to change this field,
 and using the suggested '*' for all will work well.

Please note that this field is commented out with #. Per the comments, it will
 default to 'localhost', so just changing the value to '*' isn't enough, you
  also need to uncomment the setting by removing the leading #.

It should now look like this:

```
listen_addresses = '*'         # what IP address(es) to listen on;
```
You can also check the next setting, 'port', to make sure that you're connecting
 correctly. 5432 is the default, and is the port that psql will try to connect
 to if you don't specify one. 

```
port = 5432         # (change requires restart)
```

Save and close the file, then open the Client Authentication config file, which
 is in the same directory:

```
# sudo [editor] /etc/postgresql/[version]/main/pg_hba.conf
$ sudo vim /etc/postgresql/9.6/main/pg_hba.conf
```

I recommend reading the file if you want to restrict access, but for basic open 
connections you'll jump to the bottom of the file and add a line like this:

```
#Type   Database    User    IP-Address          Method
host    all         all     172.18.0.0/24       md5
```
The format `172.18.0.0/24` means the network matches the rule will be allowed to
 access the database, `24` is mask, like `255.255.255.0`, means ip-Address like
 `172.18.0.xxx` can be allowed to connect to db, if use `16`, that means `255.255.0.0`.

Once you've saved changes to the file you will need to restart the service to implement
 the changes.
```
$ sudo service postgresql restart
# or
$ sudo systemctl restart postgresql
```

Now you can check to make sure that the service is openly listening on the correct port
 by using the following command:

```
sudo netstat -ltpn | grep postgres
tcp    0    0 0.0.0.0:5434    0.0.0.0:*     LISTEN    31352/postgres
tcp6   0    0 :::5434         :::*          LISTEN    31352/postgres

```

Finally you'll be able to successfully connect from a remote computer using the command:

```
# psql -h [server] -p [port if not 5432] -U [user] [database]
$ psql -h 172.18.0.150 -p 5434 -U myuser mydb
```

# Settings on pgAdmin 3

**Connect to PostgreSQL database using pgAdmin GUI application**

The second way to connect to a database is using pgAdmin GUI application. By using pgAdmin
 GUI application, you can interact with PostgreSQL database server via an intuitive user
  interface.

The following illustrates how to connect to a database using pgAdmin GUI application:

**First, launch the pgAdmin application.**

![launch pgAdmin](http://www.postgresqltutorial.com/wp-content/uploads/2012/08/Launch-pgAdmin.png)

**Second, add a new connection to database.**
click `Add Server...` input following information, then click `OK` button:
```
Name:           myconnection(for example:PostgreSQL 9.2)
Host:           172.18.0.150
port:           5432(by default)
Maintenance DB: postgres
Username:       postgres
```

**Third, double-click the PostgreSQL 9.2 under the Servers item. pgAdmin will ask you for**
 the password. You have to provide the password for the `postgres` user. Once finish, click
 `OK` button to log in to the PostgreSQL server.

![connect to db](http://www.postgresqltutorial.com/wp-content/uploads/2012/08/pgAdmin-Enter-Password.png)
