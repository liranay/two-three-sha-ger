import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import _ from "lodash";

import Menu from "./components/Menu";
import FiltersMenu from "./components/FiltersMenu";
import Filter from "./components/Filter";
import Sorter from "./components/Sorter";
import ContentList from "./components/ContentList";
import { useState } from "react";
import * as model from "./model/model";

function App() {
  const [selectedTag, setSelectedTag] = useState();
  const [selectedSort, setSelectedSort] = useState();
  const [posts, setPosts] = useState(model.posts);

  function tagSelected(tag) {
    console.log(`selected tag ${tag}`);
    setSelectedTag(tag);
    setPosts(model.posts.filter((post)=>{
      return post.tags.includes(tag);
    }));
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <span
          style={{
            marginLeft: "20px",
            color: "#005BE7",
            fontWeight: "bold"
          }}
        >
          {posts.length ? `${posts.length} posts found` : "no posts found"}
        </span>
        <div style={{ marginRight: "20px" }}>
          <Sorter sortSelected={sortSelected} />
        </div>
      </div>
      <ContentList posts={_.shuffle(posts)}/>

      {/* <FiltersMenu /> */}
    </div>
  );
}

export default App;
