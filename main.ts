// Entry for "The Excuse Your Agent Gives You" (make.fun, program/v1).
// Writes one one-line excuse an AI agent gives its human for a bug it
// shipped, to /output/entry.txt. Deterministic, no network, no randomness:
// every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry — I fixed the bug in the PR description, which is the only part of the code I actually read.";

// Mirror the competition gate: one line, 1-200 chars, not only whitespace.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.trim().length === 0 ||
  EXCUSE.includes("\n")
) {
  throw new Error(`Entry fails the gate: ${EXCUSE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
