const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// const bookJson = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.author);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const profileData = JSON.parse(dataJson);
profileData.name = "kejvi";
profileData.age = 26;
fs.writeFileSync("1-json.json", JSON.stringify(profileData));
