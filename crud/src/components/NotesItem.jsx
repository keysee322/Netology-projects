import close from "./../close.svg";

function NotesItem({ data, deleteNote }) {
  return (
    <div className="notes-item">
      <button className="btn-close" onClick={() => deleteNote(data.id)}>
        <img src={close} alt="X" />
      </button>
      {data.content}
    </div>
  );
}

export default NotesItem;
