import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { textAlign, padding } from "@mui/system";import
Button from 'react-bootstrap/Button';
import { setConstantValue } from "typescript";

function FilterOptions({ options }) {
  return (
    <ListGroup>
      {options.map((option) => (
        <ListGroup.Item style={{ textAlign: "left" }}>
          <div key={option}>
            <Form.Check // prettier-ignore
              type='checkbox'
              id={option}
              label={option}
            />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}


function FiltersMenu() {
  const [filters, filtersSet] = useState([
    {
      title: "Language",
      options: ["Arabic", "English", "Hebrew"]
    }, {
      title: "Rating",
      options: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]
    }, {
      title: "Theme",
      options: ["Arabic", "English", "Hebrew"]
    },
  ], []);


  return (
    <Form>
    <Accordion defaultActiveKey="0" alwaysOpen style={{ margin: "6px"}}>
      {filters.map((filter, index) => (
        <Accordion.Item eventKey={index.toString()}>
          <Accordion.Header> {filter.title} </Accordion.Header>
          <Accordion.Body>
            <FilterOptions options= {filter.options} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    <span style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%"}}>
      <Button variant="secondary"  style={{margin: "6px 6px"}}>Apply</Button>
      <Button variant="secondary" style={{margin: "0px 6px 6px"}}>Clear</Button>
    </span>
    </Form>
  );
}

export default FiltersMenu;