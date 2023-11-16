import { Badge, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Tag() {
  return (
    <span
      style={{ margin: "8px", height: "40px", width: "100px" }}
      class="badge rounded-pill bg-primary"
    >
      Primary
    </span>
  );
}

function Tags() {
  const [tags, setTags] = useState([1, 2, 3]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <FilterAltIcon />

        <div style={{ display: "flex", justifyContent: "center" }}>
          {tags.map((tag, index) => {
            return <Tag />;
          })}
        </div>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Tags;
