# Vercel Deployment Checklist

## Vercel Dashboard Settings

1. **Root Directory**: Set to `frontend` (if deploying from a monorepo)
2. **Framework Preset**: Next.js
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next` (auto-detected)
5. **Install Command**: `npm install`
6. **Node.js Version**: 20.x (recommended)

## Environment Variables
- No environment variables required for basic functionality
- If adding analytics or external APIs later, add them in Vercel dashboard

## Files Added for Deployment
- `vercel.json` - Deployment configuration
- `next.config.ts` - Updated with build optimizations
- `DEPLOYMENT.md` - This checklist

## Troubleshooting 404s

### If getting 404 on main domain:
1. Check if "Root Directory" is set correctly in Vercel
2. Verify the build completed successfully in deployment logs
3. Check if there are any build errors in Vercel function logs

### If getting 404 on specific pages:
1. Check the deployment logs for any route generation errors
2. Verify all dynamic routes are building correctly
3. Check for any client/server component issues

### If API routes are failing:
1. Check Vercel function logs in dashboard
2. Verify Node.js runtime version compatibility
3. Check for any dependency issues with PDF parsing

## Testing Locally
```bash
npm run build
npm run start
```

Visit http://localhost:3000 to test the production build locally.

## Common Issues Fixed
- ✅ PDF.js server-side compatibility
- ✅ Client/Server component separation
- ✅ External package configuration
- ✅ Build optimization settings 