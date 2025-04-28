import "./App.css";
import NotesContainer from "./components/NotesContainer";
import NotesForm from "./components/NotesForm";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:7070/notes");
      console.log("Данные полученны с сервера");

      if (!response.ok) throw new Error("Ошибка сервера");
      const data = await response.json();

      setNotes(data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (content) => {
    const newNote = {
      id: new Date(),
      content,
    };
    try {
      await fetch("http://localhost:7070/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    try {
      await fetch(`http://localhost:7070/notes/${id}`, {
        method: "DELETE",
      });

      fetchNotes();
    } catch (error) {
      console.error("Ошибка удаления:", error);
    }
  };

  return (
    <div className="notes">
      <NotesContainer
        notes={notes}
        deleteNote={handleDeleteNote}
        fetchNotes={fetchNotes}
      />
      <NotesForm addNote={handleAddNote} />
    </div>
  );
}

export default App;
