# Gatsby Personal Website - Project Commands & Setup

## 🚀 Quick Start Commands

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/yunusparvej/gatsby_per_website.git
cd gatsby_per_website

# Install dependencies
npm install

# Start development server
npm start
# or
npm run develop
```

## 📋 Available npm Scripts

### Development

```bash
npm start              # Start development server (http://localhost:8000)
npm run develop        # Same as npm start
npm run dev            # Alternative development command
```

### Building & Production

```bash
npm run build          # Build for production
npm run serve          # Serve production build locally
```

### Code Quality & Formatting

```bash
npm run clean          # Clean Gatsby cache and public folder
npm run lint           # Run ESLint to check for errors
npm run lint:fix       # Run ESLint and auto-fix issues
npm run format         # Format code with Prettier
npm run type-check     # Check TypeScript types (if applicable)
```

### Testing

```bash
npm test               # Run tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
```

## 🔧 Development Workflow

### 1. Starting Development

```bash
# Clean cache if having issues
npm run clean

# Start fresh development server
npm run develop

# Open in browser: http://localhost:8000
# GraphQL explorer: http://localhost:8000/___graphql
```

### 2. Before Committing Changes

```bash
# Format code
npm run format

# Check for lint errors
npm run lint

# Fix auto-fixable lint errors
npm run lint:fix

# Build to check for errors
npm run build
```

### 3. Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit (will trigger lint-staged automatically)
git commit -m "feat: your commit message"

# Push to GitHub
git push
```

## 🛠️ Project Structure

```
├── content/                 # Markdown content
│   ├── featured/           # Featured projects
│   ├── jobs/               # Work experience
│   ├── posts/              # Blog posts
│   └── projects/           # Other projects
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── images/             # Image assets
│   ├── pages/              # Gatsby pages
│   ├── styles/             # Global styles
│   ├── templates/          # Page templates
│   └── utils/              # Utility functions
├── static/                 # Static assets (favicons, resume, etc.)
└── public/                 # Build output (generated)
```

## 🎨 Customization Commands

### Adding New Content

```bash
# Add featured project
mkdir content/featured/your-project
touch content/featured/your-project/index.md

# Add blog post
mkdir content/posts/your-post
touch content/posts/your-post/index.md

# Add job experience
touch content/jobs/company-name/index.md
```

### Updating Favicons

```bash
# Generate new favicons (if you have canvas installed)
node generate-all-favicons.js

# Or use the HTML utility
open generate-favicon.html
```

## 🔍 Troubleshooting Commands

### Common Issues

```bash
# Clear all caches
npm run clean
rm -rf node_modules package-lock.json
npm install

# Fix dependency issues
npm audit fix

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

### Kill Processes Running on Ports

```bash
# Kill process running on port 8000 (development server)
sudo lsof -t -i:8000 | xargs kill -9

# Kill process running on port 9000 (production preview)
sudo lsof -t -i:9000 | xargs kill -9

# Alternative method - find and kill specific port
lsof -ti:8000 | xargs kill -9

# Kill all node processes (use with caution)
pkill -f node

# Find what's running on a specific port
lsof -i :8000
netstat -tulpn | grep :8000
```

### GraphQL Issues

```bash
# Delete .cache and restart
rm -rf .cache
npm run develop
```

### Build Issues

```bash
# Clean build
npm run clean
npm run build

# Debug build
DEBUG=gatsby:* npm run build
```

## 🌐 Deployment

### GitHub Pages (if configured)

```bash
npm run deploy
```

### Netlify/Vercel

```bash
# These platforms auto-deploy from GitHub
# Build command: npm run build
# Publish directory: public
```

### Manual Deployment

```bash
# Build for production
npm run build

# Upload 'public' folder to your hosting provider
```

## 📝 Configuration Files

- `gatsby-config.js` - Main Gatsby configuration
- `gatsby-node.js` - Node APIs (page creation, etc.)
- `gatsby-browser.js` - Browser APIs
- `gatsby-ssr.js` - Server-side rendering APIs
- `package.json` - Dependencies and scripts
- `.eslintrc` - ESLint configuration
- `.eslintignore` - ESLint ignore patterns
- `.gitignore` - Git ignore patterns
- `prettier.config.js` - Prettier configuration

## 🔗 Important URLs

- **Development:** <http://localhost:8000>
- **GraphQL Explorer:** <http://localhost:8000/___graphql>
- **Production Build Preview:** npm run serve (<http://localhost:9000>)

## 📱 Features Implemented

- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Featured projects showcase (Currently: Citc_qliksense, Online_fees_payment)
- ✅ Blog posts with markdown
- ✅ Work experience timeline with scrollable job descriptions
- ✅ Contact form
- ✅ Resume download
- ✅ Social media links
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ PWA ready

## 🚨 Important Notes

1. **Always run `npm run clean` if you encounter build issues**
2. **Use `npm run lint:fix` before committing**
3. **Update resume.pdf in `/static/` folder when needed**
4. **Favicon files are in `/static/` - don't edit `/public/` files**
5. **Content is in markdown format in `/content/` folders**
6. **Featured projects are in `/content/featured/` - currently includes Citc_qliksense and Online_fees_payment**
7. **Removed SpotifyProfile, SpotifyProfileV2, and HalcyonTheme projects as requested**

## 🚀 Automating Deployment with GitHub Actions

You can automate deployment to GitHub Pages using GitHub Actions. This will build and deploy your Gatsby site to the `gh-pages` branch on every push to the `main` branch.

### 1. Create a Personal Access Token (Classic)

1. Log in to your GitHub account.
2. Click your profile picture (top right) → **Settings**.
3. In the left sidebar, scroll down and look for **Developer settings** (sometimes at the very bottom).
4. Under **Developer settings**, you should see **Personal access tokens** (expand for “Tokens (classic)” and “Fine-grained tokens”).
5. Click **Tokens (classic)** or **Fine-grained tokens**.
6. Click **Generate new token** and follow the prompts.

If you do not see “Developer settings” or “Personal access tokens”, try searching for “Personal access tokens” in the search bar at the top of the Settings page. GitHub may move or rename this section, but it is always under your personal account’s settings, not repository or organization settings.

If you still cannot find it, you may be on a managed enterprise account or GitHub has changed the UI again. In that case, refer to the official GitHub documentation: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token 2. Click **Generate new token (classic)**. 3. Give it a name (e.g., `gh-pages-deploy`), set an expiration, and select the `repo` scope. 4. Copy the token (you will use it as a secret in the next step).

### 2. Add the Token as a Repository Secret

1. Go to your repository on GitHub.
2. Click **Settings > Secrets and variables > Actions > New repository secret**.
3. Name the secret `GH_PAGES_DEPLOY_TOKEN` and paste your token as the value.

### 3. Add the GitHub Actions Workflow File

1. In your project root, create a folder: `.github/workflows/`
2. Inside that folder, create a file named `deploy.yml` with the following content:

```yaml
name: Deploy Gatsby to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build Gatsby site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GH_PAGES_DEPLOY_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
          cname: ''
```

**Notes:**

- This workflow will run on every push to the `main` branch.
- It uses the `peaceiris/actions-gh-pages` action to deploy the contents of the `public` folder to the `gh-pages` branch.
- The `GH_PAGES_DEPLOY_TOKEN` secret is used for authentication.
- If you use a custom domain, set the `cname` value accordingly (otherwise leave it as '').

### 4. Commit and Push the Workflow

```sh
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for automatic deployment"
git push
```

### 5. Verify Deployment

- After pushing, go to the **Actions** tab in your repository to monitor the workflow run.
- If successful, your site will be automatically deployed to GitHub Pages.

---

## 🧑‍💻 Developer & Maintainer Instructions

### How to Compile the Code

1. Install dependencies (if not done):
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   # or
   npm run develop
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview the production build locally:
   ```sh
   npm run serve
   ```

### How to Handle Updates to the Website

- Make your code/content changes in the appropriate files (e.g., `src/`, `content/`, etc.).
- Run `npm run format` and `npm run lint:fix` to ensure code quality.
- Test your changes locally using the development server (`npm start`) and production build (`npm run build` + `npm run serve`).
- Commit and push your changes to the repository:
  ```sh
  git add .
  git commit -m "Update: <describe your change>"
  git push
  ```

### How to Redeploy to GitHub Pages

#### If prompted for a GitHub username and password when running `npm run deploy`:

1. **Do not use your GitHub password.** Instead, use a GitHub Personal Access Token (PAT).
2. To generate a token:
   - Go to GitHub > Settings > Developer settings > Personal access tokens.
   - Click "Generate new token" and select the `repo` scope.
   - Copy the token (you will use it as your password).
3. When prompted for a username, enter your GitHub username (e.g., `yunusrf`).
4. When prompted for a password, paste your personal access token.

**Tip:**

- You can set the token in your environment for one-time use:
  ```sh
  export GH_TOKEN=your_personal_access_token
  npm run deploy
  ```
- Or, set up SSH keys for your GitHub account and use the SSH URL in your repository for passwordless deploys.

For more details, see: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

1. Ensure the `homepage` field in `package.json` is set to your site URL (e.g., `"https://yunusrf.github.io/"`).
2. Run the deploy command:
   ```sh
   npm run deploy
   ```
3. Wait a few minutes for GitHub Pages to update. Your site will be live at your URL.

#### Troubleshooting Deployment

- If the site does not update, check the GitHub Pages settings in your repository (Settings > Pages).
- Make sure the source is set to the `gh-pages` branch and root folder.
- If you see a 404 or blank page, clear your browser cache or try in Incognito mode.
- Check the `gh-pages` branch for the correct build output.

---

These instructions are for any developer or maintainer working on this Gatsby-based personal website deployed to GitHub Pages. For further help, refer to the official Gatsby and GitHub Pages documentation.
