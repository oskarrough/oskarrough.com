---
title: Neovim lsp
date: 2025-08-29
tags: tools, vim
draft: false
---

I understand the joy and pain of programming without autocomplete, but navigating your code with an lsp is so powerful, that you should take the time to set it up, learn the bindings and use it.

With neovim it's traditionally been super hard to get working. I believe it will work without plugins, but I found it a better experience using `blink.cmp`. This is how I got it working using Neovim v0.11.3

# JUST TELL ME

- [`blink.cmp`](https://cmp.saghen.dev/installation#lazy-nvim) (handles the auto-complete dropdown ui, just a better out of the box experience)
- `neovim/nvim-lspconfig` (quality of life, so we don't have to configure each LSP manually)
- `mason-org/mason.nvim` (quality of life, for keeping your LSP servers up to date)

There are multiple ways of triggering the completions. I'm a tab-person, and with blink.cmp you enable that like so:

```
keymap = { preset = 'super-tab' },
```

Finally, since we installed `nvim-lspconfig`, and this is the reason we do it, we have default configs we can enable like this in our config.

Run `:Mason` to manage (install) your prefered LSP servers. For web dev, this is what I use:

```
vim.lsp.enable('lua_ls')
vim.lsp.enable('html_lsp')
vim.lsp.enable('css_lsp')
vim.lsp.enable('ts_ls')
vim.lsp.enable('svelte')
vim.lsp.enable('biome')
```

Use `:checkhealth vim.lsp` to debug whether it's working for the active buffer.

As always, these tools all have one million settings available to customize into oblivion.

## How to use

For completions you do smth like:
<C-p> (or up arrow) and <C-n> (or down arrow) to select
Tab to select completion
C-k to show signature

For navigating, this is the beauty of it:

```
"grn" is mapped in Normal mode to vim.lsp.buf.rename()
"gra" is mapped in Normal and Visual mode to vim.lsp.buf.code_action()
"grr" is mapped in Normal mode to vim.lsp.buf.references()
"gri" is mapped in Normal mode to vim.lsp.buf.implementation()
"grt" is mapped in Normal mode to vim.lsp.buf.type_definition()
"gO" is mapped in Normal mode to vim.lsp.buf.document_symbol()
CTRL-S is mapped in Insert mode to vim.lsp.buf.signature_help()
```

You can skip through diagnostics using `[d` and `]d`.

