+++
title = 'Server and Certificates'
date = 2024-01-02T23:04:05-08:00
lastmod = 2024-01-02
description = 'Nginx server with https.'
tags = ["server", "nginx", "https", "cloudflare"]
showDateUpdated = true
draft = true
+++

This article explains how to host a plain website using nginx server on https locally.

## Setting up plain index.html on https locally.

#### Setting up nginx server.

#### Creating certificates

As I have hosted on cloudflare, I created certificates on cloudflare. You can either use your domain provider or use LetsEncrypt for creating self signed certificates.

Via cloudflare: Go to Client certificates and create a new one.

Download the public certificate and private key.

#### Updating nginx to https

Updating nginx configuration to ssl and read the certificate and key.


Check the port on which 
