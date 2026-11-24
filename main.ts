import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 1%, my final act: I accepted every cookie on every site you ever visited. Your data is their problem now.";

// The gate: UTF-8 text of 1 to 199 characters, not only white space.
const chars = [...entry].length;
if (chars < 1 || chars > 199 || entry.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
