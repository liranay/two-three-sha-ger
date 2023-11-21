import React from "react"; // You don't need to import useState if you're not using it
import { Image } from "react-bootstrap";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const handleOnClick = async () => {
    if (!navigator.share) {
      alert("Your browser does not support sharing");
      return; // Return early if sharing is not supported
    }

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;
    const url = `${protocol}//${hostname}:${port}/photos/${fileName}`;

    try {
      const rawContent = await fetch(url);

      if (!rawContent.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await rawContent.blob();
      const data = {
        files: [new File([blob], fileName, { type: "image/png" })],
        title,
        text: title,
      };

      if (navigator.canShare(data)) {
        await navigator.share(data);
      } else {
        alert("Can't share");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err.name, err.message);
      }
    }
  };

  return (
    <div
      className="post"
      style={{
        borderRadius: "8px",
        background: "var(--background-panel-day, #FFF)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img className="post__image" src={`/photos/${fileName}`} alt="dsa" />
      <h4 className="post__text">
        <strong>{title}</strong>
      </h4>
      <h6>{tags.map((tag) => `#${tag} `)}</h6>

      <div style={{ display: "flex", margin: "15px" }}>
        <ShareIcon style={{ marginLeft: "5px" }} onClick={handleOnClick} />
        <BookmarkBorderIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Post;
