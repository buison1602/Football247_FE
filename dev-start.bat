@echo off
echo ========================================
echo Football247 Development Server Startup
echo ========================================
echo.

echo [1/6] Killing existing Node.js processes...
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Node.js processes terminated
) else (
    echo ✓ No Node.js processes found
)

echo.
echo [2/6] Cleaning build cache...
if exist .next (
    rmdir /s /q .next >nul 2>&1
    echo ✓ .next directory removed
) else (
    echo ✓ .next directory already clean
)

echo.
echo [3/6] Clearing npm cache...
npm cache clean --force >nul 2>&1
echo ✓ npm cache cleared

echo.
echo [4/6] Checking for port conflicts...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo ✓ Killing process using port 3000: %%a
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo [5/6] Setting file permissions...
icacls . /grant %USERNAME%:F /T >nul 2>&1
echo ✓ File permissions updated

echo.
echo [6/6] Starting development server...
echo ✓ Launching Next.js development server
echo.
echo ========================================
echo Server will start at http://localhost:3000
echo Press Ctrl+C to stop the server
echo ========================================
echo.

npm run dev
