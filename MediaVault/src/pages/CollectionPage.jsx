import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const items = useSelector((s) => s.collection.items);
  const dispatch = useDispatch();

  if (!items.length) return (
    <div className="empty-state" style={{ minHeight: "calc(100vh - 65px)" }}>
      <div style={{ fontSize: "3rem" }}>🗂</div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>Collection empty</p>
      <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Save media from Explore</p>
    </div>
  );

  return (
    <div style={{ minHeight: "calc(100vh - 65px)", paddingTop: "40px" }}>
      <div style={{ padding: "0 40px 24px", display: "flex", alignItems: "baseline", gap: "12px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
          Collection
        </h1>
        <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{items.length} items</span>
      </div>

      <div className="collection-grid">
        {items.map((item) => (
          <div key={item.id} className="media-card card-enter" style={{ position: "relative" }}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.type === "video" ? (
                <video src={item.src} autoPlay loop muted playsInline
                  style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
              ) : (
                <img src={item.thumbnail || item.src} alt={item.title}
                  style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
              )}
            </a>
            <div className="card-overlay">
              <span className="type-badge" style={{ alignSelf: "flex-start", marginBottom: "4px" }}>{item.type}</span>
              {item.title && (
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                  {item.title.slice(0, 50)}
                </p>
              )}
            </div>
            <button
              className="save-btn saved"
              onClick={() => dispatch(removeItem(item.id))}
              title="Remove"
              style={{ opacity: 1 }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
