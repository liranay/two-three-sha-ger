import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* Image */}
      <img className="post__image" src={imageUrl} alt="" />
      {/* Username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      <div style={{ display: "flex", margin:"15px" }}>
        <FavoriteBorderIcon />
        <ShareIcon style={{marginLeft: "5px"}}/>
        <CommentIcon style={{marginLeft: "5px"}}/>
        <BookmarkBorderIcon style={{marginLeft: "5px"}}/>
      </div>
    </div>
  );
}

export default Post;
