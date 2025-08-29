---
title: Malicious npm Packages and AI Tools
date: 2025-08-29
tags: ["security", "npm", "ai"]
draft: true
---

Steps

1. Find popular npm package
2. Steal the npm token to publish packages
3. Insert malware in package
4. Publish to npm directly without touching the git repo

The newest example is the `nx` package as detailed here: https://socket.dev/blog/nx-packages-compromised. Wild, but obvious. Can recommend you aalso read https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/.

This one was interesting as it relies on the affected users having [AI CLI tools](/blog/cli-llm) installed and uses it to do the work of discovering and extracting sensitive files, disguised as a "pentest agent prompt". Noice.
