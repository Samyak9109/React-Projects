import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const TABS = [
  { id: "photos", label: "Photos", icon: "🖼" },
  { id: "videos", label: "Videos", icon: "🎬" },
  { id: "gif",    label: "GIFs",   icon: "✨" },
];

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div style={{ display: "flex", gap: "8px", padding: "24px 40px 0" }}>
      {TABS.map(({ id, label, icon }) => (
        <button
          key={id}
          className={`tab-pill ${activeTab === id ? "active" : ""}`}
          onClick={() => dispatch(setActiveTabs(id))}
        >
          <span style={{ marginRight: "6px" }}>{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
