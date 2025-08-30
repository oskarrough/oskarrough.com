---
title: Malicious npm packages (and AI...)
date: 2025-08-28
tags: ["security", "npm", "ai"]
draft: false
---

It's not too complicated.

1. Find popular npm package
2. Insert malware in package
3. Steal the npm token to publish packages
4. Publish to npm directly without touching the git repo

The newest example is unfortunately the `nx` package as detailed here: https://socket.dev/blog/nx-packages-compromised. Wild, but obvious. Can recommend you also read https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/.

This one was interesting as it relies on the affected users having [AI CLI tools](/blog/cli-llm) installed and uses it to do the work of discovering and extracting sensitive files, disguised as a "pentest agent prompt". 

How do we deal with this?

[Deno](https://deno.com/) programs run without file, network or environment access unless you give it permissions. It looks similar to this `deno run --allow-net --allow-read --allow-env server.ts`.  

[Socket](https://socket.dev/) provides both CI actions that notify you about nasty packages in your code, and they offer a a "safe npm" wrapper when you `npm i`.

Claude (and the other AI CLI tools) all offer granular permissions through "tool usage" and more.

We'll see! For sure there will be many examples as we continue to let AI control our systems.

