import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });

    console.log(notes);
  }

  function deleteNote(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
