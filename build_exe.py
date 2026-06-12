#!/usr/bin/env python3
"""
花吉食菜单转换器 - PyInstaller 构建脚本
=========================================
在 Windows 上运行:  python build_exe.py
在 macOS 上运行:    python build_exe.py   (生成 .app)
"""

import os
import sys
import shutil
from pathlib import Path

# 项目路径
ROOT = Path(__file__).parent.resolve()
MAIN_SCRIPT = ROOT / "花吉食菜单转换器.py"
DIST_DIR = ROOT / "dist"
BUILD_DIR = ROOT / "build"
ICON_FILE = ROOT / "icon.ico"  # 可选：Windows 图标

# 需要的额外数据文件（模板路径在运行时由用户选择，不需要打包）
# 但桌面路径的模板需要用户电脑上有

def build():
    """使用 PyInstaller 打包"""
    # 检查 PyInstaller
    try:
        import PyInstaller
    except ImportError:
        print("正在安装 PyInstaller...")
        os.system(f"{sys.executable} -m pip install pyinstaller")
    
    # 清理旧构建
    for d in [DIST_DIR, BUILD_DIR]:
        if d.exists():
            shutil.rmtree(d)
    
    # PyInstaller 参数
    cmd = [
        sys.executable, "-m", "PyInstaller",
        "--name", "花吉食菜单转换器",
        "--onefile",           # 单个 exe 文件
        "--windowed",          # 无控制台窗口（GUI 应用）
        "--clean",
        "--noconfirm",
        "--add-data", f"{ROOT}/花吉食菜单转换器.py{os.pathsep}.",
        "--distpath", str(DIST_DIR),
        "--workpath", str(BUILD_DIR),
        "--specpath", str(ROOT),
    ]
    
    # 如果有图标文件则添加
    if ICON_FILE.exists():
        cmd.extend(["--icon", str(ICON_FILE)])
    
    # 隐藏的导入（PyInstaller 有时检测不到）
    # tkinter 是默认导入的, openpyxl 和 pptx 自动检测
    cmd.append(str(MAIN_SCRIPT))
    
    print("=" * 60)
    print("花吉食菜单转换器 - 打包中...")
    print("=" * 60)
    print(f"源文件: {MAIN_SCRIPT}")
    print(f"输出目录: {DIST_DIR}")
    print(f"平台: {sys.platform}")
    print()
    
    # 执行
    os.system(" ".join(cmd))
    
    # 检查结果
    if sys.platform == "win32":
        exe_path = DIST_DIR / "花吉食菜单转换器.exe"
    else:
        exe_path = DIST_DIR / "花吉食菜单转换器"
        # macOS 可能是 .app 包
        app_path = DIST_DIR / "花吉食菜单转换器.app"
        if app_path.exists():
            exe_path = app_path
    
    if exe_path.exists():
        size = exe_path.stat().st_size
        print(f"\n✅ 打包成功！")
        print(f"   文件: {exe_path}")
        print(f"   大小: {size / 1024 / 1024:.1f} MB")
    else:
        print(f"\n⚠️ 检查输出目录: {DIST_DIR}")
        for f in DIST_DIR.iterdir():
            print(f"  {f.name}")
    
    print("\n💡 提示：将生成的 exe 复制到任意 Windows 电脑即可运行")
    print("   首次运行可能需要安装 Visual C++ Redistributable")
    print("   https://aka.ms/vs/17/release/vc_redist.x64.exe")


if __name__ == "__main__":
    build()
