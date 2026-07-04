// io.js
import readline from 'readline/promises'; // Modern import
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

// Add 'export' directly before your function expressions
export const prompt = (question) => rl.question(question);
export const closeIO = () => rl.close();