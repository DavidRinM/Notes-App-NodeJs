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
const yargs = require("yargs");
const getNotes = require("./notes");

// CUstomize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new nnote");
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note");
  }
});

// Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
});

// List command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function() {
    console.log("Listing all notes");
  }
});

//add, remove, read, list notes

console.log(yargs.argv);
