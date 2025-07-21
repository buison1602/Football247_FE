# Football247 Development Server Startup Script
# PowerShell version for enhanced Windows compatibility

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Football247 Development Server Startup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Kill existing Node.js processes
Write-Host "[1/7] Killing existing Node.js processes..." -ForegroundColor Yellow
try {
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Node.js processes terminated" -ForegroundColor Green
} catch {
    Write-Host "✓ No Node.js processes found" -ForegroundColor Green
}

# Step 2: Clean build cache
Write-Host ""
Write-Host "[2/7] Cleaning build cache..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
    Write-Host "✓ .next directory removed" -ForegroundColor Green
} else {
    Write-Host "✓ .next directory already clean" -ForegroundColor Green
}

# Step 3: Clear npm cache
Write-Host ""
Write-Host "[3/7] Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force | Out-Null
Write-Host "✓ npm cache cleared" -ForegroundColor Green

# Step 4: Check for port conflicts
Write-Host ""
Write-Host "[4/7] Checking for port conflicts..." -ForegroundColor Yellow
try {
    $portProcesses = netstat -ano | Select-String ":3000" | ForEach-Object {
        $line = $_.Line
        $parts = $line -split '\s+' | Where-Object { $_ -ne '' }
        if ($parts.Length -ge 5) {
            $processId = $parts[-1]
            if ($processId -match '^\d+$') {
                return $processId
            }
        }
    }

    if ($portProcesses) {
        foreach ($processId in $portProcesses) {
            try {
                $processName = (Get-Process -Id $processId -ErrorAction SilentlyContinue).ProcessName
                Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
                Write-Host "✓ Killed process using port 3000: $processName (PID: $processId)" -ForegroundColor Green
            } catch {
                Write-Host "! Could not kill process PID: $processId" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "✓ Port 3000 is available" -ForegroundColor Green
    }
} catch {
    Write-Host "✓ Port 3000 appears to be available" -ForegroundColor Green
}

# Step 5: Set file permissions
Write-Host ""
Write-Host "[5/7] Setting file permissions..." -ForegroundColor Yellow
try {
    icacls . /grant "${env:USERNAME}:F" /T | Out-Null
    Write-Host "✓ File permissions updated" -ForegroundColor Green
} catch {
    Write-Host "! Could not update permissions (may require admin)" -ForegroundColor Yellow
}

# Step 6: Create .next directory with proper permissions
Write-Host ""
Write-Host "[6/7] Preparing build directory..." -ForegroundColor Yellow
if (-not (Test-Path ".next")) {
    New-Item -ItemType Directory -Path ".next" -Force | Out-Null
    Write-Host "✓ .next directory created with proper permissions" -ForegroundColor Green
}

# Step 7: Start development server
Write-Host ""
Write-Host "[7/7] Starting development server..." -ForegroundColor Yellow
Write-Host "✓ Launching Next.js development server" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Server will start at http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the development server
npm run dev
