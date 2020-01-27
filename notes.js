const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title,body) => {
  const notes = loadNotes();

  //To check if a title already exists
  const duplicateNotes = notes.filter(note => { //Zero items if no duplicates
    return note.title === title;
  });

  if (duplicateNotes.length === 0){ //Titles not the same
    notes.push({
      title: title,
      body: body
    });
  
    saveNotes(notes);
    console.log("New note added");
  }
  else{
    console.log("Note title Taken")
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => { //Load & Manipulate notes

  try { //If notes.json files exists
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch(errer) { //If file doesnt exist, return an empty array
    return [];
  }
};

module.exports = {
    getNote: getNotes,
    addNote: addNotes
}
