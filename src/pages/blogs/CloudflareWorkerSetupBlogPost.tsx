import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CloudflareWorkerSetupBlogContent: React.FC = () => {
  return (
    <div>
      <p>
        If you have a static site built with Vite, Create React App, or any other npm-based build tool,
        deploying it as a Cloudflare Worker gives you a global CDN, automatic HTTPS, and zero cold-start
        latency, all on the free tier. This is exactly the setup used for this site.
      </p>
      <p>
        This guide covers everything from installing Wrangler to connecting your GitHub repo for automatic
        deploys via the Cloudflare dashboard.
      </p>

      <h2>What is a Cloudflare Worker (Assets)?</h2>
      <p>
        Cloudflare Workers is a serverless compute platform that runs on Cloudflare's edge network. For
        static sites you do not need any Worker script logic. You configure an <strong>Assets</strong> binding
        that points to your build output directory and Cloudflare serves those files directly from the edge.
      </p>
      <p>
        This is different from <strong>Cloudflare Pages</strong>, which is a separate product. Workers Assets
        gives you more control and integrates with the same <code>wrangler</code> CLI used for all other
        Worker types.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js 18+ and npm installed</li>
        <li>A static site that builds to a <code>dist/</code> directory via <code>npm run build</code></li>
        <li>A Cloudflare account (free tier is fine)</li>
      </ul>

      <h2>Step 1: Install Wrangler</h2>
      <p>Install Wrangler as a dev dependency in your project:</p>
      <CodeBlock>npm install --save-dev wrangler</CodeBlock>
      <p>Or globally if you prefer:</p>
      <CodeBlock>npm install -g wrangler</CodeBlock>

      <h2>Step 2: Create wrangler.toml</h2>
      <p>
        Add a <code>wrangler.toml</code> file at the root of your project. This is the only config file
        Wrangler needs for a static site:
      </p>
      <CodeBlock>
        {`name = 'your-worker-name'
compatibility_date = "2025-05-19"

[assets]
directory = "./dist"
not_found_handling = "single-page-application"`}
      </CodeBlock>
      <p>A few things to note:</p>
      <ul>
        <li>
          <code>name</code> becomes the subdomain on <code>workers.dev</code> and is the identifier in the
          Cloudflare dashboard. Use lowercase letters, numbers, and hyphens only.
        </li>
        <li>
          <code>directory</code> must match your build output. Vite outputs to <code>./dist</code> by default.
        </li>
        <li>
          <code>not_found_handling = "single-page-application"</code> is critical for React Router or any
          client-side routing. Without it, direct navigation to <code>/blog/some-post</code> returns a 404
          because there is no actual file at that path. This setting makes Cloudflare serve <code>index.html</code>{' '}
          for all unmatched routes, letting the client-side router handle them.
        </li>
      </ul>

      <h2>Step 3: Add a local preview script to package.json</h2>
      <p>
        Optionally add a <code>cf:preview</code> script to test the Worker locally before pushing:
      </p>
      <CodeBlock>
        {`{
  "scripts": {
    "build": "vite build",
    "cf:preview": "vite build && wrangler dev"
  }
}`}
      </CodeBlock>
      <p>
        <code>npm run cf:preview</code> runs your built assets through a local Worker runtime, including
        the SPA fallback behavior, so you can verify routing works before pushing.
      </p>

      <h2>Step 4: Connect GitHub to Cloudflare</h2>
      <p>
        In the Cloudflare dashboard, go to <strong>Workers &amp; Pages</strong>, click{' '}
        <strong>Create</strong>, and choose <strong>Connect to Git</strong>. Authorize Cloudflare to access
        your GitHub repo, then set the build configuration (see below). Every push to your main branch
        triggers a new deploy automatically. No local authentication needed.
      </p>

      <h2>Connecting a Custom Domain</h2>
      <p>
        In the Cloudflare dashboard, go to <strong>Workers &amp; Pages</strong>, select your Worker, then
        open the <strong>Settings</strong> tab. Under <strong>Domains &amp; Routes</strong>, add your custom
        domain. If your domain's DNS is already managed by Cloudflare (which it should be for this to work
        seamlessly), the route is created automatically.
      </p>

      <h2>Build Configuration in the Dashboard</h2>
      <p>
        When setting up the git integration, use these exact values:
      </p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Build command</td>
            <td><code>npm run build</code></td>
          </tr>
          <tr>
            <td>Deploy command</td>
            <td><code>npx wrangler deploy</code></td>
          </tr>
          <tr>
            <td>Root directory</td>
            <td><code>/</code></td>
          </tr>
        </tbody>
      </table>
      <p>
        Set root directory to <code>/</code> explicitly. Leaving it blank can cause a "root directory not
        found" error during the build. Cloudflare clones your repo, runs the build command from that
        directory, then runs the deploy command. The <code>wrangler.toml</code> in your repo tells Wrangler
        which Worker to target and where the built assets are.
      </p>

      <h2>Troubleshooting</h2>
      <h3>Client-side routes return 404</h3>
      <p>
        Make sure <code>not_found_handling = "single-page-application"</code> is set in{' '}
        <code>wrangler.toml</code>. Without it, Cloudflare returns a real 404 for any path that does not
        correspond to a file in <code>dist/</code>.
      </p>

      <h3>Deploy fails with "Root directory not found"</h3>
      <p>
        Set root directory to <code>/</code> explicitly in the dashboard. Leaving it blank triggers this
        error even when your <code>package.json</code> is at the repo root.
      </p>

      <h3>wrangler.toml name must be lowercase</h3>
      <p>
        The <code>name</code> field only accepts lowercase letters, numbers, and hyphens. Underscores and
        uppercase letters cause a validation error.
      </p>

      <h2>Summary</h2>
      <p>The full setup is one package, one config file, and one dashboard connection:</p>
      <CodeBlock>
        {`# 1. Install Wrangler
npm install --save-dev wrangler

# 2. Create wrangler.toml at repo root (see above)

# 3. In Cloudflare dashboard: Workers & Pages > Create > Connect to Git
#    Build command:  npm run build
#    Deploy command: npx wrangler deploy
#    Root directory: /`}
      </CodeBlock>
      <p>
        Push to main and Cloudflare builds and deploys automatically. No separate CI pipeline,
        no local authentication, no infrastructure to manage.
      </p>
    </div>
  );
};

export default CloudflareWorkerSetupBlogContent;
