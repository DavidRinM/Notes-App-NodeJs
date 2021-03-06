const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();

  //To check if a title already exists
  //const duplicateNotes = notes.filter(note => {
  //Zero items if no duplicates
  //  return note.title === title;
  //});

  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
    //Titles not the same
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title Taken"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const filteredNotes = notes.filter(note => {
    // Notes to keep
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    //Note was removed
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const listNodes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("You notes: "));
  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const noteSearched = notes.find(note => note.title === title);
  if (noteSearched) {
    //If note exists
    console.log(chalk.blueBright.bold(noteSearched.title));
    console.log(noteSearched.body);
  } else {
    console.log(chalk.red.bold.inverse("Note not found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  //Load & Manipulate notes

  try {
    //If notes.json files exists
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    //If file doesnt exist, return an empty array
    return [];
  }
};

module.exports = {
  //Functions to export
  addNote: addNotes,
  removeNote: removeNote,
  listNodes: listNodes,
  readNote: readNote
};
