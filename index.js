const { data } = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My name is ${data.name} et je suis à ${data.campus}`,
    e: "Aa",
    T: "P"
}

));
