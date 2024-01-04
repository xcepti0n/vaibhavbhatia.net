+++
title = 'Hosting'
date = 2024-01-02T23:04:02-08:00
lastmod = 2024-01-02
description = 'We will be understanding how to host your website via cloudflare tunnel.'
tags = ["hosting", "https", "cloudflare", "cloudflare tunnel", "cloudflared"]
showDateUpdated = true
draft = false
+++

This article tells about how to host a website publically using cloudflare tunnel, that is running on localhost.

<!-- more -->
## Hosting on Cloudflare

I am assuming you have already setup the cloudflare account with your domain.

### Creating a tunnel

Lets create a cloudflared tunnel.

References: 
Creating tunnel: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/
Creating tunnel using dashboard (managed-remotely): https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/


> You should follow above guides as they are kept up to date by Cloudflare, mine can be old depending on when you checking it.


Steps to create a cloudflared tunnel:

1. Go to [Zero Trust](https://one.dash.cloudflare.com/)
2. Select your account.
3. Go to *Access* > *Tunnels*.
4. Click on *[+ Create a tunnel]*.
5. Write the name of the tunnel. Don't worry about name, you can rename it afterwards.
6. Click on **Save tunnel**.
7. You will be now in **Install and run Connectors** section.
8. Choose your Operating system.
9. Run the command provided where your server is hosted.
10. Now cloudflared should be running locally. (Confirm using systemctl status cloudflared)
11. It should also show on the dashboard that you have a connector connected.

 > Now you have tunnel running but it does not know which ip or port to forward the tunnel request to and when to forward.

 11. On dashboard now you will be on *Public Hostnames* section, which means the traffic routed from publuc domain to your tunnel.
 12. Under **Add public Domain for *<Tunnel Name>* you will see below sections. (Fill unless optional)
    12.1. Subdomain - Fill `www` or subdomain of your website for which which you want the traffic to be routed.
    12.2. Domain - It is a drop down menu, choose your domain.
    12.3. Path - Leave it blank
    12.4 Type - Choose https, as we have our hosted our server locally on https.
    12.5 URL - You can write *localhost:<port>* if your cloudflare is running on the same server. Or write the local IP address of your server Eg. 192.168.0.121. 
        Port is not a must


Creating tunnel.

Installing cloudflared.

Updating on cloudflare dashboard with ip and port of local website.



