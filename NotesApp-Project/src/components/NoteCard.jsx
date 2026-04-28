const NoteCard = ({ note, onDelete }) => {
  return (
    <div
      className="flex flex-col justify-between relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-cover"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')",
      }}
    >
      <div className="overflow-y-auto flex-1 pr-1">
        <h3 className="leading-tight text-base font-bold break-words whitespace-normal">
          {note.title}
        </h3>
        <p className="mt-1 leading-tight text-xs font-semibold text-gray-600 break-words whitespace-normal">
          {note.details}
        </p>
      </div>

      <button
        onClick={onDelete}
        className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white mt-2 shrink-0"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
