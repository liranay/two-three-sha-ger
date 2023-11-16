import { Badge, Dropdown } from "react-bootstrap";
import { useState } from "react";

function Tag() {
  return (
    <h1 style={{ margin: "10px" }}>
      <Badge bg="primary">New</Badge>
    </h1>
  );
}

function Tags() {
  const [tags, setTags] = useState([1, 2, 3]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {tags.map((tag, index) => {
          return <Tag />;
        })}
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
