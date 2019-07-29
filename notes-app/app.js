const yargs = require("yargs");
const notes = require("./notes.js");
const chalk = require("chalk");

// Customize Yargs Version

yargs.version("1.1.0");

// add, remove, read, list

// Create Add Command

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create Remove Command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create Read Command

yargs.command({
  command: "read",
  describe: "read a note",
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

// Create List Command

yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
