import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGIFs, fetchVideos, fetchPhotos } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";

const Skeleton = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      padding: "0 40px",
    }}
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="skeleton"
        style={{ width: "calc(25% - 12px)", height: `${180 + (i % 3) * 60}px` }}
      />
    ))}
  </div>
);

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, error, loading } = useSelector(
    (s) => s.search,
  );

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || item.description || "",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: String(item.id),
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link || "",
            url: item.url,
          }));
        } else if (activeTab === "gif") {
          const response = await fetchGIFs(query);
          data = response.data.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || item.slug || "GIF",
            thumbnail: item.file.hd.jpg.url, // ← was item.file.hd.jpg (object, not string)
            src: item.file.hd.gif.url, // ← was item.file.hd.gif (object, not string)
            url: item.file.hd.gif.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (!query)
    return (
      <div className="empty-state">
        <div style={{ fontSize: "3rem" }}>🔍</div>
        <p style={{ fontSize: "1.1rem" }}>Search for anything</p>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
          Photos · Videos · GIFs
        </p>
      </div>
    );

  if (loading) return <Skeleton />;

  if (error)
    return (
      <div className="empty-state">
        <div style={{ fontSize: "2rem" }}>⚠️</div>
        <p>Something went wrong</p>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{error}</p>
      </div>
    );

  if (!results.length)
    return (
      <div className="empty-state">
        <div style={{ fontSize: "2rem" }}>😶</div>
        <p>No results for "{query}"</p>
      </div>
    );

  return (
    <div className="masonry" style={{ marginTop: "24px" }}>
      {results.map((item, idx) => (
        <div key={item.id} className="masonry-item">
          <ResultCard
            item={item}
            style={{ animationDelay: `${(idx % 12) * 40}ms` }}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
