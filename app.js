// CHALLENGE: Append a message to notes.txt

// // 1.- Use the appendFileSync to append to the File
// // 2.- Run the Script
// // 3.- Check your work by openning the file and viewing the appended text
//------------------------
// CHALLENGE: Use the chalk library in your project
// 1.- INstall chalk
// 2.- Load chalk into app.js
// 3.- Use it to print the strin "Success!" to the console in green
// 4.- Test
// BONUS: Use docs to mess around with other styles. Make text bold and inversed

const chalk = require("chalk");
const getNotes = require("./notes");

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note");
} else if (command === "remove") {
  console.log("Removing Note");
}
