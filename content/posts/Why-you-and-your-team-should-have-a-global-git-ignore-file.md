---
title: Why you and your team should have a global git ignore file
description: A git ignore file allows you to exclude files from your git
  commits. Learn how to easily automate the creation of .gitignore files.
summary: A git ignore file allows you to exclude files from your git commits.
  Learn how to easily automate the creation of .gitignore files.
keywords:
  - Setting up a global .gitignore file
  - how to create a local gitignore file
  - are global gitignore files necessary
  - how to configure a global gitignore file
feature:
  image: /uploads/posts/git/git-tutorials.svg
  alt: how to configure a global gitignore file
cardImage:
  image: /uploads/twitter/git/how-to-automate-git-ignore.jpg
  alt: how to configure a global gitignore file
date: 2020-09-23T17:31:47.672Z
author: garywoodfine
tags:
  - git
  - github
  - linux
  - tutorial
categories:
  - software-development
---

One of the most common Git configuration tasks that developers often miss is the Global Git ignore configuration.

We have previously discussed useful options you may choose to configure in [Advanced Git Configuration Options](https://geekiam.io/advanced-git-configuration-options/ "Advanced Git Configuration Options | Geek.I.Am")
and even [How To Automate Creating Gitignore Files](https://geekiam.io/how-to-automate-creating-gitignore-files/ "How To Automate Creating Gitignore Files | Geek.I.Am").

Git ignore files are a great way of ensuring that certain files or files of a particular type do not get included in
your local repository when making commits.  For instance, you may not want to commit compiled code, or system logs, or 
config files. To ignore files, you can specify which ones you want to ignore in `.gitignore`.

Often Operating Systems and even Integrated Development Environments (IDE) may also generate files, often hidden files
that shouldn't be included in repositories. 

On the n the Apple macOS operating system, `.DS_Store` is a file that stores custom attributes of its containing folder, 
such as the position of icons or the choice of a background image.  Microsoft Windows has a similar folder `thumbs.db`
containing the small images displayed when you view a folder in Thumbnail view (as opposed to Tile, Icon, List, or 
Detail view).

These files should never be included in your version control project, and often you'll find entries in project based
`.gitignore` files which to ensure that these files are not included.

```shell
.DS_Store
Thumbs.db

```

The problem with this approach, is that project `.gitignore` files are not necessarily the best place to configure 
these settings. Especially considering the Multitude of different Operating Systems, IDE's and system configuration 
that can be found across any development team, especially teams collaborating on open source software projects.

These days it is highly likely, you will find yourself on a project team, where no two developers will be using the same
tools. So potentially your project `.gitignore` file will become polluted on unmanageable by attempting to cater for
all eventualities. This configuration will have to be repeated across all project repositories you and your team work 
with.

Fortunately, Git has a solution for this very problem, the Global Git Ignore file or the `core.excludesfile`.

Using the `core.excludesfile` you can ignore certain files *for all repositories* that you work with. Enabling you to
 a kind of global .gitignore file.

### how to configure a global gitignore file

To create a global exclude file, simply create a `.gitignore` in your Home directory, and add your gitignore settings.

```shell

# Apple system
.DS_Store
.vscode

### Windows
Thumbs.db

### global gitignore for vmd developers to use

## Linux 
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

```
Once you have finished adding your rules. You can simply configure git to use them in your global configuration.

```shell
## On Linux or MAc OS 
git config --global core.excludesfile ~/.gitignore

## On Windows
git config --global core.excludesfile %USERPROFILE%\.gitignore
```

Git will now ensure that these types of files are never included in any of your repositories.

### Why teams should have a common file

Software teams and software developers will more than likely be working on more than one software project and will 
have multiple source code repositories.  Trying to remember to edit and copy your personal settings to each 
repository, is impractical and error prone. 

Its far simpler to do this once and simply forget about it!  Nobody knows your configuration settings like yourself
or your team! 

Personally, I develop mostly on Linux and I make heavy use of most Jetbrains Products and IDE's so my preference is to
exclude the LInux OS files and Jetbrains IDE settings files from my repositories.  I have my local `.gitignore` file
configured as below, ensuring all these files are never included in repositories.

```shell
### global gitignore for vmd developers to use

## Linux 
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*



################### Jetbrains specific
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser
```

### Conclusion

Taking the five minutes to configure your local git configuration can save you and your team a load of time and
drastically reduce the complexity of your project .gitignore files. 
