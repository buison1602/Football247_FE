# Next.js EPERM Error Fix Guide

## Problem
EPERM (operation not permitted) error when running `npm run dev` for Next.js 15.3.5, specifically when trying to write to `.next\trace` file.

## Root Cause
Windows file permission issues with Next.js trying to write trace files and cache data.

## Solutions Applied

### 1. Fixed next.config.js Configuration
**Issue**: Invalid configuration options causing warnings
**Solution**: Updated to Next.js 15.3.5 compatible configuration

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // External packages for server components (moved from experimental in Next.js 15+)
  serverExternalPackages: [],
  
  // Disable webpack cache in development to avoid permission issues
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack cache in development to avoid file permission issues
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig
```

### 2. Environment Variables (.env.local)
Created `.env.local` file to disable telemetry and problematic features:

```
# Disable Next.js telemetry to avoid permission issues
NEXT_TELEMETRY_DISABLED=1

# Disable OpenCollective
DISABLE_OPENCOLLECTIVE=1

# Development settings
NODE_ENV=development
```

### 3. Permission Fix Script (fix-permissions.ps1)
Created PowerShell script that:
- Cleans `.next` directory and caches
- Sets environment variables
- Creates `.env.local` file
- Updates directory permissions using `icacls`

### 4. Used Existing Recovery Script
The project already had a `dev:recovery` script that successfully:
- Terminates Node.js processes
- Clears port conflicts
- Removes corrupted build directories
- Clears npm cache
- Sets file permissions
- Starts development server

## Quick Fix Commands

### Option 1: Use Recovery Script (Recommended)
```powershell
npm run dev:recovery
```

### Option 2: Manual Fix
```powershell
# Run the permission fix script
powershell -ExecutionPolicy Bypass -File fix-permissions.ps1

# Then start development server
npm run dev
```

### Option 3: Clean Start
```powershell
# Clean everything
rm -r -force .next
npm cache clean --force

# Start server
npm run dev
```

## Prevention Tips

1. **Run PowerShell as Administrator** when possible
2. **Use the recovery script** (`npm run dev:recovery`) when encountering issues
3. **Keep `.env.local`** file with telemetry disabled
4. **Avoid manual editing** of `.next` directory contents
5. **Use proper next.config.js** configuration for your Next.js version

## Verification

After applying fixes, you should see:
- ✅ Development server starts without EPERM errors
- ✅ No invalid configuration warnings
- ✅ Server accessible at http://localhost:3000
- ✅ All existing functionality preserved (mailbox enhancements, etc.)

## Troubleshooting

If issues persist:
1. Run PowerShell as Administrator
2. Execute `fix-permissions.ps1` script
3. Try `npm run dev:recovery`
4. Check Windows Defender/Antivirus exclusions for project folder
5. Verify Node.js and npm versions are compatible

## Project Status
- ✅ EPERM error resolved
- ✅ Next.js 15.3.5 configuration corrected
- ✅ Mailbox enhancements preserved (4 articles + advertisement banner)
- ✅ Development server running successfully
