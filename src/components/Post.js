import React from "react";
import { Image } from "react-bootstrap";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const handleOnClick = async () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;
    const url = `${protocol}//${hostname}:${port}/photos/${fileName}`;

    // Prepare the data for sharing
    const data = {
      title,
      text: title,
      url,
    };

    // Check if the Web Share API is available
    if (navigator.share && navigator.canShare(data)) {
      try {
        await navigator.share(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error('Error sharing content:', err);
          customShareFallback(data);
        }
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      customShareFallback(data);
    }
  };

  // Custom Share Fallback Function
  const customShareFallback = (data) => {
    // Implement your custom sharing logic here
    // For example, show a modal with share buttons or copy link to clipboard
    alert(`Share this link: ${data.url}`);
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
      <img className="post__image" src={`/photos/${fileName}`} alt={title} />
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
