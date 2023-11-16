import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Tags from "./components/FilterAndSorter";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentList from "./components/ContentList";

function App() {
  function tagSelected(tag) {
    console.log(`selected Tag:${tag}`);
  }

  return (
    <div className="App">
      <Menu />
      <div style={{ marginTop: "10px" }}>
        <Tags tagSelected={tagSelected} />
      </div>
      <ContentList />
    </div>
  );
}

export default App;
