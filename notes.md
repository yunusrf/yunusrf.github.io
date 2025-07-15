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
