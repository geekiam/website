---
title: Advanced git configuration options
description: Learn more about advanced fit configuration options to configure your git environment to manage your content and interactions
summary: In this tutorial we'll guide you through the process on how to configure git and explore different options available
keywords:
  - git
  - how to configure git
  - advanced git config
feature:
  image: /uploads/posts/git/git-tutorials.jpg
  alt: Advanced git configuration options
cardImage:
  image: /uploads/twitter/git/advanced-git-configuration-options.jpg
  alt: Advanced git configuration options
date: 2020-10-01T17:31:47.672Z
author: gary-woodfine
tags:
  - git
  - linux
  - tutorial
categories:
  - software-development
---

In [How To Install Git On Linux](https://geekiam.io/how-to-install-git-on-linux/ "How To Install Git On Linux | Geek.I.Am")  we learned how to install 
Git and complete some basic configuration. In this post we'll  expand on this knowledge gained and add some further 
configuration and look at some key required items and significant optional items. 


### Understanding git commands

[How To Install Git On Linux](https://geekiam.io/how-to-install-git-on-linux/ "How To Install Git On Linux | Geek.I.Am") we already started using some git commands using the [terminal window command line](https://geekiam.io/how-to-use-the-linux-terminal-window-on-ubuntu/ "How To Use The Linux Terminal Window On Ubuntu | Geek.I.Am").
We'll continue using [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is a terminal window") and the command line to learn git and all the associated commands. The reason for this is that learning Git command line is the most universally applicable method to use the tool.

The general format of a Git command is as follows:

```shell script
git <git-options> <command> <command-options> <operands> 
```

| Element               | Description            | Example      |
| :-------------------- | :--------------------: | :-----------:|
|  `git`                | Execute git application       | `git`        |
| `<git-options>`       | global options to specify function to execute  | `git --version` |
| `<command>`             | command to execute | `git add` |
| `<command-options>`     | specified command options | `git commit -m "some comment"` | 
| `<operands>`            | Items for command operation | `git add *.js` |

 ### Understanding the difference between Plumbing and Porcelain
 
 The [Pro Git book, Second Edition](https://amzn.to/308IsHT "Pro Git 2nd Edition") has a great chapter on explaining 
 the different commands available in Git and the reasoning behind naming convention used in the categorisation. I won't
 dwell too deeply on this, and recommend reading that chapter and even buying the book as desktop companion as you 
 continue to explore and work with Git.
 
 >Git was initially a toolkit for a version control system rather than a full user-friendly VCS, it has a number of 
>subcommands that do low-level work and were designed to be chained together UNIX-style or called from scripts. These 
>commands are generally referred to as Git’s **plumbing** commands, while the more user-friendly commands are 
>called **porcelain** commands.
>
> [Pro Git book, Second Edition](https://amzn.to/308IsHT "Pro Git 2nd Edition")
>

The origin of *Porcelain & Plumbing commands* comes from [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds "Linus Torvalds | Wikipedia") and the metaphor translates to 
directly to you toilet.  In that everybody knows how to use the toilet, and for 90% of our interactions with the toilet, we will never have to know
exactly how it works or what actually happens, for the most part most users don't care. We use the toilet *(Porcelain)* to do what we 
need to do, flush and move on.   Only very occassionally do we have to deal with and issue, like a blockage, burst pipe or some other
issue, and only then do we need some advanced knowledge or do some maintenance task *(Plumbing)* .

In git the commands are divided up into the two categories:
* **Porcelain** - High Level tasks an average user will be most interested in, the  most common operations.
* **Plumbing** - Low level tasks administrators need to use for more advanced use cases and maintenance. 

#### Git Porcelain Commands
Porcelain commands aggregate functionality of plumbing commands and certain options and sequences to make things simpler.
For most software developers, make use of just Porcelain commands they will accomplish the tasks they need too.

| Command | Purpose |
|:-----------:|:-----------:|
| `add` | add file contents to the index|
| `bisect` | Find by binary search the change that introduced a bug |
| `branch` | List, create or delete branches |
| `checkout` | Switch branches or restore working tree files. |
| `cherry` | Find commits yet to be applied to upstream |
| `cherry-pick` | Apply the changes introduced by some existing commits |
| `clone` | clone a repository into a new repository |
| `commit` | Record changes to the repository |
| `config` | Get and set repository or global options |
| `diff` | Show changes between commits, commits and working tree etc. |
| `fetch` | Download objects and refs from another repository |
| `grep` | Print lines matching a pattern |
| `help` | Display help information |
| `log` | Show commit logs |
| `merge` | Join two or more development histories together |
| `mv` | Move or rename a file, directory or symlink |
| `pull` | Fetch from, or integrate with another repository or local branch |
| `push` | Update remote refs along with associated objects |
| `rebase` | Forward-port local commits to the updated upstream head. |
| `rerere` | Reuse recorded resolution for merged conflicts. |
| `reset` | Reset current `HEAD` to the specified state |
| `revert` | Revert some existing commits |
| `rm` | Remove files form the working tree and from the index|
| `show` | Show various types of objects |
| `status` | Show various types of objects |
| `submodule` | Initialise, update or inspect submodules |
| `subtree` | Merge subtrees and split repositories into subtrees |
| `tag` | Create, list, delete or verify a tagged object |
| `worktree` | Manage multiple working trees |

#### Git Plumbing Commands
 
  Git Plumbing commands have names that indicate an action and an object to operate against as opposed to the simpler 
  naming of the porcelain commands.
  
| Command | Purpose |
|:-----------:|:-----------:|
| `cat-file` | Provide content or type and size information for repository objects.|
| `commit-tree` | Create a new commit object. |
| `count-objects` | Count an unpacked number of objects and their disk consumption. |
| `diff-index` | Compare a tree to the working tree or index.|
| `for-each-ref` | Output information on each ref. |
| `hash-object` | Compute object ID and optionally create a blob from a file. |
| `Is-files` | Show information about files in the index and working tree |
| `merge-base` | Find as good common ancestors as possible for a merge |
| `read-tree` | Read tree information into the index |
| `rev-list` | List commit objects in reverse chronological order |
| `rev-parse` | Pick out and massage parameters. |
| `show-ref` | List references in a local repository |
| `symbolic-ref` | Read, modify , delete symbolic refs |
| `update-index` | Register file contents int the working tree to the index |
| `update-ref` | Update the object name stored in a ref safely |
| `verify-pack` | Validate packed Git Archive files |
| `write-tree` | Create a tree object for the current index |

### Specifying Arguments

Git commands can be supplied arguments, to provide additional information and data for the command to act upon. The arguments
can either be full words or abbreviations. It is important to take note that there is a difference in the number of hyphens to be 
supplied when using either abbreviations or full words.  i.e. when using abbreviations a single hyphen `-` is required but when using
full words a double hyphen `--` is required.

```shell script
# using the delete argument with abbreviation on branch command 
git branch -D feature/somebranch

# using the full word
git branch --delete feature/somebranch
```

Abbreviated arguments may be passed in together, as in -am instead of -a -m. When arguments are combined in this way, 
the ordering is important. If the first argument requires a value, then the second argument may be taken as the required
 value instead of an additional argument.
 
 ```shell script
# Using the following two git abbreviations on the with the git commit command
# is essentially saying "Git Commit All Changed Files with the following message"
git commit -am "Some commit message"

```

### Autocomplete
 
Git has a helpful auto-completion feature that will enable developers to do two things:
* Provide valid values for the commands or arguments —if there is more than one valid option.
* Automatically complete the command or argument — if there is only one valid option.

Ironically, this feature is enabled by default for Windows users. However, for Most Linux and Mac users it is not enabled
by default.  

This will be the first part of advanced configuration we should when setting up our Git environment to work with.

#### How to enable Git Autocomplete on Linux

Autocompletion in Git enables you to hit TAB and a git command will be autocompleted for you. If there are multiple 
commands that match what you typed so far, you can hit Tab two times, and Bash displays a list of all possible 
completions. The same works for variables and filenames, but not for the many commands Git provides.

The contained completion routines provide support for completing:

 * local and remote branch names
 * local and remote tag names
 * .git/remotes file names
 * git `subcommands`
 * git email aliases for git-send-email
 * tree paths within `ref:path/to/file` expressions
 * file paths within current working directory and index
 * common `--long-options`

The first thing we need to do is download the autocomplete file from the [Git - Github repository](https://github.com/git/git "Git on Gtihub")
we'll do this using [cURL](https://geekiam.io/what-is-c-url). We're going to download this file to our $HOME directory and name it `.git_autocomplete`
we'll do this all in one lines://s

```shell script
curl -o .git_autocomplete https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
```
Once the download is complete we need to edit out `.bashrc` file, which we can do using any text editor, in my case I'll use `nano`
```shell script
nano ~/.bashrc
```

We need to add some additional lines to check if our new file exists load it up so we can use the commands contained in our session.
So somewhere in `.bashrc` find a place to add the code below. I usually create a section in my `.bashrc` where I have all these file loads

```shell script
if [ -f ~/.git_autocomplete ]; then
   . ~/.git_autocomplete
fi
```

Once you save and exit the file, we can just reload our `.bashrc` in our current terminal by using `. ~/.bashrc` or closing the terminal
and opening a new one.

The autocomplete now enables you to easily explore git commands and their options. For instance when we want to explore 
what options we can set when configuring the Global git options, we can enter `git config --global user. ` and TAB TAB and be presented
with the list of available options we can set.
   
![Git config autocomplete ](/uploads/git-config-autocomplete.png "Git Autocomplete")

The autocomplete functionality enables you to explore any commands and available options just by using the TAB TAB combination. Later,
it will also enable you to search and list all available branches. Taking the time to configure this functionality pays for itself
once you start using git on the command line.
<iframe id="lbry-iframe" width="560" height="315" src="https://lbry.tv/$/embed/How-to-configure-git-autocomplete-on-Linux/b47e5db1e7144cdffcacef5ad29a9d4a47dd694e" allowfullscreen></iframe>

### Configuring your user details

In [How to install git on Linux](https://geekiam.io/how-to-install-git-on-linux/ "How to install Git on Linux") we touched on how
to configure global username and email and where git stores these configuration values. Git expects these two values to be set,
regardless of which interface or version of Git you use, because Git is a *source management system* , and its primary purpose
is to track changes by users over time, it wants to know who is making those changes so that it can record them.

If you don't specify these values, then Git will interpolate them from the signed-on userid and machine name. Chances are 
this is not what you want to have the system ultimately use. If you forget to set these values initially on a new system, 
and commits are recorded with the interpolated values, there is a way to go back and correct this information, 
using the `commit` command with the `--amend` and `--reset-author` options.

These values can be set making use of the `git config` command

```shell script
git config --global user.name "Your Name"
git config --global user.email "email@domain.com"
```

### Configuration Scope

The **global** option is a way of telling Git how broadly this configuration setting should be used—which repositories 
it should apply to.

The Git model has been designed for many, smaller repositories instead of fewer, monolithic ones. Therefore users may normally
 be working with multiple repositories, it would be inconvenient and subject to error to have to configure the same 
 settings in each repository. As a result, Git provides options to simplify choosing the scope for configuration values. 
 
 There are three levels available for configuration: 
 * System
 * Global
 * Local
  
 #### System
 
 Configuration value applies to all repositories on a given system unless it's overridden at a lower level. 
 These settings apply regardless of the particular user.
 
 **System-wide configurations** Configuration at this level affects every user and every user's repository.

#### Global 
 Configuration values apply to all repositories for a particular user, unless overridden at the local level. 
 Unless you need repository-specific settings, this is the most common level for users to work with because it saves 
 the effort of having to set values for each repository. 
 
 **User-wide configurations** configuration at this level affects every user's repository.
 
 #### Local
 Configuration value at the local level apply to the context of a repository.  This can be useful in cases where you 
 need to specify unique settings that are particular to one repository. It can also be useful if you need to temporarily
 override a higher-level setting.
 
 **repository only configurations**  configuration at this level, only the repository.

![Git configuration scopes ](/uploads/git-configuration.png "Git configuration scopes")


### Typo auto correction

If you're going to be using Git on the command line and if your typing is as awful and inaccurate as mine, then you'll
no doubt benefit from Git's embedded *autocorrection* but you will have to enable it!

To do this we need to modify the `help.autocorrection` property to define how many tenths of a second Git will wait before
running the assumed command.

```shell script
git config --global help.autocorrect 10
```

### Conclusion
We have outlined the common advanced Git configuration settings that will make your life easier using Git on the command line.

It is important to remember to always be careful editing the Git config files, because if you incorrectly edit any 
of these files, you just might ruin your entire Linux Git configuration.


