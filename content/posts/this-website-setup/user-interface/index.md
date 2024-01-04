+++
title = 'Making website using Hugo'
date = 2024-01-02T23:03:11-08:00
lastmod = 2024-01-02
description = 'Creating '
tags = ["website", "ui", "hugo"]
showDateUpdated = true
draft = false
+++

This article will explain how to use hugo to create your own website with awesome templates.

## Installing Hugo and initial setup

Now that you have your wesbite server up and running with a webpage, lets make the website awesome.


### Resources and steps to setup your website.

- Install [Hugo](https://gohugo.io/installation/)
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (if you don't have it installed.)
- Install [Powershell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows) if you are a windows user.
    - NOTE: PowerShell and Windows PowerShell are different applications.
- Run command `hugo version` on Powershell terminal to confirm that hugo is working.

**Alternative 1: Using this website git repository as base**

I will only recommend this if you are new all commands and stuff. If you know a bit about it checkout alterative 2 below.
- Fork my repo from git: https://github.com/xcepti0n/vaibhavbhatia.net/
- Choose name of your repo to your domain or something of your liking.
- Use `git clone <your-repository-link.git>` to clone your repository locally.
- Change your current directory `cd <your-repo-name>`
- Run `git pull --recurse-submodules` to pull congo submodule.
- Run `hugo server` to start the server.
- Checkout website on `localhost:1313`. (Also logged in output of above command).
- Make changes locally and it should be reflected in the webpage instantly.
- Checkout [congo guide](https://jpanther.github.io/congo/docs/getting-started/) to know what each configuration does and how things are managed.
- All config files are in *config/_defaults* folder for you to tinker with.

**Alternative 2: Using Hugo guide**
- Follow the quick start guide to setup initial package: https://gohugo.io/getting-started/quick-start/
- To use `congo` theme, follow https://jpanther.github.io/congo/docs/installation/, it has easy setup guide, including what needs to be done on Hugo.

For other themes checkout [Hugo Themes](https://themes.gohugo.io/)

### Syncing the updated pages to your server.

There are multiple way to do it. Lets see what I did, and then discuss the alternatives.

#### What I did for syncing website to server
1. Ran command `hugo` locally to generate static website in dev environment. (i.e. my machine).
2. Used git to commit the public folder as well which contains the static generated website.
3. Installed git on server using `sudo apt-get install git-all`. For other OS checkout https://github.com/git-guides/install-git
4. Ran command `git clone <my-repo-link>.git` to clone the repo on the server.
5. Copy the contents on `public` folder to the path where nginx is referring from, using `cp -r ./public/ /var/www/<your folder>/`
6. Restart nginx - `systemctl restart nginx`.
7. Checkout your webpage and see the updated website.

**FAQ**

*Q: Why did you not installed hugo locally on server and generate website on server itself?*
- I did this first but, it was causing issues to generate HTML files, due to some layout folder issue. I choose to do the above, to avoid spending time on debugging (I am lazy sometimes).


#### Other options on upload website to server (other than git)
These are other options to upload your website to your server but are not recommended as are not scalable.
1. Create basic python server locally and host your folder which has the website. Use curl or Wget to download the folder on the server if you have local server.
2. Use flash drive to transfer website..
3. Use google drive and open the folder to public, and use its link to download on your server.

**Recommended if you are using static website host providers like *AWS S3***
1. If you are using *AWS S3* to host your static website, viola. Just upload your website and done.


#### Automating the sync
I have not automated it yet, as I haven't got the time to do it but if you want to do it, here are the steps.

1. Write a basic bash script to do: (psuedo code below)
```
    `git fetch`: Fetches the new commit if there is one.

    // Check if there are new commits to be pulled.
    // Can be done by substring matching on `git fetch` output,
    // or explore git to see if there are other alterative
    If new commit: 
        // Pull the commit
        run `git pull --rebase`
        // Copy the static website tonginx  server preferred location.
        cp -r ./public/ /var/www/<yourfolder>/
        // Restart server
        systemctl restart nginx
    Else:
        Do nothing
```
2. Make the cron job from this bash script to run once a day or as per your need and you are good to go.

I have not setup the script yet, as I prefer to do it manually as I am already running commands to push the changes to git. (I agree I am lazy...)



### Learnings and resources
1. Powershell and Windows Powershell are different (Whaattt? - exactly my reaction)
    Install here - https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4
    Take - Powershell is way better than windows powershell.
2. Installing hugo on windows: https://gohugo.io/installation/windows/
    I used chocolatey: https://gohugo.io/installation/windows/#chocolatey

3. Markdown is used throughout Hugo to create your website so here is the [basic syntax](https://www.markdownguide.org/basic-syntax/) on how to use it.

4. Hugo generated static website does not work properly (HTML was not being generated) if you just open the file without the server.
    Solution: https://discourse.gohugo.io/t/site-looks-fine-on-localhost-and-github-pages-but-not-when-rendering-to-public/35825/2
    
    or just commit your public folder as well, just like I did.


*I hope it helped, thanks for reading!*



