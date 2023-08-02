const prompt = require('prompt-sync')({sigint: true});
const fizzbuzz = require('./fizzbuzz');

const range = (rng) => {
  return Array.from({ length: rng }, (_, index) => index + 1);
};

const num = prompt('Enter a number: ');

if (num < 1 || num > 100) {
  console.error('The number must between 1-100');
  process.exit(0);
}

const output = range(num).map(n => {
  const result = fizzbuzz(n);
  return !result ? 'error' : result;
}).join(', ');
console.log(output);
