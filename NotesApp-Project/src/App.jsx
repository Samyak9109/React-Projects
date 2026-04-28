import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = ({ title, details }) => {
    setNotes([...notes, { title, details }]);
  };

  const deleteNote = (idx) => {
    setNotes(notes.filter((_, i) => i !== idx));
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
