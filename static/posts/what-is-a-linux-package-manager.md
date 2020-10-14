---
title: What is a linux package manager
description: Learn and understand package management in linux
summary: "Learn how to install, remove and update packages on your Linux system using package managers."
keywords:
  - linux package managers
  - package management in linux
  - what are package managers in linux
  - linux package management
feature:
  image: /uploads/posts/terminal/what-is-terminal-window.jpg
  alt: Software developer tutorial
cardImage:
  image: /uploads/twitter/terminal/what-is-package-manager.jpg
  alt: Software developer tutorial
date: 2020-10-14T17:30:00.644Z
author: gary-woodfine
tags:
  - ubuntu
  - linux
  - fedora
categories:
  - software-development
---
When using Linux a popular method of installing software is to make use of a Package Manager, but Package Managers can help
users accomplish a number of tasks. In this post, we'll take a deeper look into Linux Package Managers.

### what are package managers in linux?

In Linux Package Managers are essentially software applications that help users to: Search, Download, Install, Remove 
and Update software applications on their computer operating system. These can be either Command Line tools or a complete
Graphical User Interface application. 

Experienced Linux users will very rarely download software from websites or any other location. The primary reasons for
this included aspects as ease of use, security and the fact that most Linux distributions have a list of sources where 
users can download free open source software packages.

These package sources are referred to as repositories. Using a package manager users will automatically download the appropriate,
package from a configured repository, install it and complete all the required configuration tasks. There is no need to 
for the user to click through a wizard screen or hunt down configuration settings. If packages version are updated within
package repository, the package manager will update each package to its latest version whenever it is requested by the user to do so.

### What is a package?

In Linux a package is a compressed software archive file that contains all the files that comes with a software 
application delivers any kind of functionality, this can be any kind of command line utility,GUI application or a 
software library. 

A package may consist of a binary executable, configuration file and other software  dependencies. Common types of 
Linux packages include `.deb`, `.rpm`, and `.tgz`. Linux packages don't usually contain the dependencies necessary to 
install them, therefore Linux distributions use package managers to automatically read dependencies files and download 
the packages needed before proceeding with the installation.

The package usually includes a manifest of dependencies that must be satisfied for a software application to execute as
expected on any give Linux computer.

Common Package Managers in Linux include:
* dpkg  (Debian Package Manager)
* APT (Advanced Package Tool)
* rpm (RedHat Package Manager)
* yum (Yellowdog Update Modified)
* dnf (Dandified Yum)
* zypper
* flatpak 
* pacman
* snap
* synaptic

Packages also contain scripts that need to be executed if a package is requested to be removed. Ensuring that everything
that is associated with execution of package is cleared up.

### How to use a package manager.

Using a package manager, is typically accomplished via the [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window | Geek.I.Am")
although it is becoming more popular for Package Managers to implement a GUI and most of the popular Linux Distros now provide
User friendly interface to help users install software. These GUI, typically just provide a wrapper and automate the bash commands
used to install using the command line.

For most novice users of Linux, the most common and popular package managers they are likely to first start using is the 
`apt` (Advanced Package Tool) because it is most widely shipped as the default Package Manager for users of Debian, Ubuntu and
Mint.  

We'll cover some of the basic commands of how to use `apt` in order to illustrate the ease of use of using a package manager
in the [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window | Geek.I.Am")

#### How to install a package

You can install a package as follows by specify a single package name or install many packages at once by listing all their names.

To install [Flameshot - a popular free powerful open source screenshot software](https://flameshot.js.org/ "Flameshot - Powerful yet simple to use screenshot software." )

```shell script
sudo apt install flameshot
```
![Flameshot install ](/uploads/apt-flameshot-install.png "Flameshot install")


#### Find dependencies of a package
Once package has been installed you might want to understand which dependencies the package is making use of, you can 
list out the dependencies of a package using apt as follows

```shell script
sudo apt depends flameshot
```
![Flameshot Dependencies ](/uploads/flameshot-dependencies.png "Flameshot dependencies")

#### Search for package

It is highly likely that you will need to search for a package to perform a specific task. The `apt` package manager 
enables you to easily search for packages via the terminal.

In this case, I want to search for an image manipulation program, I can simply include the phrase in quotes and use the
apt search facility

```shell script
sudo apt search "image manipulation program"

```

![apt search ](/uploads/apt-search.png "apt search")

### View package details
You will often want to find and view details of package.
In this example I want to view some details regarding the Flameshot package we installed earlier.

```shell script
sudo apt show flameshot
```

![apt view ](/uploads/apt-package-view.png "apt view")


#### Update System Packages


You will periodically want to check and ensure you are making use of the latest available packages, often package maintainers
will release Bug Fixes and new additional features in packages and you will want to ensure you are able to make use of these

To download a list of packages from different repositories included on your system and updates them when there are new 
versions of packages and their dependencies.
```shell script
sudo apt update
```

#### Upgrade System Packages

Often the above command will instruct you that new releases of packages are available, so 
 to install new versions of all the packages on your system.
 
 ```shell script
sudo apt upgrade
```

You will often want to execute both these commands at the same time, so you can run them both at the same time using
```shell script
sudo apt update && sudo apt upgrade -y
```

#### Remove packages

To remove packages from your system.
```shell script
sudo apt remove flameshot
```

if you want to ensure all packages configuration and dependencies are removed at the same time you can use the purge switch

```shell script
sudo apt remove flameshot --purge
```

#### Remove unused packages

Installing or upgrading packages will result in some dependencies not being required, you can clean up these unused dependencies
after removing that particular package, it’s dependencies will remain on the system, therefore to remove them 
use autoremove as follows:
```shell script
sudo apt autoremove
```

### Summary

Learning how to use the Package Manager from the terminal window can help you to quickly, easily and efficiently install, 
update and remove packages on your system. 

