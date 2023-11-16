import React, { useState } from "react";
import { Image } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const handleOnClick = async () => {
    console.log();

    if (!navigator.share) {
      alert("Your browser does not support sharing");
    }
    if (navigator.share) {
      const url = `https://fbb6-62-219-65-138.ngrok-free.app/photos/${fileName}`;
      const rawContent = await fetch(url);
      const blob = await rawContent.blob();
      const data = {
        files: [
          new File([blob], "1.jpeg", {
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
    >
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
