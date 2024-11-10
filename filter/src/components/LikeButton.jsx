import { useState } from "react";

function LikeButton() {
  let [likeCount, setLikeCount] = useState(0);
  let [dislikeCount, setDislikeCount] = useState(0);

  const like = (event) => {
    setLikeCount(likeCount + 1);
  };
  const dislike = (event) => {
    setDislikeCount(dislikeCount + 1);
  };
  const handleLike = (event, type) => {
    if (type === "like") {
      like(event);
    } else {
      dislike(event);
    }
  };

  const diff = likeCount - dislikeCount;

  return (
    <>
      <button className="btn" onClick={(event) => handleLike(event, "like")}>
        Лайк
      </button>
      <div>{diff}</div>
      <button
        className="btn btn-primary"
        onClick={(event) => handleLike(event, "dislike")}
      >
        Дизлайк
      </button>
    </>
  );
}

export default LikeButton;
