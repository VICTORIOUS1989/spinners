let chars = ['\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   '];
let count = 100;
for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count );
 count = count + 200;
}


