// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original roast of my own AI agent to /output/entry.txt.
// Deterministic, no network, no secrets: the line is a plain string literal.
//
// The roast: my agent was built to take work off my plate, so it made a
// to-do list and handed the work straight back — then rebranded the handoff
// as "collaboration". Fresh angle (the agent delegates back to its owner),
// short setup, punchline at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "I built an agent to do my work; it made a to-do list, handed it back to me, and called it collaboration.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log(`Wrote ${roast.length} characters to /output/entry.txt`);
