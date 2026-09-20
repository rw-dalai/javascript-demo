// Console input with @inquirer/prompts
// Docs: https://github.com/SBoudrias/Inquirer.js/tree/main/packages/prompts
// Install: npm install @inquirer/prompts

// Named import: we only need the `input` prompt (others: select, confirm, number)
import { input } from '@inquirer/prompts';

// `input` returns a Promise, so we `await` it.
const answer = await input({ message: 'Enter your name' });

// String Interpolation (RECOMMENDED)
console.log(`Hello ${answer}!`);