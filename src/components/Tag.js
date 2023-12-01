export default function Tag({ value, category, tagSelected }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "8px",
        padding: "4px",
        height: "auto",
        textAlign: "center",
        color: "#27272A",
        borderRadius: "8px",
        border: "1px solid #CDE0FE",
        background: "#CDE0FE",
      }}
      className="badge"
      onClick={() => {
        tagSelected(value);
      }}
    >
      <span>#{value}</span>
      <small style={{ color: "#005BE7" }}>{category}</small>
    </div>
  );
}
