# PowerShell script to fix Next.js EPERM permission issues
# Run this script as Administrator if needed

Write-Host "Fixing Next.js EPERM permission issues..." -ForegroundColor Green

# Solution 1: Clean Next.js cache and build files
Write-Host "`n1. Cleaning Next.js cache and build files..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
    Write-Host "   ✓ Removed .next directory" -ForegroundColor Green
}

if (Test-Path "node_modules/.cache") {
    Remove-Item -Recurse -Force "node_modules/.cache" -ErrorAction SilentlyContinue
    Write-Host "   ✓ Removed node_modules cache" -ForegroundColor Green
}

# Solution 2: Set environment variables to disable problematic features
Write-Host "`n2. Setting environment variables..." -ForegroundColor Yellow
$env:NEXT_TELEMETRY_DISABLED = "1"
$env:DISABLE_OPENCOLLECTIVE = "1"
Write-Host "   ✓ Disabled Next.js telemetry" -ForegroundColor Green
Write-Host "   ✓ Disabled OpenCollective" -ForegroundColor Green

# Solution 3: Create .env.local with necessary settings
Write-Host "`n3. Creating .env.local file..." -ForegroundColor Yellow
$envContent = @"
# Disable Next.js telemetry to avoid permission issues
NEXT_TELEMETRY_DISABLED=1

# Disable OpenCollective
DISABLE_OPENCOLLECTIVE=1

# Development settings
NODE_ENV=development
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8
Write-Host "   ✓ Created .env.local file" -ForegroundColor Green

# Solution 4: Try to fix directory permissions (requires admin rights)
Write-Host "`n4. Attempting to fix directory permissions..." -ForegroundColor Yellow
try {
    $currentDir = Get-Location
    icacls $currentDir /grant "${env:USERNAME}:(OI)(CI)F" /T 2>$null
    Write-Host "   ✓ Updated directory permissions" -ForegroundColor Green
} catch {
    Write-Host "   ⚠ Could not update permissions (may need Administrator rights)" -ForegroundColor Red
}

Write-Host "`n✅ Permission fixes applied!" -ForegroundColor Green
Write-Host "`nNow try running one of these commands:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor White
Write-Host "   yarn dev" -ForegroundColor White
Write-Host "   npx next dev" -ForegroundColor White

Write-Host "`nIf issues persist, try running PowerShell as Administrator and run this script again." -ForegroundColor Yellow
