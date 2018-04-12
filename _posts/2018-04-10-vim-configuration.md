---
title:  "vim configuration"
date:   2018-04-10 17:15:00 +0800
categories:
          - Reference
tags:          
          - Bash
          - Linux
          - vim
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/w-home-page.jpg
excerpt: Bash script programing by using vim.
mathjax: true
---

Add a .vimrc file under home path
```
touch ~/.vimrc
```
than copy follow codes to .vimrc file

```
" enable line number
set number
" show existing tab with 4 spaces width
set tabstop=4
" when indenting with '>', use 4 spaces width
set shiftwidth=4
" On pressing tab, insert 4 spaces
set expandtab
" Define listchars color by using Darkgray
hi NonText  ctermfg=DarkGray
hi SpecialKey ctermfg=DarkGray
" Define listchars schema
set listchars=eol:$,space:.,trail:~
" Show spacial charactors at startup
set list
" enable increment search
set incsearch
" enable autoindent
set ai

```
