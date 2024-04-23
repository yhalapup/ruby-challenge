import Cleave from 'cleave.js';

document.addEventListener('DOMContentLoaded', () => {
  const cleaveSsn = new Cleave('.input-ssn', {
    numericOnly: true,
    delimiters: ['-'],
    blocks: [3,2,4],
    uppercase: true
  });
});
