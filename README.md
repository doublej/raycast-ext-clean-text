# Clean Text

Raycast extension to clean clipboard text using the [fabric](https://github.com/danielmiessler/fabric) `clean_text` pattern.

## Features

- Pipes clipboard content through `fabric --pattern clean_text`
- Removes formatting and junk from copied text

## Commands

| Command | Description |
|---------|-------------|
| Clean Text | Pipe clipboard through fabric clean_text pattern |

## Preferences

| Name | Description | Required |
|------|-------------|----------|
| Fabric Binary Path | Path to the `fabric` binary | No (defaults to `fabric` on PATH) |

## Prerequisites

- [fabric](https://github.com/danielmiessler/fabric) must be installed

## Install

```bash
bun install
bun run build
bun run dev
```

## License

MIT
