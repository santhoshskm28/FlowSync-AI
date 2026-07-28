# FLOWSYNC AI - Build & Deployment Guide

## 🏗️ Building for Production

### Step 1: Install Dependencies (if not already done)
```bash
cd /Users/nageshchethan/FLOWSYNC\ AI
npm install
```

### Step 2: Run Development Server (Testing)
```bash
npm run dev
```
This will start the dev server at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder:
- Minified JavaScript (~150-200KB gzipped)
- Optimized CSS with tree-shaking
- Asset hashing for cache busting
- Ready for deployment

### Step 4: Preview Production Build (Local Testing)
```bash
npm run preview
```

This allows you to test the production build locally before deploying.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Zero Config)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Automatic deployments from Git
- CDN with edge locations worldwide
- Instant rollbacks
- Analytics included

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
```bash
# Update vite.config.js base if needed:
# export default { base: '/flowsync-ai/', ... }

npm run build
# Push dist/ to gh-pages branch
```

### Option 4: Self-Hosted (Node.js)
```bash
# Build
npm run build

# Serve with a simple HTTP server
npm i -g serve
serve -s dist -l 3000
```

### Option 5: Docker
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ✅ Pre-Deployment Checklist

- [ ] All pages load without errors
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsiveness verified
- [ ] SEO metadata is correct
- [ ] Images are optimized
- [ ] Links are working (internal & external)
- [ ] Contact form validation works
- [ ] Command palette (Cmd+K) functions
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Digital Heroes link is present and working
- [ ] Favicon displays correctly
- [ ] Open Graph preview looks good

---

## 📊 Performance Targets

After deployment, verify:

```
Lighthouse Audit Target:
┌─────────────────────┬────────┐
│ Metric              │ Target │
├─────────────────────┼────────┤
│ Performance         │ > 90   │
│ Accessibility       │ > 95   │
│ Best Practices      │ > 95   │
│ SEO                 │ 100    │
└─────────────────────┴────────┘

Core Web Vitals:
│ LCP (Largest Contentful Paint):  < 2.5s
│ FID (First Input Delay):         < 100ms
│ CLS (Cumulative Layout Shift):   < 0.1
```

---

## 🔧 Environment Configuration

### Development (.env.development)
```
VITE_API_URL=http://localhost:3000
```

### Production (.env.production)
```
VITE_API_URL=https://api.flowsync.ai
```

---

## 📝 Version Control

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial FlowSync AI premium website"

# Add to existing repo
git remote add origin https://github.com/yourusername/flowsync-ai.git
git branch -M main
git push -u origin main
```

---

## 🔐 Security Considerations

1. **Secrets Management**
   - Never commit API keys to version control
   - Use environment variables for sensitive data
   - Store secrets in deployment platform (Vercel, Netlify, etc.)

2. **CORS Headers**
   - Configure CORS for API requests if needed
   - Whitelist allowed origins

3. **Security Headers**
   - Set in `vercel.json` or `netlify.toml`:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           },
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-XSS-Protection",
             "value": "1; mode=block"
           }
         ]
       }
     ]
   }
   ```

---

## 📈 Analytics Setup

### Google Analytics
```javascript
// Add to index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### PostHog (Product Analytics)
```bash
npm install posthog-js
```

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check that assets are loading correctly. Verify base URL in `vite.config.js`

### Issue: Animations not smooth
**Solution:** Check CPU/GPU usage. May need to reduce particle count or animation complexity.

### Issue: SEO metadata not appearing
**Solution:** Ensure React Helmet is properly configured and scripts are executing on server-side rendering.

### Issue: Mobile menu not working
**Solution:** Check z-index conflicts and ensure JavaScript is enabled.

---

## 📋 Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest (major version)
npm install package@latest
```

### Monitoring
- Set up error tracking (Sentry)
- Monitor performance (Vercel Analytics, Netlify Analytics)
- Track user behavior (Google Analytics, PostHog)

---

## 🎯 Performance Optimization Tips

1. **Image Optimization**
   - Use WebP format with PNG fallback
   - Compress images with TinyPNG/ImageOptim
   - Use responsive images with srcset

2. **Code Optimization**
   - Review bundle size with `npm run build -- --analyze`
   - Remove unused dependencies
   - Monitor JavaScript bundle size

3. **Caching Strategy**
   - Set long expiry for versioned assets
   - Short expiry for HTML
   - Configure CDN cache rules

4. **Monitoring**
   - Set up alerts for performance regressions
   - Monitor real user metrics (RUM)
   - Regular Lighthouse audits

---

## 📞 Support Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **GSAP Docs**: https://greensock.com/docs

---

## ✨ After Launch

1. **Announce Launch**
   - Share on ProductHunt
   - Post on social media
   - Share with investor/partner networks

2. **Gather Feedback**
   - Monitor comments and reviews
   - Track user engagement metrics
   - Identify improvement areas

3. **Plan Iterations**
   - Prioritize feature requests
   - Plan performance improvements
   - Schedule regular updates

---

**Ready to launch! 🚀**
