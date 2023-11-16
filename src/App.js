import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import FiltersMenu from './components/FiltersMenu';
import Tags from "./components/FilterAndSorter";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentList from "./components/ContentList";

function App() {
  const [selectedTag, setSelectedTag] = [""];
  function tagSelected(tag) {
    setSelectedTag(tag);
  }

  return (
    <div className="App">
      <Menu />
      <div style={{ marginTop: "10px" }}>
        <Tags tagSelected={tagSelected} />
      </div>
      <ContentList />
        <FiltersMenu/>
    </div>
  );
}

export default App;
