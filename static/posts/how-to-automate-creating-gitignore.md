---
title: How to automate creating gitignore files
description: A git ignore file allows you to exclude files from your git
  commits. Learn how to easily automate the creation of .gitignore files.
summary: A git ignore file allows you to exclude files from your git commits.
  Learn how to easily automate the creation of .gitignore files.
keywords:
  - gitignore
  - how to create gitignore file
feature:
  image: /uploads/posts/git/how-to-automate-git-ignore.png
  alt: How to create gitignore file
date: 2020-09-23T17:31:47.672Z
author: gary-woodfine
tags:
  - git
  - github
  - linux
categories:
  - software-development
---
In [How to create git ignore files](https://geekiam.io/how-to-create-git-ignore-files/) we discussed details regarding 
git ignore files like why and how they are used and creating them.  We also explored how we can make use of common 
`.gitignore` templates on Github to create project specific git ignore files.

In the example, provided we made use of a Curl command to make a web call to [Github gitignore template collection](https://github.com/github/gitignore)) 
and download file and rename it to `.gitignore` in our project directory

```shell
curl -o .gitignore  https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore
```

This command is a great time-saver and does the job well. The downside is that its not easy to remember due to the fact 
there is a long Url string to commit to memory etc.  Therefore, I thought I would share a little trick I use to create 
an easy to use command, using the power of Linux and the shell.

I have previously discussed [What is the terminal window](https://geekiam.io/what-is-a-terminal-window/) and [How to use
the terminal window on Ubuntu Linux](https://geekiam.io/how-to-use-the-linux-terminal-window-on-ubuntu/) providing 
details as to why it is such a popular tool for developers.  We'll build on all the knowledge gained in this posts to 
extend functionality to reuse.

### Create common bash function file

The first step we'll undertake is to create a new text-based file in our Home directory which we will name `.bash_functions`

```shell
touch ~/.bash_functions
```

The purpose of this file is basically to be a common file to store common functions and utilities we want to create. You
can name this file whichever you choose, personally I prefer to call it `.bash_functions` because it suits a naming 
convention already present in our home directory, which we can see if we do `ls -a $HOME` to display all the hidden files
in our home directory we'll see a few `.bash_**` files, these files all have a specific purposes which we'll learn more about
 shortly.

![Git log ](/uploads/bash-conventions.png "Home directory bash files")

If we open the newly created `.bash_functions` file in our prefered text editor, in my case I am simply going to use `nano`

```shell
nano .bash_functions
```

We add the following code to the file, which will essentially create a function by the name of `gitignore`, again you can 
call it whatever you want I just prefer to name it according to the action it is going to preform.

```shell
gitignore() {
 curl -o .gitignore  https://raw.githubusercontent.com/github/gitignore/master/"$1".gitignore
}
```

You'll notice we have just inserted the curl request we used earlier, however we have just included the use of the first 
parameter that is passed into the function `"$1"` which will be the name of the programming language we want to create 
git ignore file for your programming language name.

We're going to keep the function really simple at this point, and just focus on the happy path.  This function will be
isolated to your user account, therefore you can modify it as much as you like later.

Now we have the function is in place, we'll want to just edit our `.bashrc` file to make it aware of it's existence and 
load it up if it exists.  

### What is bashrc?

`.bashrc` is a shell script that runs Bash whenever it is started interactively, to initiate an interactive session. 
It provides the ability to add any regular commands or functions that you use when using your [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window").

The `.bashrc` is called whenever a new terminal session is started, and loads up your preferences at each launch.

The `.bashrc` can be found in each users Home directory and used to load terminal preferences and environment 
variables.

### How to edit your .bashrc?

You can edit your `.bashrc` using any text editor, in my case I will make use of `nano` , so to edit the file we 
open it is follows.

```shell
nano ~/.bashrc
```

Once the file is open we need to add additional lines of code, to load our `.bash_functions` file if it exists. You'll
notice in the file, by default there are already lines which load the `.bash_aliases` file, so we will effectively 
replicate this and include our new file.

```shell
...... 
# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# Our user specific bash functions
if [ -f ~/.bash_functions ]; then
      . ~/.bash_functions
fi
.....
```

Once you have completed adding the code save and exit the file.  

We'll now create an Alias in our `.bash_aliases` file which we'll use to call our function. We can provide whichever 
easy to remember name we want, in my case for the sake of brevity and hopefully defining exactly what it does, I am just
going to call it `gitignore`.  To do this, we can simply open our `.bash_aliases` file in your preferred text editor, 
again in my case I'll make use of `nano`.

```shell
nano ~/.bash_aliases
```

Once the file is open, we can add our alias as follows

```shell
alias gitignore='gitignore'
```

Save and exit the file.  We now just need to refresh our current terminal session to bring in our updates.

```shell
# We can refresh our terminal window with either command
source ~/.bashrc
# or
. ~/.bashrc
```

Once we're finished, we can now use our new command.  If we create a new project folder and in this 
instance I will be creating a new nodejs project.

```shell
# Create Project directory
mkdir funky-project
# change directory to funky-project
cd funky-project
# initialise project
npm init
#initialise git
git init 
# Call our method to create a our git ignore file
# note the case sensitive name all the files listed in the repo
# have case sensitive names.
gitignore Node
# add Read me file
touch README.md
# add files to git
git add .
# commit files
git commit -m "Created new project"
# Create our report repository on Git hub (https://geekiam.io/how-to-create-a-new-github-repository-using-the-terminal/)
gh repo create threenine/funky-project 
# push to repo
git push
```

If we inspect the `.gitignore` in the root of the project folder we'll now see that it is now configured with typical 
node based project settings.

### Conclusion

We have now automated the creation of git ignore files to enable creating the files. This approach enables you to 
customise this process even further, for instance you may want to create your own organisational repository, which may have typical settings and for a custom project structure you would like to cater for.

Taken this approach we have eliminated some of the boring repetitive and error prone manual steps required when setting up a project.