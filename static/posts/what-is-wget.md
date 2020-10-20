---
title: What is WGet
description: Introduction to a handy command line tool called wget, discussing installing and its most basic use cases
summary: " An introductory tutorial on how to install the handy command line tool name wget and when and where to use it "
keywords:
  - terminal window
  - How to install wget
  - download files using the terminal window
  - bash
feature:
  image: /uploads/posts/terminal/what-is-terminal-window.jpg
  alt: Software developer tutorial
cardImage:
  image: /uploads/twitter/terminal/what-is-wget.jpg
  alt: Software developer tutorial
date: 2020-10-20T17:30:00.644Z
author: gary-woodfine
tags:
  - wget
  - linux
  - ubuntu
categories:
  - software-development
---
In [what is curl](https://geekiam.io/what-is-c-url/ "What is cUrl| Geek.I.Am") we discussed one of the most popular 
command line tools amongst Linux users to download files.  In this post we will get to know another popular tool `wget`.

[GNU Wget](https://www.gnu.org/software/wget/ "GNU Wget | GNU Operating System") is a free software package for retrieving files using HTTP, HTTPS, FTP and FTPS, the most widely used Internet 
protocols. It is a non-interactive commandline tool, so it may easily be called from scripts, cron jobs, terminals 
without X-Windows support, etc.

Using wget you can download a single file, multiple files, an entire directory or even an entire website. 


### How to install wget?

Most Linux distributions have wget pre-installed by default. However, it is also available in your distributions package
manager. 

To check whether wget has been pre-installed you can simply use the version check and if present your system will respond
with the relevant details

```shell script
wget --version
```

![wget version check ](/uploads/wget-version-check.png "wget version check")

If you're using a Debian or Ubuntu based distribution you can easily install wget making use of the apt package manager
```shell script
sudo apt install wget
```
no further configuration required and wget is ready for use.

### Overview of the wget command

We mentioned previously that wget can be used to download an individual file, multiple files, an entire directory and 
even entire websites. wget conveniently also attempts to retry a download if a connection drops and resumes from where it 
left off, if possible, if the reconnection is successful.

Other features include:
* Download files using HTTP, HTTPS, and FTP.
* Download resumption
* Convert absolute links in downloaded web pages to relative URLs.
* Supports HTTP proxies and cookies.
* Supports persistent HTTP connections.
* Can run in the background even when you aren't logged on.

### How to download file with wget

All you need to do to download a file(s) with wget is to provide the URL or filepath. wget will default to downloading 
the file into the directory in which it is called, by default it will use the original name of the file.

We can download a page from this website making use of wget.
```shell script
## lets create a Geek.I.Am directory to store our file and change into the directory
mkdir geekiam && cd geekiam
wget geekiam.io/what-is-c-url/
```

![wget download file ](/uploads/wget-download-page.png "wget download page")

The result is a single `index.html` file that contains the content pulled  from [https://geekiam.io/what-is-c-url/](https://geekiam.io/what-is-c-url/) 

If you inspect the downloaded file you will see it contains all the HTML to create the webpage. Any images and stylesheets
will not be downloaded. 

if you would like to download a file and give it a different name when you download it you can use the `-O` (uppercase O) option
with the filename you would like 

```shell script
wget -O curl-tutorial.html geekiam.io/what-is-c-url
```

### How to download an entire website with wget

You can use wget to download an entire website pages recursively up to a maximum of 5 levels deep. By
making use of:

```shell script
wget -r server-address.com
```

If you would like to incease the levels to recurse, say for instance you know the website has 
up to 8 levels you use the `-l` switch with the number of levels to recurse.

```shell script
wget -r -l8 server-address.com
```

If you want to create a mirror of an entire public facing website on your machine locally you can easily do using `-m`
mirror option with some additional parameters:

* `--convert-links ` Will convert links to ensure all links are relative to the directory
* `--page-requisites` downloads additional file resources like stylesheets etc.

```shell script
 wget -m --convert-links --page-requisites geekiam.io
```
** Bear in mind this may produce different results depending on how the website was developed, framework and server security etc **


### Download files with FTP

If you need to download files from an FTP based server with a username and password you can easily do so using the following:

```shell script
wget -r ftp://server-address.com/directory  --ftp-user username --ftp-password somepassword
``` 


### How to run wget as a background task
To get wget to run as a background command leaving you able to get on with your work in the [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window | Geek.I.Am") 
while the files download. Use the `-b` switch in the command:

```shell script
wget -b server-address.com
```
You can still combine the switches, for instance if you want to mirror a larger site as above you could include the `-b`
option switch
```shell script
 wget -b -m --convert-links --page-requisites server-address.com
```

### Conclusion
 
 We have explored some of the very common use cases in which wget is used, but the tool is capable of so much more and 
 it is well worth taking the time to read more in the manual. To access the manual simply use the command:
 
 ```shell script
man wget
```

If you require help with or need more information using a specific command you can use the `--help` switch
```shell script
wget --help
```






