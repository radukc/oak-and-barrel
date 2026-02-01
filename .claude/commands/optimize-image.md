---
description: Download an image from URL, resize it, and convert to WebP. Use when downloading stock photos from Pexels or similar sites for local caching.
allowed-tools: Bash(node *), Bash(npm install *)
---

User input: $ARGUMENTS

# Image Optimizer

Download, resize, and convert images to WebP format for the public folder.

## Parameters
- url - Full URL of the image to download
- filename - Output filename (without extension, .webp added automatically)
- width - Target width in pixels (default: 800)
- height - Target height (optional, maintains aspect ratio if omitted)

## Example
/optimize-image https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg burrata 800

## Execution
First ensure dependencies are installed, then run the script:

```bash
cd .claude/skills/optimize-image/scripts && npm install --silent 2>/dev/null
node .claude/skills/optimize-image/scripts/optimize.js "$0" "$1" "$2" "$3"
```

Output: public/<filename>.webp
