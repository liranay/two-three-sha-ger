import { Badge, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";

export default function Sorter({ sortSelected }) {
  const handleSelect = (e) => {
    sortSelected(e);
  };

  const [value, setValue] = useState("Editor's choice");

  return (
    <div>
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
  );
}
