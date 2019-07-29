const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {};

const readNote = title => {
  const notes = loadNodes();
  const searchNote = notes.find(note => note.title === title);

  if (searchNote) {
    console.log(chalk.green.inverse("Note Found"));
    console.log("Title: " + searchNote.title + " Body: " + searchNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const addNote = (title, body) => {
  const notes = loadNodes();
  //const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log(chalk.green.inverse("Note Saved!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNodes();
  const removeNotes = notes.filter(value => value.title !== title);

  if (notes.length > removeNotes.length) {
    saveNote(removeNotes);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};

const listNotes = () => {
  const notes = loadNodes();

  console.log(chalk.green("List of your notes"));
  notes.forEach(note => {
    console.log("Title: " + note.title + " Body: " + note.body);
  });
};

const saveNote = notes => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

const loadNodes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
