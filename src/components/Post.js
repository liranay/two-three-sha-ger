import React, { useState } from "react";
import {Image} from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, description, fileName }) {
  return (
    <div className="post">
      <img className="post__image" src={`/photos/${fileName}`} alt="dsa" />
      <h4 className="post__text">
        <strong>{title}</strong> 
      </h4>
      <div style={{ display: "flex", margin: "15px" }}>
        <FavoriteBorderIcon />
        <ShareIcon style={{ marginLeft: "5px" }} />
        <CommentIcon style={{ marginLeft: "5px" }} />
        <BookmarkBorderIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Post;
