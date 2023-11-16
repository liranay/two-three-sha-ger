export default function Tag({ value }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
          margin: "8px",
          height: "40px",
          textAlign: "center",
        }}
        class="badge rounded-pill bg-primary"
      >
        {value}
      </div>
    );
  }
  