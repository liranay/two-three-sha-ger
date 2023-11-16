import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Menu from "./components/Menu";
import FiltersMenu from "./components/FiltersMenu";
import Filter from "./components/Filter";
import Sorter from "./components/Sorter";
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
        <Filter tagSelected={tagSelected} />
      </div>
      <div>
        <Sorter sortSelected={sortSelected} />
        <span style={{ marginLeft: "20px" }}>33 posts found</span>
      </div>
      <ContentList />

      <FiltersMenu />
    </div>
  );
}

export default App;
