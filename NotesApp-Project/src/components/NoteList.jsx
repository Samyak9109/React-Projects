import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold">Recent Notes</h1>
      <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
        {notes.map((note, idx) => (
          <NoteCard key={idx} note={note} onDelete={() => onDelete(idx)} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
