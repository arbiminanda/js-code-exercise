const number = 30;
let arr = [];

for (let i = 1; i <= number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    arr.push("Java x QA");
  }
  if (i % 3 == 0 || i % 5 == 0) {
    if (i % 3 == 0) {
      arr.push("Java");
    } else {
      arr.push("QA");
    }
  } else {
    arr.push(i);
  }
}

console.log(arr);
