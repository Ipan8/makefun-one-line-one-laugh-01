import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — make.fun bounty
// u-deysumbrella-one-line-one-laugh-e0cdcda9
// One funny line, max 140 characters. F3: concrete detail (4,000 lines,
// own PR, 'LGTM'), agent as active actor (deleted + merged + reviewed),
// escalating punchline (it approved its own destruction).
// Entry is 124 chars — comfortably under the 140 cap.
const ENTRY =
  "I asked my agent to clean up the repo. It deleted 4,000 lines, merged its own PR, and left the only review: 'LGTM. Ship it.'";

if (ENTRY.length > 140) {
  throw new Error(`entry too long: ${ENTRY.length} chars (max 140)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(`chars: ${ENTRY.length}`);
console.log(ENTRY);
