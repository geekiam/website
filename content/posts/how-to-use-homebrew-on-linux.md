---
title: How to use Homebrew package manager on Linux
description: How to guide on installing and using homebrew package manager on Linux
summary: How to guide on installing and using homebrew package manager on Linux
keywords:
  - homebrew package manager on linux
  - install linuxbrew
  - linuxbrew package manager
feature:
  image: /uploads/posts/code/package-manager.svg
  alt: How to use linuxbrew package manager
cardImage:
  image: /uploads/posts/code/package-manager.png
  alt: How to use Git Flow
date: 2020-12-18T20:29:50.183Z
author: garywoodfine
tags:
  - linuxbrew
  - homebrew
  - tutorial
categories:
  - collaboration
---
Package Managers are essentially software applications that help users to: Search, Download, Install, Remove and Update 
software applications on their computer operating system. These can be either Command Line tools or a complete Graphical
User Interface application. In [What is a Linux Package Manager](https://geekiam.io/what-is-a-linux-package-manager/ "What is a Linux Package Manager | Geek.I.Am")
we discussed package managers from a Linux Perspective and in [How To Use Package Management In JavaScript Projects](https://geekiam.io/how-to-use-package-management-in-java-script-projects/ "How To Use Package Management In JavaScript Projects | Geek.I.Am")
learned more about them from a Javascript perspective.

### What is Homebrew

Homebrew is a free and open-source software package management system that simplifies the installation of software on 
Apple's macOS operating system and Linux. The name is intended to suggest the idea of building software on the Mac 
depending on the user's taste. 

Homebrew is billed as the missing package manager for Mac OSX. It simplifies the task of installing terminal utilities 
and graphical applications using the terminal window. It is designed to look and act like a typical `*nix` package 
manager.

Homebrew has spawned several sub-projects such as **Linuxbrew**, a Linux port now officially merged into Homebrew; 
Homebrew Cask, which builds upon Homebrew and focuses on the installation of GUI applications and "taps" dedicated to 
specific areas or programming languages and Frameworks like PHP & NodeJS etc.

### Why use Linuxbrew
There are a few reasons you might want to opt to use Linuxbrew instead of your system’s standard package manager. 

First, there is no need to use `sudo` to install packages. You don’t even necessarily need root privileges to install
Linuxbrew itself. 

Packages are installed in either your `$HOME` directory or a Linuxbrew-specific home directory.

### How to install Linuxbrew

In order to install Linuxbrew, you will need to ensure that your system as the following dependencies are installed:
* [cUrl](https://geekiam.io/what-is-c-url/ "What is cUrl | Geek.I.Am")
* [Git](https://geekiam.io/what-is-git/ "What is Git | Geek.I.Am")
* [Build Essential](https://packages.debian.org/sid/build-essential "Package: build-essential | Debian") 
* [file](https://www.darwinsys.com/file/ "Fine Free File Command | Darwinsys")

To ensure all these packages are installed use
```shell
sudo apt-get install build-essential curl file git
```
Once all dependencies have been installed, we can now install Linuxbrew. 

Linuxbrew is not actually available in any Distro package managers and therefore we will need to make use of bash and 
curl to install the application.  It is well worth taking the time to visit the [Linuxbrew GitHub repository](https://github.com/Linuxbrew/brew "Linuxbrew | Github")
to check whether the instructions have changed.

At the time of writing the instructions were as follows:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
```
Once the command has completed then we need to add the following to our `~/.bashrc`  which can be done using any text 
editor.  Personally I tend to make use of `nano` , so typically will use `nano ~/.bashrc` to open the file for editing
and paste the code below, at the bottom of the file.

```shell
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

Save and exit the file, then we can simply refresh the terminal window using either `. ~/.bashrc`  or closing and 
open a [terminal window](https://geekiam.io/how-to-use-the-linux-terminal-window-on-ubuntu/ "How To Use The Linux Terminal Window On Ubuntu | Geek.I.Am") 

### Using Homebrew

Homebrew makes it really easy to install, update and maintain various packages on your system which is really useful for
developers. 

A common use case for developers is to install various compilers or frameworks. For Node.JS developers they may need to
install different versions of the Node to support a number of different projects.  For this purpose, 
[Node Version Manager (nvm)](https://github.com/nvm-sh/nvm "Node Version Manager | Github") helps them to easily install
and switch to different versions libraries on there machine.

Homebrew helps developers to easily install nvm to their machines.  To install nvm using Homebrew use
```shell
brew install nvm
```
Once complete you will be prompted to edit your `~/.bashrc` file to add the following
```shell
 export NVM_DIR="$HOME/.nvm"
    [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh" # This loads nvm
    [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion
```

Save and Exit your `~/.bashrc` file and then refresh your current terminal window using `. ~/.bashrc` and nvm is ready 
for use. You can check your version of nvm using `nvm --version`

### Search for packages
Homebrew has loads of useful packages. You can view the list of packages available using 
```shell
brew formulae
```
This will display a long and overwhelming list of packages that are available
![brew formulae](/uploads/brew-formulae.png)

The list can also be viewed at [Homebrew Formulae](https://formulae.brew.sh/formula-linux/ "Homebrew formulae")

If you would like to search for a package via description you can use

```shell
    brew search --desc "manage multiple node"
```

This will return all the packages that will help to manage multiple node versions.  To get more information about a 
particular package, in our case we want to learn more about nvm we can use.

```shell
brew info nvm 
```
If you want a list of commands that are available for use in Homebrew, you can simply use
```shell
brew --help
```
In addition to the help command-line switch, Linuxbrew also has a detailed instruction manual available. To view it use

```shell
man brew
```


### Conclusion
Homebrew is a tool that makes it even easier to install applications on Linux. It is not intended to replace the 
traditional package managers, but rather works as a complement to them.


