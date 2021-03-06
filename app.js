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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    //Title of the removed note
    title: {
      describe: "Note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// List command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNodes();
  }
});

yargs.parse();

//console.log(yargs.argv);
