import React from 'react';
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ title, fileName, tags }) {
  const url = `${window.location.origin}/photos/${fileName}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  // URLs for sharing on different social media platforms
  const socialMediaShareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    // Add more platforms if needed
  };

  const handleShareToAll = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: title,
          url: url,
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      Object.values(socialMediaShareUrls).forEach(shareUrl => {
        window.open(shareUrl, '_blank');
      });
    }
  };

  return (
    <div className="post" style={{ borderRadius: "8px", background: "var(--background-panel-day, #FFF)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
      <img className="post__image" src={url} alt={title} />
      <h4 className="post__text"><strong>{title}</strong></h4>
      <h6>{tags.map(tag => `#${tag} `)}</h6>

      <div style={{ display: "flex", margin: "15px" }}>
        <ShareIcon style={{ marginLeft: "5px" }} onClick={handleShareToAll} />
        <BookmarkBorderIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Post;
