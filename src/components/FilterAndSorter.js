import { Badge, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import * as model from "../model/model";
import Tag from "./Tag";

function Tags() {
  const [value, setValue] = useState("Editor's choice");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
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
            return <Tag value={tag} />;
          })}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
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
  );
}

export default Tags;
