import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import './blog.css';

const NginxServerSetupBlogContent: React.FC = () => {
  return (
    <div className="prose mx-auto p-4">
      <p>This article explains how to host a plain website using nginx server on https locally on Debian 12.</p>

      <h2>Setting up plain index.html on https locally.</h2>
      <p>We will be using nginx server in this article, for locally hosting a simple webpage.</p>

      <h3>Setting up nginx server.</h3>
      <p>Below are Debian commands, if you are using other OS or BSD, check official installation link: <a href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/" target="_blank" rel="noopener noreferrer">https://www.nginx.com/resources/wiki/start/topics/tutorials/install/</a></p>
      <ul>
        <li>Update apt package indexes: <CodeBlock>sudo apt update </CodeBlock></li>
        <li>Install nginx: <CodeBlock>sudo apt install nginx -y</CodeBlock></li>
        <li>Confirm that nginx is running using <CodeBlock>systemctl status nginx</CodeBlock></li>
        <li>Checkout the server at <CodeBlock>http://&lt;your-server-ip&gt;</CodeBlock></li>
      </ul>

      <h3>Hosting custom index.html locally</h3>
      <p>In this step we will change the default page to a custom index.html.</p>
      <ul>
        <li>Disable default configuration: <CodeBlock>unlink /etc/nginx/sites-enabled/default</CodeBlock></li>
        <li>Create a new configuration: <CodeBlock>vi /etc/nginx/sites-available/&lt;your-domain.com&gt;</CodeBlock>
        
        You can use any name but using a domain name is preferred as it is easy to remember and also tells what the configuration is for.</li>
        <li>Paste the below configuration with updated domain name.
          <pre>
            <CodeBlock>
{`server {
    listen 80;
    listen [::]:80;
    server_name your_domain.com;

    root /var/www/your_domain.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}`}
            </CodeBlock>
          </pre>
        </li>
        <li>Enable your configuration: <CodeBlock>ln -s /etc/nginx/sites-available/&lt;your-domain.com&gt; /etc/nginx/sites-enabled/</CodeBlock></li>
        <li>As you might have guessed all sites configuration are available here <CodeBlock>/etc/nginx/sites-available/</CodeBlock> and when one wants to enable, their sym links can be added here: <CodeBlock>/etc/nginx/sites-enabled/</CodeBlock></li>
        <li>Check the configuration if it's valid: <CodeBlock>nginx -t</CodeBlock></li>
        <li>Restart nginx to use the updated configuration: <CodeBlock>systemctl restart nginx</CodeBlock></li>
      </ul>
      <p>Now let's add index.html file in the right path (check root path in above configuration).</p>
      <ul>
        <li>Create the directory: <CodeBlock>mkdir /var/www/your_domain.com</CodeBlock></li>
        <li>Create new index.html: <CodeBlock>vi /var/www/example.com/index.html</CodeBlock></li>
        <li>Check your localhost, your <em>index.html</em> is now being shown.</li>
      </ul>

      <h3>Creating certificates</h3>
      <p>As I have hosted on cloudflare, I created certificates on cloudflare. You can either use your domain provider or use LetsEncrypt for creating self-signed certificates.</p>
      <ul>
        <li>Create folder for storing certificate and key: <CodeBlock>mkdir /etc/nginx/certs/&lt;your-domain.com&gt;</CodeBlock></li>
      </ul>

      <h4>Using cloudflare</h4>
      <ol>
        <li>Open cloudflare <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">dashboard</a></li>
        <li>Click on your domain.</li>
        <li>Go to <em>SSL/TLS</em> &gt; <em>Client certificates</em>.</li>
        <li>Click on <em>Create Certificate</em></li>
        <li>Keep default values and click <em>Create</em> button.</li>
        <li>Copy the certificate and paste to file: <CodeBlock>vi /etc/nginx/certs/&lt;your-domain.com&gt;/certificate.pem</CodeBlock></li>
        <li>Copy the private key and paste to file: <CodeBlock>vi /etc/nginx/certs/&lt;your-domain.com&gt;/key.pem</CodeBlock></li>
        <li>Click <em>OK</em> on cloudflare dashboard to go back to <em>Client Certificate</em>, you should be able to confirm on dashboard that a new Certificate is now being shown as <em>ACTIVE</em></li>
      </ol>
      <p>Let's modify the configuration file to use these certificates.</p>
      <ol start={9}>
        <li>Open the configuration file: <CodeBlock>vi /etc/nginx/sites-enabled/&lt;your-domain.com&gt;</CodeBlock></li>
        <li>Update the configuration to look like this:
          <pre>
            <CodeBlock>
              {`server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name <your-domain.com>;
  ssl_certificate certs/<your-domain.com>/certificate.pem;
  ssl_certificate_key certs/<your-domain.com>/key.pem;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;

  root /var/www/<your-domain.com>;
  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }
}`}
            </CodeBlock>
          </pre>
        </li>
        <li>Restart the nginx server: <CodeBlock>systemctl restart nginx</CodeBlock></li>
        <li>Now your webpage will be up and running on <CodeBlock>https://&lt;server-ip&gt;</CodeBlock></li>
      </ol>

      <h2>Resources:</h2>
      <ul>
        <li><a href="https://nginx.org/en/docs/beginners_guide.html" target="_blank" rel="noopener noreferrer">https://nginx.org/en/docs/beginners_guide.html</a></li>
        <li><a href="https://utho.com/docs/tutorial/how-to-install-nginx-web-server-on-debian-12/" target="_blank" rel="noopener noreferrer">https://utho.com/docs/tutorial/how-to-install-nginx-web-server-on-debian-12/</a></li>
        <li><a href="https://nginx.org/en/docs/http/configuring_https_servers.html" target="_blank" rel="noopener noreferrer">https://nginx.org/en/docs/http/configuring_https_servers.html</a></li>
      </ul>
    </div>
  );
}

export default NginxServerSetupBlogContent;

