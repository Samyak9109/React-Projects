import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div className="grid-noise" style={{ minHeight: "calc(100vh - 65px)" }}>
      <div style={{ padding: "40px 0 24px" }}>
        <SearchBar />
        <Tabs />
      </div>
      <ResultGrid />
    </div>
  );
};

export default HomePage;
