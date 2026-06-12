@echo off
chcp 65001 >nul
title 花吉食菜单转换器 - 打包工具

echo ============================================
echo    花吉食菜单转换器 - 一键打包
echo ============================================
echo.
echo 正在检查 Python...

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 Python！请先安装 Python 3.8+
    echo    下载地址: https://www.python.org/downloads/
    pause
    exit /b 1
)

python --version
echo.

echo 正在安装依赖...
python -m pip install --upgrade pip -q
python -m pip install pyinstaller openpyxl python-pptx -q
echo ✅ 依赖安装完成
echo.

echo 开始打包...
python build_exe.py

echo.
if exist dist\花吉食菜单转换器.exe (
    echo ✅ 打包成功！
    echo    输出文件: %CD%\dist\花吉食菜单转换器.exe
    echo.
    echo    双击打开 dist\花吉食菜单转换器.exe 即可运行
) else (
    echo ❌ 打包失败，请检查上面的错误信息
    echo    常见问题：缺少 Visual C++ 运行库
    echo    下载安装: https://aka.ms/vs/17/release/vc_redist.x64.exe
)

echo.
pause
