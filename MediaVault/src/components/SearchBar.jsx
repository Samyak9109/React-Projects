import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(setQuery(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={submitHandler} style={{ display: "flex", gap: "12px", padding: "0 40px", position: "relative" }}>
      <div style={{ position: "relative", flex: 1 }}>
        <svg
          style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          className="search-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search photos, videos, GIFs..."
          required
        />
      </div>
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
