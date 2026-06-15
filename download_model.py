#!/usr/bin/env python3
"""Download model files using requests streaming (bypass Xet bridge)"""
import requests, os, sys, time

files_to_download = [
    "model-00002-of-00004.safetensors",
    "model-00003-of-00004.safetensors",
    "model-00004-of-00004.safetensors",
]

model_id = "mlx-community/Qwen3.5-35B-A3B-4bit"
local_dir = os.path.expanduser("~/.omlx/models/mlx-community/" + model_id.split("/")[1])
os.makedirs(local_dir, exist_ok=True)

# Use hf-mirror.com (China mirror) directly, NO proxy
session = requests.Session()

for fname in files_to_download:
    local_path = os.path.join(local_dir, fname)
    
    # Check if already exists
    if os.path.exists(local_path):
        size = os.path.getsize(local_path)
        print(f"[{time.strftime('%H:%M:%S')}] Checking {fname} ({size/1024**3:.1f} GB)")
        
        # Verify by checking content-length
        url = f"https://hf-mirror.com/{model_id}/resolve/main/{fname}"
        r = session.head(url)
        expected = int(r.headers.get('content-length', 0))
        
        if expected > 0 and size >= expected:
            print(f"  ✅ Already complete ({size/1024**3:.1f} GB)")
            continue
        elif size > 0:
            print(f"  ⏳ Partial: {size/1024**3:.1f}/{expected/1024**3:.1f} GB, resuming...")
    
    # Actually download
    url = f"https://hf-mirror.com/{model_id}/resolve/main/{fname}"
    headers = {}
    resume_pos = 0
    if os.path.exists(local_path):
        resume_pos = os.path.getsize(local_path)
        headers['Range'] = f'bytes={resume_pos}-'
    
    print(f"[{time.strftime('%H:%M:%S')}] ⬇️  {fname} (resume at {resume_pos/1024**3:.2f} GB)")
    
    try:
        r = session.get(url, headers=headers, stream=True)
        r.raise_for_status()
        
        total = int(r.headers.get('content-length', 0))
        mode = 'ab' if resume_pos > 0 else 'wb'
        
        with open(local_path, mode) as f:
            downloaded = resume_pos
            start_time = time.time()
            last_report = 0
            for chunk in r.iter_content(chunk_size=1024*1024):
                if chunk:
                    f.write(chunk)
                    downloaded += len(chunk)
                    elapsed = time.time() - start_time
                    # Report every 5 seconds
                    if elapsed - last_report >= 5:
                        speed = (downloaded - resume_pos) / elapsed / 1024 / 1024
                        pct = (downloaded / total * 100) if total else 0
                        eta = (total - downloaded) / (speed * 1024 * 1024) if speed > 0 else 0
                        print(f"  {downloaded/1024**3:.1f}/{total/1024**3:.1f} GB ({pct:.0f}%) {speed:.1f} MB/s ETA: {eta:.0f}s")
                        last_report = elapsed
        
        elapsed = time.time() - start_time
        speed = (downloaded - resume_pos) / elapsed / 1024 / 1024 if elapsed > 0 else 0
        print(f"[{time.strftime('%H:%M:%S')}] ✅ {fname} done ({downloaded/1024**3:.1f} GB in {elapsed:.0f}s @ {speed:.1f} MB/s)")
    except Exception as e:
        print(f"[{time.strftime('%H:%M:%S')}] ❌ FAILED: {fname}: {e}", file=sys.stderr)
        sys.exit(1)

# Final summary
print(f"\n[{time.strftime('%H:%M:%S')}] All downloads complete!")
total_size = sum(os.path.getsize(os.path.join(dirpath, f)) 
                 for dirpath, _, filenames in os.walk(local_dir) 
                 for f in filenames)
print(f"Total model size: {total_size / 1024**3:.2f} GB")
