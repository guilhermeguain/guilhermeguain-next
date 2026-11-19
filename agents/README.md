# Agent files

Shared docs, rules, and context for every coding agent. Tool entry points are normal files that name these paths. There are no symlinks.

```
agents/
  context/AGENTS.md   # what the project is and how to change it
  rules/              # the rule text
  docs/               # longer references
```

## Cursor

- `AGENTS.md` tells the agent to read `agents/context/AGENTS.md`
- Each file in `.cursor/rules/` keeps Cursor's frontmatter and points at the matching file in `agents/rules/`

Edit the files in this directory. A later agent gets its own pointer files, aimed at the same paths.
