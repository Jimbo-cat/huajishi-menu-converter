#!/usr/bin/env python3
"""Search for Qwen3.5-35B-A3B model on HuggingFace"""
from huggingface_hub import HfApi
api = HfApi()

# Search mlx-community
print("=== mlx-community models ===")
try:
    models = api.list_models(search="Qwen3.5", author="mlx-community", limit=20)
    for m in models:
        print(f"  {m.modelId} - downloads: {m.downloads}, likes: {m.likes}")
except Exception as e:
    print(f"  Error: {e}")

# Search all for Qwen3.5-35B-A3B
print("\n=== All Qwen3.5-35B models ===")
try:
    models = api.list_models(search="Qwen3.5-35B", limit=20)
    for m in models:
        print(f"  {m.modelId} - downloads: {m.downloads}")
except Exception as e:
    print(f"  Error: {e}")
