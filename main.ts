// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (1-280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const scene =
  "My six-year-old slid her lopsided, burnt pancake onto my plate and whispered, " +
  "\"I made the best one for you, Dad — the black bits are the extra love.\" " +
  "I ate every bite like it was five-star, and she sat up a little taller.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene, "utf8");
console.log(scene);
