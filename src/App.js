import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import FiltersMenu from "./components/FiltersMenu";
import Tags from "./components/FilterAndSorter";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentList from "./components/ContentList";
import { useState } from "react";

function App() {
  const [selectedTag, setSelectedTag] = useState();
  const [selectedSort, setSelectedSort] = useState();

  function tagSelected(tag) {
    console.log(`selected tag ${tag}`);
    setSelectedTag(tag);
  }

  function sortSelected(sort) {
    console.log(`selected sort ${sort}`);
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <Menu />
      <div style={{ marginTop: "10px" }}>
        <Tags tagSelected={tagSelected} sortSelected={sortSelected} />
      </div>
      <ContentList />
      <FiltersMenu />
    </div>
  );
}

export default App;
