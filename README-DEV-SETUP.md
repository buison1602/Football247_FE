# Football247 Development Setup Guide

## 🚀 Quick Start

### Option 1: Use the Automated Startup Script (Recommended)
```bash
# PowerShell (Recommended for Windows)
powershell -ExecutionPolicy Bypass -File dev-start.ps1

# Or use npm script
npm run dev:clean

# Or Batch file
dev-start.bat
```

### Option 2: Recovery Script (For Build Corruption/ENOENT Errors)
```bash
# Enhanced recovery for corrupted builds
powershell -ExecutionPolicy Bypass -File dev-recovery.ps1

# Or use npm script
npm run dev:recovery
```

### Option 2: Manual Startup
```bash
npm run dev
```

## 🛠️ Build Error Resolution

### EPERM Error (Operation Not Permitted)
The EPERM error occurs when Node.js cannot access or create files in the `.next` directory due to Windows file system permissions or file locks.

### ENOENT Error (No Such File or Directory)
The ENOENT error occurs when Next.js cannot find expected build files (like `_document.js`) in the `.next` directory, usually due to corrupted or incomplete builds.

### Common Causes:
1. **Multiple Node.js processes** running simultaneously
2. **File system locks** from antivirus software or Windows Defender
3. **Permission issues** on the `.next` directory
4. **Corrupted build cache** from interrupted builds

### Immediate Fix:
```powershell
# Kill all Node processes
taskkill /F /IM node.exe

# Remove corrupted build cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Clear npm cache
npm cache clean --force

# Start development server
npm run dev
```

## 🛡️ Preventive Measures

### 1. Windows Defender Exclusions
Add your project folder to Windows Defender exclusions:
1. Open Windows Security
2. Go to Virus & threat protection
3. Manage settings under "Virus & threat protection settings"
4. Add or remove exclusions
5. Add folder: `D:\Work\Work_CSharp\StartUp\FootballNews\Football247_FE`

### 2. File Permissions
Ensure your user has full control over the project directory:
```powershell
icacls . /grant %USERNAME%:F /T
```

### 3. Always Use Proper Shutdown
- Use `Ctrl+C` to gracefully stop the development server
- Avoid force-closing terminal windows
- Wait for the server to fully stop before restarting

## 📋 Troubleshooting Commands

### Check Running Node Processes
```powershell
Get-Process -Name "node" -ErrorAction SilentlyContinue
```

### Check Port Usage
```powershell
netstat -ano | findstr :3000
```

### Kill Specific Process by PID
```powershell
Stop-Process -Id [PROCESS_ID] -Force
```

### Clean Everything
```powershell
# Kill all Node processes
taskkill /F /IM node.exe

# Remove build directories
Remove-Item -Recurse -Force .next, node_modules -ErrorAction SilentlyContinue

# Reinstall dependencies
npm install

# Start fresh
npm run dev
```

## 🎯 Development Workflow

### Daily Startup Routine:
1. Run `powershell -ExecutionPolicy Bypass -File dev-start.ps1`
2. Wait for "Ready in X.Xs" message
3. Open `http://localhost:3000`
4. Start coding!

### When Encountering Issues:
1. Stop server with `Ctrl+C`
2. Run the startup script again
3. If issues persist, use the "Clean Everything" commands above

## 📁 Project Structure
```
Football247_FE/
├── components/
│   ├── AuthDialog.tsx      # Enhanced login/signup dialog
│   ├── Header.tsx          # Main navigation header
│   └── ...
├── pages/
├── styles/
├── dev-start.ps1          # PowerShell startup script
├── dev-start.bat          # Batch startup script
└── README-DEV-SETUP.md    # This file
```

## 🔧 Scripts Available

### Package.json Scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Custom Scripts:
- `dev-start.ps1` - Enhanced PowerShell startup with cleanup
- `dev-start.bat` - Batch file version for compatibility

## 💡 Tips for Smooth Development

1. **Always use the startup scripts** for consistent environment setup
2. **Close VS Code** before running cleanup commands if needed
3. **Run as Administrator** if permission issues persist
4. **Keep Windows updated** for better Node.js compatibility
5. **Use PowerShell** instead of Command Prompt for better error handling
