+++
title = 'Setup HTTPS server using NGINX'
date = 2024-01-02T23:04:05-08:00
lastmod = 2024-01-02
description = 'Setup HTTPS server using NGINX.'
tags = ["server", "nginx", "https", "cloudflare"]
showDateUpdated = true
draft = false
+++

This article explains how to host a plain website using nginx server on https locally on Debian 12.

## Setting up plain index.html on https locally.

We will be using nginx server in this article, for locally hosting a simple webpage.

#### Setting up nginx server.
 Below are Debian commands, if you are using other OS or BSD, check official installaton link: https://www.nginx.com/resources/wiki/start/topics/tutorials/install/

- Update apt package indexes : `sudo apt update`
- Install nginx : `sudo apt install nginx -y`
- Confirm that nginx is running using `systemctl status nginx`
- Checkout the server at `http://<your-server-ip>`


#### Hosting custom index.html locallly
In this step we will change the default page to a custom index.html.

- Disable default configuration `unlink /etc/nginx/sites-enabled/default`
- Create a new configuration `vi /etc/nginx/sites-available/<your-domain.com>`. You can use any name but using a domain name is preferred as it is easy to remember and also tells what the configuration is for.
- Paste the below configuration with updated domain name.
    ```
        server {
            listen 80;
            listen [::]:80;
            server_name  your_domain.com;

            root /var/www/your_domain.com;
            index index.html;

            location / {
                try_files $uri $uri/ =404;
            }
        }
    ```
- Enable your configuration `ln -s /etc/nginx/sites-available/<your-domain.com> /etc/nginx/sites-enabled/`
- As you might have guessed all sites configuration are available here `/etc/nginx/sites-available/` and when one wants to enable, their sym links can be added here:`/etc/nginx/sites-enabled/`
- Check the configuration if its valid `nginx -t`
- Restart ngninx to use the updated configuration `systemctl restart nginx`

Now lets add index.html file in the right path (check root path in above configuration).

- Create the directory: `mkdir /var/www/your_domain.com`
- Create new index.html: `vi /var/www/example.com/index.html`
- Check your localhost, your *index.html* are now being shown.


#### Creating certificates

As I have hosted on cloudflare, I created certificates on cloudflare. You can either use your domain provider or use LetsEncrypt for creating self signed certificates.

- Create folder for storing certificate and key `mkdir /etc/nginx/certs/<your-domain.com>`

**Using cloudflare**
1. Open cloudflare [dashboard](dash.cloudflare.com)
2. Click on your domain.
3. Go to *SSL/TLS* > *Client certificates*.
4. Click on *Create Certificate*
5. Keep default values and click *Create* button.
6. Copy the certificate and paste to file `vi /etc/nginx/certs/<your-domain.com>/certificate.pem`
7. Copy the private key and paste to file `vi /etc/nginx/certs/<your-domain.com>/key.pem`
8. Click *OK* on cloudlfare dashboard to go back to *Client Certificate*, you should be able to confirm on dashboard that a new Certificate is now being shown as *ACTIVE*

Lets modify the configuration file to use these certificates.
9. Open the configuration file `vi /etc/nginx/sites-enabled/<your-domain.com>`
10. Update the configuration to look like this
    ```
            server {
                listen 443 ssl http2;
                listen [::]:443 ssl http2;
                server_name  <your-domain.com>;
                ssl_certificate certs/<your-domain.com>/certificate.pem;
                ssl_certificate_key certs/<your-domain.com>/key.pem;

                ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
                ssl_ciphers         HIGH:!aNULL:!MD5;

                root /var/www/<your-domain.com>;
                index index.html;

                location / {
                    try_files $uri $uri/ =404;
                }
            }
    ```
11. Restart the nginx server `systemctl restart nginx`
12. Now your webpage will be up and running on https:://<server-ip>


## Resources:

https://nginx.org/en/docs/beginners_guide.html
https://utho.com/docs/tutorial/how-to-install-nginx-web-server-on-debian-12/
https://nginx.org/en/docs/http/configuring_https_servers.html

