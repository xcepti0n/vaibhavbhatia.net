+++
title = 'Host your website using Cloudflare tunnel'
date = 2024-01-02T23:04:02-08:00
lastmod = 2024-01-02
description = 'This articcle with explain step by step on how to host your website via cloudflare tunnel.'
tags = ["hosting", "https", "cloudflare", "cloudflare tunnel", "cloudflared"]
showDateUpdated = true
draft = false
+++

This article explains how to host a website publically using cloudflare tunnel, that is running on localhost.

<!-- more -->
## Hosting on Cloudflare

I am assuming you have already setup the cloudflare account with your domain.

### Creating a tunnel

Lets create a cloudflared tunnel.

#### References: 
- Creating tunnel: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/
- Creating tunnel using dashboard (managed-remotely): https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/

You should follow above guides as they are kept up to date by Cloudflare, mine can be old depending on when you checking it.


#### Steps to create a cloudflared tunnel:

1. Go to [Zero Trust](https://one.dash.cloudflare.com/)
2. Select your account.
3. Go to *Access* > *Tunnels*.
4. Click on *[+ Create a tunnel]*.
5. Write the name of the tunnel. Don't worry about name, you can rename it afterwards.
6. Click on **Save tunnel**.
7. You will be now in **Install and run Connectors** section.
8. Choose your Operating system.
9. Copy the commands provided on dashboard and run it on your server.
10. Now cloudflared should be running locally. (Confirm using systemctl status cloudflared)
11. It should also show on the dashboard that you have a connector connected.

 > Now you have tunnel running but it does not know which ip or port to forward the tunnel request to and when to forward.

12. On dashboard now you will be on *Public Hostnames* section, which means the traffic routed from publuc domain to your tunnel.
13. Under **Add public Domain for *<Tunnel Name>* you will see below sections. (Fill unless optional)
    1. Subdomain - Fill `www` or subdomain of your website for which which you want the traffic to be routed.
    2. Domain - Choose your domain from the drop down menu.
    3. Path (optional) - you can leave it blank.
    4. Type - Choose https, as we have hosted our server locally on https.
    5. URL - You can write *localhost:<port>* if your cloudflare is running on the same server. Or write the local IP address of your server Eg. 192.168.0.121 (you can skip if it is on default port like 443 for https.)

Checkout your website with subdomain (eg www): *https://<subdomain>.<your-domain>.com*

Congratulations! Now you have cloudflare tunnel up and running and your website is public.
        







