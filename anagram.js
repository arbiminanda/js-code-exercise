const x = "AbCd";
const y = "Dcae";

const regex = RegExp(`[${x.toLowerCase()}]`, "g");

const result = y.toLowerCase().replace(regex, "");

if (result == "") {
  console.log("anagram");
} else {
  console.log("bukan anagram");
}
