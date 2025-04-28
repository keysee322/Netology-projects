import refresh from "./../refresh.svg";
import NotesItem from "./NotesItem";

function NotesContainer({ notes, deleteNote, fetchNotes }) {
  return (
    <>
      <div className="notes-header">
        <h2>Notes</h2>
        <button className="btn-refresh" onClick={fetchNotes}>
          <img src={refresh} alt="Обновить" />
        </button>
      </div>

      <div className="notes-container">
        {notes.map((item) => (
          <NotesItem key={item.id} data={item} deleteNote={deleteNote} />
        ))}
      </div>
    </>
  );
}

export default NotesContainer;
