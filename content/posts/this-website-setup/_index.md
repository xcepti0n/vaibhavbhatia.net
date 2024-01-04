+++
title = 'Create and host your own website using nginx, cloudflare and Hugo'
date = 2024-01-02T23:04:02-08:00
groupByYear = false
+++

Here is a step by step guide to help you create and host your own first website.

#### To host your own website you will need
-  A *domain* (eg - \<your name\>.com), if you want to host publically.
    If you don't have it already you can get one by following this [guide](https://developers.cloudflare.com/registrar/get-started/register-domain/). Cloudflare is one of Domain pprovider, you can choose your favorite domain provider.
- A server - It can be a docker container on your own Laptop, a mini PC running proxmox or a server running on linode or any other server providers..
    You can use Debian, Ubuntu or any other OS of your choice. (Articles below considers you have Debian 12)

You will learn as you go through the articles, as I did when I followed the process of setting up this website.

**It is recommended to follow this order if you have no initial setup**

*Setup HTTPS server using NGINX* -> *Host your website using Cloudflare tunnel* -> *Make website using Hugo*

You will be setting up server and https, before creating your website this way. 

You can choose your order as per your liking.