import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CloudflareTunnelSetupBlogContent: React.FC = () => {
  return (
    <div className="prose mx-auto p-4">
      <h1>Host your website using Cloudflare tunnel</h1>
      <p>This article explains how to host a website publicly using Cloudflare tunnel, that is running on localhost.</p>

      <h2>Hosting on Cloudflare</h2>
      <p>I will be assuming you have already set up the Cloudflare account with your domain.</p>

      <h3>Creating a tunnel</h3>
      <p>Let's create a Cloudflared tunnel.</p>

      <h4>References:</h4>
      <ul>
        <li> Creating Tunnel: <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/" target="_blank" rel="noopener noreferrer">https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/</a></li>
        <li> Creating tunnel using dashboard (managed-remotely) <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/" target="_blank" rel="noopener noreferrer">https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/</a></li>
      </ul>
      <p>You can follow the above guides as they are kept up to date by Cloudflare, mine can be old depending on when you are checking it.</p>

      <h4>Steps to create a Cloudflared tunnel:</h4>
      <ol>
        <li>Go to <a href="https://one.dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">Zero Trust</a></li>
        <li>Select your account.</li>
        <li>Go to <em>Access</em> &gt; <em>Tunnels</em>.</li>
        <li>Click on <em>[+ Create a tunnel]</em>.</li>
        <li>Write the name of the tunnel. Don't worry about the name, you can rename it afterwards.</li>
        <li>Click on <strong>Save tunnel</strong>.</li>
        <li>You will now be in the <strong>Install and run Connectors</strong> section.</li>
        <li>Choose your Operating system.</li>
        <li>Copy the commands provided on the dashboard and run them on your server.</li>
        <li>Now Cloudflared should be running locally. Confirm using the command below.<CodeBlock>systemctl status cloudflared</CodeBlock></li>
        <li>It should also show on the dashboard that you have a connector connected.</li>
      </ol>
      <blockquote>
        <p>Now you have a tunnel running but it does not know which IP or port to forward the tunnel request to and when to forward.</p>
      </blockquote>
      <ol start={12}>
        <li>On the dashboard now you will be on the <strong>Public Hostnames</strong> section, which means the traffic routed from the public domain to your tunnel.</li>
        <li>Under <strong>Add public Domain for <em>&lt;Tunnel Name&gt;</em></strong> you will see below sections. (Fill unless optional)
          <ul>
            <li>Subdomain - Fill 'www' or subdomain of your website for which you want the traffic to be routed.</li>
            <li>Domain - Choose your domain from the drop-down menu.</li>
            <li>Path (optional) - you can leave it blank.</li>
            <li>Type - Choose https, as we have hosted our server locally on https.</li>
            <li>URL - You can write <CodeBlock>localhost:&lt;port&gt;</CodeBlock> if your Cloudflare is running on the same server. Or write the local IP address of your server e.g. 192.168.0.121 (you can skip if it is on default port like 443 for https.)</li>
          </ul>
        </li>
      </ol>
      <p>Check out your website with subdomain (e.g. www): <CodeBlock>https://&lt;subdomain&gt;.&lt;your-domain&gt;.com</CodeBlock></p>
      <p>Congratulations! Now you have Cloudflare tunnel up and running and your website is public.</p>
    </div>
  );
}

export default CloudflareTunnelSetupBlogContent;








