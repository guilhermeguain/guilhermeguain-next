# Agent files

Shared docs, rules, and context for every coding agent. Tool folders only symlink here.

```
agents/
  context/AGENTS.md   # what the project is and how to change it
  rules/              # persistent rules (Cursor .mdc)
  docs/               # longer references
```

## Cursor

- `AGENTS.md` → `agents/context/AGENTS.md`
- `.cursor/rules` → `agents/rules`

Edit the files in this directory. A later agent (Claude, Copilot, and so on) gets its own symlink to the same folders.
