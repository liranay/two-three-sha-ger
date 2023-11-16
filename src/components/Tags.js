import Badge from "react-bootstrap/Badge";

function Tag() {
  return (
    <h1 style={{margin: "10px"}}>
      <Badge bg="primary">New</Badge>
    </h1>
  );
}

function BasicExample() {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
    </div>
  );
}

export default BasicExample;
