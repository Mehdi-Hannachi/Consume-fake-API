import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ match }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`
      );

      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, [match]);

  return (
    <div>
      {comments.map((comment) => (
        <span>{comment.body}</span>
      ))}
    </div>
  );
};

export default Comments;
