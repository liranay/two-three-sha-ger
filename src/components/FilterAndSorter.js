import { Badge, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import * as model from "../model/model";
import Tag from "./Tag";

function Tags({tagSelected, sortSelected}) {
  const [value, setValue] = useState("Editor's choice");

  const handleSelect = (e) => {
    sortSelected(e)
  };

  const [tags, setTags] = useState(model.tags);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FilterAltIcon style={{ fontSize: "40px" }} />

        <div style={{ display: "flex", overflow: "auto" }}>
          {tags.map((tag, index) => {
            return <Tag tagSelected={tagSelected} value={tag} />;
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <span style={{marginLeft: "20px"}}>33 posts found</span>

        <div style={{marginRight: "20px"}}>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {value}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Editor's choice">
                Editor's choice
              </Dropdown.Item>
              <Dropdown.Item eventKey="Latest">Latest</Dropdown.Item>
              <Dropdown.Item eventKey="Best rating">Best rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Tags;
