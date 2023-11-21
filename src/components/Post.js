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
	@@ -52,16 +49,14 @@ function Post({ title, fileName, tags }) {
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
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
