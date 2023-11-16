export default function Tag({ value, tagSelected }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "8px",
        height: "40px",
        textAlign: "center",
        color: "#27272A",
        borderRadius: "8px",
        border: "1px solid #CDE0FE",
        background: "#CDE0FE",
      }}
      class="badge"
      onClick={() => {
        tagSelected(value);
      }}
    >
      #{value}
    </div>
  );
}
