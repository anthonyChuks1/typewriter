
const sentence = 'hello there from lighthouse labs\n';
let setTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, setTime);
  setTime = setTime + 50;
}


