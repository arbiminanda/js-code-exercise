const input = "fgsjdfgdbfsuiyfbiusgdjs";
const target = "f";

const arr_input = input.split("");
let int = 0;

arr_input.forEach((element) => {
  if (element == target) {
    int += 1;
  }
});

console.log(int);
