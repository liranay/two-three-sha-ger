import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const [isSharing, setIsSharing] = useState(false);

  const handleOnClick = async () => {
    if (isSharing) {
      console.log("Wait for the current share operation to complete.");
      return;
    }

    if (!navigator.share) {
      alert("Your browser does not support sharing");
      return;
    }

    setIsSharing(true); // Start sharing

    const url = `${window.location.origin}/photos/${fileName}`;
    const data = {
      title,
      text: title,
      url,
    };

    if (navigator.canShare && navigator.canShare(data)) {
      try {
        await navigator.share(data);
        console.log('Content shared successfully');
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error('Error sharing content:', err);
        }
      } finally {
        setIsSharing(false); // Sharing is complete
      }
    } else {
      alert("Cannot share this content");
      setIsSharing(false); // Reset sharing status
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
      <img className="post__image" src={`/photos/${fileName}`} alt={title} />
      <h4 className="post__text">
        <strong>{title}</strong>
      </h4>
      <h6>{tags.map((tag) => `#${tag} `)}</h6>

      <div style={{ display: "flex", margin: "15px" }}>
        <ShareIcon style={{ marginLeft: "5px", opacity: isSharing ? 0.5 : 1 }} onClick={handleOnClick} />
        <BookmarkBorderIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Post;

