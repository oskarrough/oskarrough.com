---
title: Neovim lsp
date: 'Aug 2025'
tags: tools, vim
draft: true
---

I understand the joy and pain of programming without autocomplete, but navigating your code with an lsp is so powerful, that you should take the time to set it up, learn the bindings and use it.

With neovim it's traditionally been super hard to get working, at least for me. No more! This is how:

- Use Neovim v0.11.3 or later

Install these plugins: 

```
"neovim/nvim-lspconfig",
"mason-org/mason.nvim"
{
	'nvim-treesitter/nvim-treesitter',
	lazy = false,
	branch = 'main',
	build = ':TSUpdate'
},
{
	'saghen/blink.cmp',
	-- @todo more stuff here, see their readme for instructions
}
```

The only (!) personal setting I wanted was using tab for completions. With blink.cmp that is the option:

```
keymap = { preset = 'super-tab' },
```

Finally, since we installed nvim-lspconfig, we have default configs we can load like this:

```
vim.lsp.enable('html_lsp')
vim.lsp.enable('css_lsp')
vim.lsp.enable('ts_ls')
vim.lsp.enable('lua_ls')
vim.lsp.enable('svelte')
vim.lsp.enable('biome')
```

## How to use



