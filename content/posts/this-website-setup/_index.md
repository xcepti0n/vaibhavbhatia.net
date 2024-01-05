+++
title = 'Create and host your own website using nginx, cloudflare and Hugo'
date = 2024-01-02T23:04:02-08:00
groupByYear = false
+++

Here is a step by step guide to help you create and host your own first website.

### To host your own website you will need
-  A **domain** : (eg - \<your name\>.com), if you want to host publically.
    - If you don't have it already you can get one by following this [guide](https://developers.cloudflare.com/registrar/get-started/register-domain/). 
    - Cloudflare is one of the domain providers, you can choose any other of your favorite domain providers.
- A **server**: It can be a docker container on your own Laptop, a mini PC running proxmox, a server running on linode or any other server providers.
    - You can use Debian, Ubuntu or any other OS of your choice. (Articles below considers you have Debian 12)

I hope you learn something new as you go through the articles. I definitely did, when I started the process of setting up this website.

**Here is the order I went throgh for this website:**

*Setup HTTPS server using NGINX* -> *Host your website using Cloudflare tunnel* -> *Make an awesome website using Hugo*

Feel free to choose the order as per your liking. Happy Reading!