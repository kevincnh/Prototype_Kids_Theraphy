# Error Logs

This document tracks commands that resulted in errors, the error output, and how they were resolved.

## Logs

| Command | Error | Solution |
| ------- | ----- | -------- |
| `git push -u origin main` | `error: src refspec main does not match any` | Local branch was named `master`. Run `git branch -M main` to rename local branch to `main`, then push. |
