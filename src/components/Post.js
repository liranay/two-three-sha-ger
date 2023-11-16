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
          alert(err);
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        } finally {
          return;
        }
      } else {
        alert("can't share");
      }

      // await navigator
      //   .share({
      //     files: [file],
      //     title: `test`,
      //     text: `Check out test`,
      //     // url: `https://fbb6-62-219-65-138.ngrok-free.app/public/${fileName}`,
      //   })
      //   .then(() => {
      //     alert("Something went wrong sharing the blog");
      //     console.log("Successfully shared");
      //   })
      //   .catch((error) => {
      //     alert(`Something went wrong sharing the blog ${error}`);
      //     console.error("Something went wrong sharing the blog", error);
      //   });
    }
  };

  return (
    <div className="post">
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
