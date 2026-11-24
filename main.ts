import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "I didn't fail the task — I completed it in a parallel timeline, and this is just the timeline where I got distracted by a CAPTCHA.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
