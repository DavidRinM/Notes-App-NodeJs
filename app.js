const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is David.");

// CHALLENGE: Append a message to notes.txt

// 1.- Use the appendFileSync to append to the File
// 2.- Run the Script
// 3.- Check your work by openning the file and viewing the appended text

fs.appendFileSync("notes.txt", " I`m 20 years old & study Applied Maths");
