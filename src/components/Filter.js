import FilterAltIcon from "@mui/icons-material/FilterAlt";
import * as model from "../model/model";
import Tag from "./Tag";

function Filter({tagSelected}) {
  const tags = model.getTags();

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
          flexDirection: "row-reverse",
        }}
      >
      </div>
    </div>
  );
}

export default Filter;
