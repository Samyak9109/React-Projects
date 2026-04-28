import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() && !details.trim()) return;
    onAddNote({ title, details });
    setTitle("");
    setDetails("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
    >
      <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>
      <input
        type="text"
        placeholder="Enter Notes Heading"
        className="px-5 w-full font-medium py-2 border-2 border-white outline-none rounded bg-transparent text-white placeholder:text-gray-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="px-5 w-full font-medium h-32 py-2 border-2 border-white outline-none rounded bg-transparent text-white placeholder:text-gray-400"
        placeholder="Write Details here"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
