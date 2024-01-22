const s = "bxcn";
const t = "abncx";

const regex = new RegExp(`[${s}]`, "g");

const dis = t.replace(regex, "");

console.log(dis);
