const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// CUstomize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    //Properties for add command
    title: {
      describe: "Note Title",
      demandOption: true, //Must be added
      type: "string" //Must be string value
    },
    body: {
      describe: "Note Text",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
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

yargs.parse();

//console.log(yargs.argv);
