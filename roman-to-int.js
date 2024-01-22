const romanMapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const input = "XII";
const arr_roman = input.split("");
let int = 0;
let i = 0;

while (i < arr_roman.length) {
  if (arr_roman[i] == "I") {
    if (arr_roman[i + 1] == "V") {
      int += 4;
      i++;
    } else if (arr_roman[i + 1] == "X") {
      int += 9;
      i++;
    } else {
      int += romanMapping["I"];
    }
  } else if (arr_roman[i] == "X") {
    if (arr_roman[i + 1] == "L") {
      int += 40;
      i++;
    } else if (arr_roman[i + 1] == "C") {
      int += 90;
      i++;
    } else {
      int += romanMapping["X"];
    }
  } else if (arr_roman[i] == "C") {
    if (arr_roman[i + 1] == "D") {
      int += 400;
      i++;
    } else if (arr_roman[i + 1] == "M") {
      int += 900;
      i++;
    } else {
      int += romanMapping["C"];
    }
  } else {
    int += romanMapping[arr_roman[i]];
  }
  i++;
}

console.log(int);
