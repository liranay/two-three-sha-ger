import React, { useState } from "react";
import { Image } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const handleOnClick = async () => {
    if (!navigator.share) {
      alert("Your browser does not support sharing");
    }
    if (navigator.share) {
      const protocol = window.location.protocol;
      const hostname = window.location.hostname;
      const port = window.location.port;
      const url = `${protocol}//${hostname}:${port}/photos/${fileName}`;
      const rawContent = await fetch(url);
      const blob = await rawContent.blob();
      const data = {
        files: [
          new File([blob], fileName, {
            type: "image/png",
          }),
        ],
        title,
        text: title,
      };

      if (navigator.canShare(data)) {
        try {
          await navigator.share(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        } finally {
          return;
        }
      } else {
        alert("can't share");
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
    >import React, { useState } from "react";
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

      <img className="post__image" src={`/photos/${fileName}`} alt="dsa" />
      <h4 className="post__text">
        <strong>{title}</strong>
      </h4>
      <h6>{tags.map((tag) => `#${tag} `)}</h6>

      <div style={{ display: "flex", margin: "15px" }}>
        {/* <FavoriteBorderIcon /> */}
        <ShareIcon style={{ marginLeft: "5px" }} onClick={handleOnClick} />
        {/* <CommentIcon style={{ marginLeft: "5px" }} /> */}
        <BookmarkBorderIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Post;
