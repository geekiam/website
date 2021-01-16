---
title: What is cURL
description: Introduction to a handy command line tool called cURL, discussing installing and its most basic use cases
summary: " An introductory tutorial on how to install the handy command line tool name cURL and when and where to use it "
keywords:
  - terminal window
  - How to install cURL
  - download files using the terminal window
  - bash
feature:
  image: /uploads/posts/terminal/linux-tutorials.svg
  alt: Software developer tutorial
cardImage:
  image: /uploads/twitter/terminal/what-is-curl.jpg
  alt: Software developer tutorial
date: 2020-10-01T15:18:00.644Z
author: garywoodfine
tags:
  - cURL
  - linux
  - ubuntu
categories:
  - software-development
---
Developers will often spend a lot of time using the [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window | Geek.I.Am") and will often
need to download or transfer files and data across the internet or even connect to an API and perform some action. Using a tool like cURL enables you
to do these kinds of tasks without even have to leave the terminal window.

### What is cURL?
 cURL is a free command line tool, available in most Package Manager Repositories. It uses URL syntax to transfer between  
 computers. curl is a widely used because of its ability to be flexible and complete complex tasks. For example, 
 you can use curl to test API's, authentication, SSL connections, proxy support, FTP uploads, and more! You can also do
 simple things with curl, such as download files, webpage or even images.
 
 With curl, you can download or upload data using one of the supported protocols:
 
 * HTTP 
 * HTTPS
 * SCP 
 * DICT
 * FILE
 * FTP
 * FTPS
 * GOPHER
 * IMAP
 * IMAPS
 * LDAP
 * POP3
 * RTMP
 * RTSP
 * SCP
 * SMB
 * SMBS
 * TELNET
 * TFTP
   

### How to install cURL

cURL may already be installed and shipped by some distributions of Linux, to check if curl is already installed simply check the
version.
```shell script
curl --version
```
If curl is not present on your system, your system will display and error message indicating that it could not find the 
command curl else your system will respond as follows:

![Curl Version check](/uploads/curl-version.png "cURL version check")

If curl is not installed on your system, then in most Linux Distributions it will be available in the default package repositories
and should be easily installed using you favourite package manager

#### Install curl Debian based distributions

```shell script
sudo apt update && sudo apt upgrade -y
sudo apt install curl
```

#### Install curl RPM based distributions
```shell script
sudo dnf update && sudo dnf upgrade -y
sudo dnf install curl
```

Once curl you can access the manual pages from the command line using 
```shell script
curl --man
```
!![Curl manual ](/uploads/curl-manual.png "cURL manual")

### How to use cURL

In [Advanced git configuration options](https://geekiam.io/advanced-git-configuration-options/ "Advanced Git configuration options | Geek.I.Am") and
[How to automate creating gitignore](https://geekiam.io/how-to-automate-creating-gitignore/ "How to automate creating Git Ignore files | Geek.I.Am") we 
touched a typical use case where you may want to use cURL.  In that use we wanted to download a file to our system and rename the file to a different name on
our system, which we achieved in one line, without having to leave the terminal window.

```shell script
# Download a file from Github and rename it to .git_autocomplete on our system
curl -o .git_autocomplete https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
```

This is a typical use case for developers to use curl. Its quick, lightweight and gets the job done without having to leave the terminal window.

You can obviously use cURL to do more complex tasks. For instance, lets do a verbose trace connection trace on the
[Geek.I.Am home page](https://geekiam.io "Geek.I.Am Home page")

```shell script
curl -v https://geekiam.io 

```
!![Curl Verbose web page crawl ](/uploads/curl-verbose-output.png "cURL verbose")

Another common task software developers may use curl for is to download files from password protected FTP sites

```shell script
curl -u FTP_USERNAME:FTP_PASSWORD ftp://ftp.geekiam.io/somefile.tar.gz
```

### Conclusion 

curl is a powerful, flexible tool, well worth getting to know. The commands we've highlighted in this article are just
 as small fraction of common use cases software developers will make use of curl of on a day to day basis.
  
 curl provides the ability to interact with a number of protocols, and once you start getting more familiar with using the tool
 you'll find it becomes an indispensable tool in your toolbox.

