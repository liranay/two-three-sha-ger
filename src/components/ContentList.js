import { useState, useEffect } from "react";
import Post from "./Post";
import * as model from "../model/model";

function ContentList() {
  // Initialize state to store posts data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch posts data from the API
    async function fetchPosts() {
      try {
        const response = await fetch("http://127.0.0.1:8000/hasbara/posts/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Update the state with the fetched posts data
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the fetchPosts function to fetch data when the component mounts
    fetchPosts();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="timeline">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          description={post.description}
          fileName={post.media}
          tags={post.tags}
        />
      ))}
    </div>
  );
}

export default ContentList;

