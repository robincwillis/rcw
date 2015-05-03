---
layout: post
title: "Deploy using GIT Post Receive Hooks"
tags: git deploy post-receive
published: true
description: How the cool kids deploy static sites.
---

There is an interesting aspect of coding where laziness is the mother of invention. When it comes to deploying code, this couldn't be more true for me. My main priority is to just make it to happen and work with the most minimal effort on my part.

I am primarily a front end developer and often create sites without any server side code, which means there is nothing to run or compile when deploying. However, manually copying those files over ftp or scp or something is a pain in the ass and not very efficient. I am already using git to push my code to a remote repository and have found that in these cases it is my favorite solution to deploy apps live as well.

This post walks you through how to use a Post Receive Hook in git to deploy code on a remote server like ec2 using the command ```git push deploy [branch]``` much like Heroku or other cloud application platforms let you deploy.

<!--more-->

####Server Setup


Log into your remote server and create a bare git repository.

~~~~~
> mkdir project.git && cd project.git
> git init --bare
~~~~~

then cd into the ```hooks``` directory. We will create a post-receive hook which is a  script that will run after this repository receives a push.

~~~~~
> cd .git/hooks
> touch post-receive
~~~~~

Now open that file with Vim or Nanao or something and add this code.

~~~~~bash

!#/bin/bash

echo "Running Post Receive Hook"

GIT_REPO=$HOME/project.git
TMP_GIT_CLONE=$HOME/tmp/project
PUBLIC_WWW=$HOME/public/project

git clone $GIT_REPO $TMP_GIT_CLONE
cp -r $TMP_GIT_CLONE/. $PUBLIC_WWW/
rm -rf $TMP_GIT_CLONE
exit

~~~~~

This will make a temporary clone of this git repository then copy the files from that clone to your whatever directory you want to serve those files from. Note, you should change the directories to fit your own setup.

Save the file and make it executable.

~~~~~
> chmod +x post-receive
~~~~~

####back in your local repository

We are going to add the repository we just created on our remote server as a destination to push changes to.

~~~~~
> git remote add deploy ssh://user@mydomain.com/path/to/repo/site.git
~~~~~

Now whenever we want to deploy our changes to that server you just have to run

~~~~~
> git push deploy master
~~~~~

You should see the post receive hook run and then you can see your live deployed site at whatever url is mapped to the directory that the post receive hook copied your files to.

http://mydomain.com/project

Now deploying is just a command away, and you can get back to spending more time actually coding.