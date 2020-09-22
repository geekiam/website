---
title: How to create a new Github repository using the terminal
description: "How to create a Github repository from a local terminal Update :
  Create a new repository and upload the data from one application to github all
  using  the terminal"
summary: Create a new Github repository and commit and push your code using the
  terminal window
keywords:
  - github
  - git
  - version control
feature:
  image: /uploads/posts/git/github-repository-using-terminal-window.png
  alt: Version Control
date: 2020-06-20T10:34:39.798Z
author: gary-woodfine
tags:
  - git
  - github
categories:
  - version-control
  - collaboration
---
In [Learn The Basics Of Version Control To Become A Master](https://geekiam.io/learn-the-basics-of-version-control-to-become-a-master/) we discussed the basic principles, use cases and terms regarding version control. You have more than likely now realized that all software projects will require some form of version control.  Even if you are the only developer that will be working on the project, it makes absolute sense to create a version control repository.

Version control systems not only help you in keeping track of changes and overcoming errors whilst coding, but they also help you to keep your code safe and helping ensure you never lose or delete your code.  

GitHub is a code hosting platform for collaboration and version control, which not only enables you and others work together on projects, but it also enables you to safely store your code online, so you don't have to worry about servers and managing them. Despite Github being a for profit company they provide free access to developers to host and share code with over 50 millions other developers world-wide

![Github front page screenshot](/uploads/github-screenshot.png "Github front page screenshot")

[Registering an account with Github](https://github.com/) enables developers to create *Public* and *Private* remote repositories to store their code and access to a whole host of other really useful tools and services.

Github supplies a really easy to use Web Interface and developers can use it to carry out all actions and processes they would typically need just using a browser based interface.  For instance, Creating and updating repositories, reviewing code, creating Pull requests and so forth.  

The web based interface works great, however as developers are more than likely to going to prefer working with [Terminal Window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window") , because for most developers this is how they will primarily work with git. Especially when first starting out and learning the basics.

Github also provides a really rich set of Application Programming Interface (API) methods enabling developers to build tools to engage and interact with Github. Developers could use these API's to either build their own custom tools or just choose to interact with Github making use of these tools.

### Create Github repository using the API

It is fairly easy, but unfortunately a verbose method to create a Github repository using the API using the terminal window. All that is required is using a library like [CuRL - A command-line tool for transferring data using various network protocols](https://curl.haxx.se/) and reading understanding and remembering the API structure.

In order to use the Github API's you will be required to create a [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) 

Once you're registered your Personal Access Token, you can use the following command to create your repository.

```shell
curl -H 'Authorization: token some_token-id' https://api.github.com/user/repos  -d '{"name":"somerepositoryname"}'
```

This is quite a lot to remember, and if you're anything like me you're going to forget this almost immediately.  Fortunately, Github realise most developers have goldfish memories and have spent time developing an easier to use command line tool to help developers called Hub.

### What is Github CLI ?

Github CLI enables you to interact with Gihub on the command line, and it’s now available in beta. It brings pull requests, issues, and other GitHub concepts to the terminal next to where you are already working with git and your code.

[Github CLI is an extension to command-line git](https://cli.github.com/manual/) that helps you do everyday GitHub tasks without ever leaving the terminal window.  

### How to install Github CLI on Linux

#### Debian, Ubuntu , PopOS

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository -u https://cli.github.com/packages
sudo apt install gh

```
To upgrade seems to require just running the installer again i.e.
```sh
   sudo apt install gh
```

#### Fedora, Centos, Red Hat
```sh
sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo
sudo dnf install gh
```
To upgrade seems to require just running the installer again i.e.

```sh
sudo dnf install gh
```


After you have finished installing `gh`, I always prefer to ensure that I [configure my SSH keys for GitHub Access](https://garywoodfine.com/setting-up-ssh-keys-for-github-access/) then I ensure that I configure hub to authenticate and execute commands using ssh.

```shell
gh config set git_protocol ssh
```

if you want to read the *github cli* help files you can use the following commands

```shell
gh help
```

![Github CLI help files](/uploads/github-cli.png "Github CLI help files")

It is worth taking a little time and having a read through the help files to get acquainted with some of the terms and commands that are available. 

If reading online manuals is your preferred option then the [full Github Cli manual](https://cli.github.com/manual/) is available

### How to create Github repository using terminal commands

We now go ahead and create our repository and add our files then we create our repository on Github.

In this example we will create a very simple repository with one file.  

```shell
# create a directory and name it geekiam
mkdir geekiam

# change into the directory
cd geekiam

# create a directory and name it version-control-tutorial
mkdir version-control-tutorial

# change into the version-control-tutorial
cd version-control-tutorial

# Initialise the git repository
git init

# then we will create another folder
mkdir create-remote-repo

# change into the new directory
cd create-remote-repo

# We will create a new file name it README.MD
touch README.md

# now we will edit the file and add whatever content we need
nano README.md
```

After you have added whatever data you want to the README.md file simply save and exit the file using ctrl + x

we can now add the files to our respository and commit them

```shell
# add the files to the repository
git add .

# commit the changes to our local repository
git commit -m "This is the first commit"
```

We can now use *hub* to create out remote repository.  The default action hub will perform if you don't supply and organisation name, it will create a new repository with the name of the root folder you're adding under your username on Github.  However, in my case I want to create the repository  under the Gee-I-Am organisation so I will supply the organisation name and the repository name I want to use.

```shell
# create the remote repository
gh repo create Geek-I-Am/version-control-tutorial

# you will be notified of the success of the creation.
# We can now push our changes to the remote repository

git push -u origin master
```

[gh repo create](https://cli.github.com/manual/gh_repo_create)

### Conclusion

Making use of the Github CLI makes it easy to clone or create repositories, browse project pages, list known issues, ensure your local branches stay up to date, and share logs or code snippets via Gist, all while using the terminal.
