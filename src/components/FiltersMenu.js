import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { textAlign, padding } from "@mui/system"; import
Button from 'react-bootstrap/Button';
import { setConstantValue } from "typescript";
import { filter } from "lodash";


function FiltersMenu() {

  const filters = [
    {
      title: "Language",
      options: ["Arabic", "English", "Hebrew"]
    }, {
      title: "Rating",
      options: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]
    }, {
      title: "Theme",
      options: ["aaa", "vvv", "ddd"]
    },
  ]

  function flattenedFilters() {
    let flattened_filters = [];
    filters.map((filter) => { flattened_filters = [...flattened_filters, filter.options] })
    return flattened_filters
  }


  function countFilters() {
    let num_filters = 0;
    filters.map((filter) => { num_filters += filter.options.length })
    return num_filters
  }

  const [selected, setSelected] = useState([], []);
  const [checkedState, setCheckedState] = useState(
    new Array(countFilters()).fill(false)
  );

  function handleOnChange(e) {
    let value = e.target.value;
    let newSelected = []
    if (e.target.checked) {
      newSelected = [...selected, value];
    } else {
      let i = flattened.indexOf(value);
      newSelected = newSelected.filter(option => !option.equals(value))
    }
    console.log(newSelected);
    setSelected(newSelected);

    let flattened = flattenedFilters();
    let i = flattened.indexOf(value);
    let newcheckedState = checkedState;
    newcheckedState[i] = !checkedState[i];
    setCheckedState(newcheckedState);
  }



  return (
    <Form>
      <Accordion defaultActiveKey="0" alwaysOpen style={{ margin: "6px" }}>
        {filters.map((filter, index) => (
          <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header> {filter.title} </Accordion.Header>
            <Accordion.Body>
              {/* <FilterOptions options={filter.options} /> */}
              <ListGroup>
                {filter.options.map((option, index) => (
                  <ListGroup.Item style={{ textAlign: "left" }}>
                    <div key={index}>
                      <Form.Check // prettier-ignore
                        type='checkbox'
                        label={option}
                        value={option}
                        checked={false}
                        onChange={handleOnChange}
                      />
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <span style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
        <Button variant="secondary" style={{ margin: "6px 6px" }}>Apply</Button>
        <Button variant="secondary" style={{ margin: "0px 6px 6px" }}>Clear</Button>
      </span>
    </Form>
  );
}

export default FiltersMenu;