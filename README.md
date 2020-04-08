# Markdown Slides Template

A template of Markdown slides using [mume](https://github.com/shd101wyy/mume),
[reveal.js](https://revealjs.com/) and [mermaid](https://mermaid-js.github.io/mermaid/)

## Installation
```bash
npm install
```
Install ditaa via Homebrew if necessary.

## Basic Usage

1. Write down slides in `index.md`.
2. `make`
3. Open `index.html`

## Mermaid Diagrams

Embedded mermaid diagrams will be too small, so we convert them into svg files first.

1. Set the Chromium path.
  Modify `mermaid/puppeteer_config.json`. Set the `executablePath` to be the path to your Chrome/Edge/Opera browser.
2. Write down mermaid diagrams in `mermaid/*.mmd`.
3. `make`

## VS Code Extension

[Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/) can be used.
