import { useState } from "react";
import { Image } from "react-bootstrap";
import Post from "./Post";

function ContentList() {
//   const [contentList, setContentList] = useState([1, 2, 3]);
  const [posts, setPosts] = useState([
    {
      username: "blessingthebobo",
      caption: "Wow, I'm Amazing!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "godtello",
      caption: "Oh, I'm a God!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);

    return <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>


//     <div style={{ margin: "20px",justifyContent:"center", alignItems:"center" }}>
//       {contentList.map((content, index) => {
//         return (
//           <div class="card">
//             <Image
//               height={300}
//               width={300}
//               class="card-img-bottom"
//               src="https://placehold.co/600x400/EEE/31343C"
//             />
//             <div
//               //   class="card-body"
//               style={{
//                 position: "absolute",
//                 bottom: "90px",
//                 left: "10px",
//               }}
//             >
//               Some more card content
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
}

export default ContentList;
