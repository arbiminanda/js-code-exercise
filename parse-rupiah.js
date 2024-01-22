const str_price = "Rp. 1.000.000.000,00";

var numbersOnly = function (number_string) {
  return number_string.replace(/[^0-9]/g, "");
};

const parsed_price = String(numbersOnly(str_price));

console.log(parsed_price.substring(0, parsed_price.length - 2));
