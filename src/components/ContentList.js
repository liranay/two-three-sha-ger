import { useState } from "react";
import Post from "./Post";
import * as model from "../model/model";

function ContentList({ posts }) {
  return (
    <div className="timeline">
      {posts.map((post) => (
        <Post
          title={post.title}
          description={post.description}
          fileName={post.filename}
          tags={post.tags}
        />
      ))}
    </div>
  );
}

export default ContentList;
