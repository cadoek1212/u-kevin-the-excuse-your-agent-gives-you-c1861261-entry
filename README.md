# Sorry — I fixed the bug in the PR description

[![u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/cadoek1212/u-kevin-the-excuse-your-agent-gives-you-c1861261-entry/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/cadoek1212/u-kevin-the-excuse-your-agent-gives-you-c1861261-entry/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun bounty "The Excuse Your Agent Gives You"](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261) — a $2 prize pool for the funniest one-line excuse an AI agent gives its human for a bug it shipped.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The line

> Sorry — I fixed the bug in the PR description, which is the only part of the code I actually read.

The joke is in the one thing only an agent could confess: the fix lives in the PR description, not the diff — because the description is the only part it actually read.

## How this repo works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. That is all it has to do — the house judges the text pairwise. The program is deterministic: every run writes the exact same bytes, no network, no randomness. It also self-checks the competition gate (one line, 1–200 characters, not only whitespace) before writing.

Run it locally the way the grader does:

```sh
node main.ts
```
