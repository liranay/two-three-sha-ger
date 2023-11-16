// import Badge from "react-bootstrap/Badge";
import { useState } from "react";

function ContentList() {
    const [contentList, setContentList] = useState([1,2,3]);

  return <div style={{margin: "20px"}}>
    {
        contentList.map((content, index) => {
            return <h1>CONTENT</h1>
        })
    }
  </div>;
}

export default ContentList;
