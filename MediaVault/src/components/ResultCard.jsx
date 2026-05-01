import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/features/collectionSlice";

const ResultCard = ({ item, style }) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) =>
    state.collection.items.some((i) => i.id === item.id)
  );
  const [toast, setToast] = useState(false);

  const toggleSave = (e) => {
    e.preventDefault();
    if (saved) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(addItem(item));
      setToast(true);
      setTimeout(() => setToast(false), 1800);
    }
  };

  const mediaSrc = item.thumbnail || item.src;

  return (
    <>
      <div className="media-card card-enter" style={style}>
        <a href={item.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay loop muted playsInline
              style={{ width: "100%", display: "block", maxHeight: "340px", objectFit: "cover" }}
            />
          ) : (
            <img
              src={mediaSrc}
              alt={item.title || "media"}
              loading="lazy"
              style={{ width: "100%", display: "block", maxHeight: "340px", objectFit: "cover" }}
            />
          )}
        </a>

        <div className="card-overlay">
          <span className="type-badge" style={{ alignSelf: "flex-start", marginBottom: "6px" }}>
            {item.type}
          </span>
          {item.title && (
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.4, fontFamily: "var(--font-body)" }}>
              {item.title.slice(0, 60)}{item.title.length > 60 ? "…" : ""}
            </p>
          )}
        </div>

        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={toggleSave}
          title={saved ? "Remove" : "Save"}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      {toast && (
        <div className="toast">Saved to collection ✓</div>
      )}
    </>
  );
};

export default ResultCard;
