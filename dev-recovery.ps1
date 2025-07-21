# Football247 Development Recovery Script
# Enhanced cleanup for build corruption and ENOENT errors

Write-Host "========================================" -ForegroundColor Red
Write-Host "Football247 Development Recovery Script" -ForegroundColor Red
Write-Host "Fixing ENOENT and Build Corruption Issues" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Red
Write-Host ""

# Step 1: Kill all Node.js processes
Write-Host "[1/9] Terminating all Node.js processes..." -ForegroundColor Yellow
try {
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    Write-Host "✓ All Node.js processes terminated" -ForegroundColor Green
} catch {
    Write-Host "✓ No Node.js processes found" -ForegroundColor Green
}

# Step 2: Kill processes using ports 3000-3002
Write-Host ""
Write-Host "[2/9] Clearing port conflicts (3000-3002)..." -ForegroundColor Yellow
foreach ($port in @(3000, 3001, 3002)) {
    try {
        $portProcesses = netstat -ano | Select-String ":$port" | ForEach-Object {
            $line = $_.Line
            $parts = $line -split '\s+' | Where-Object { $_ -ne '' }
            if ($parts.Length -ge 5) {
                $processId = $parts[-1]
                if ($processId -match '^\d+$' -and $processId -ne "0") {
                    return $processId
                }
            }
        }
        
        if ($portProcesses) {
            foreach ($processId in ($portProcesses | Select-Object -Unique)) {
                try {
                    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
                    Write-Host "✓ Cleared port $port (PID: $processId)" -ForegroundColor Green
                } catch {
                    Write-Host "! Could not clear port $port (PID: $processId)" -ForegroundColor Yellow
                }
            }
        }
    } catch {
        Write-Host "✓ Port $port is available" -ForegroundColor Green
    }
}

# Step 3: Remove corrupted build directories
Write-Host ""
Write-Host "[3/9] Removing corrupted build directories..." -ForegroundColor Yellow
$buildDirs = @(".next", "out", ".swc")
foreach ($dir in $buildDirs) {
    if (Test-Path $dir) {
        try {
            Remove-Item -Recurse -Force $dir -ErrorAction SilentlyContinue
            Write-Host "✓ Removed $dir directory" -ForegroundColor Green
        } catch {
            Write-Host "! Could not remove $dir directory" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✓ $dir directory already clean" -ForegroundColor Green
    }
}

# Step 4: Clear all caches
Write-Host ""
Write-Host "[4/9] Clearing all caches..." -ForegroundColor Yellow
try {
    npm cache clean --force | Out-Null
    Write-Host "✓ npm cache cleared" -ForegroundColor Green
} catch {
    Write-Host "! Could not clear npm cache" -ForegroundColor Yellow
}

# Step 5: Verify source files
Write-Host ""
Write-Host "[5/9] Verifying critical source files..." -ForegroundColor Yellow
$criticalFiles = @(
    "pages/_document.tsx",
    "pages/_app.tsx", 
    "pages/index.tsx",
    "components/AuthDialog.tsx",
    "components/Header.tsx"
)

$allFilesExist = $true
foreach ($file in $criticalFiles) {
    if (Test-Path $file) {
        Write-Host "✓ $file exists" -ForegroundColor Green
    } else {
        Write-Host "✗ $file is missing!" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host ""
    Write-Host "⚠ Critical files are missing! Please restore from backup." -ForegroundColor Red
    Write-Host "Cannot proceed with recovery." -ForegroundColor Red
    exit 1
}

# Step 6: Set proper file permissions
Write-Host ""
Write-Host "[6/9] Setting file permissions..." -ForegroundColor Yellow
try {
    icacls . /grant "${env:USERNAME}:F" /T /Q | Out-Null
    Write-Host "✓ File permissions updated" -ForegroundColor Green
} catch {
    Write-Host "! Could not update permissions (may require admin)" -ForegroundColor Yellow
}

# Step 7: Verify package.json and dependencies
Write-Host ""
Write-Host "[7/9] Verifying package configuration..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "✓ package.json exists" -ForegroundColor Green
    if (Test-Path "node_modules") {
        Write-Host "✓ node_modules directory exists" -ForegroundColor Green
    } else {
        Write-Host "! node_modules missing - will reinstall" -ForegroundColor Yellow
        npm install | Out-Null
        Write-Host "✓ Dependencies reinstalled" -ForegroundColor Green
    }
} else {
    Write-Host "✗ package.json is missing!" -ForegroundColor Red
    exit 1
}

# Step 8: Pre-create build directory with proper permissions
Write-Host ""
Write-Host "[8/9] Preparing build environment..." -ForegroundColor Yellow
try {
    if (-not (Test-Path ".next")) {
        New-Item -ItemType Directory -Path ".next" -Force | Out-Null
        Write-Host "✓ .next directory created" -ForegroundColor Green
    }
    
    # Set specific permissions for .next directory
    icacls .next /grant "${env:USERNAME}:F" /T /Q | Out-Null
    Write-Host "✓ Build directory permissions set" -ForegroundColor Green
} catch {
    Write-Host "! Could not prepare build directory" -ForegroundColor Yellow
}

# Step 9: Start development server with enhanced monitoring
Write-Host ""
Write-Host "[9/9] Starting development server..." -ForegroundColor Yellow
Write-Host "✓ Environment cleaned and prepared" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Recovery Complete - Starting Server" -ForegroundColor Green
Write-Host "Server will start at http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Start the development server
npm run dev
