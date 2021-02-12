import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Profile = ({ match }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const getUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
      .then((res) => {
        setUser(res.data[0]);
        console.log("res", res.data);
      })
      .catch((err) => console.log("Error", err));
  };

  const getPosts = async () => {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
      );

      setPosts(res.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getUser();
    getPosts();
  }, [match]);

  return (
    <div>
      {user.name}

      <span>Posts</span>
      <span>
        {posts.map((post, key) => (
          <Link to={`/post/comments/${post.id}`}>
            <span> {post.title}</span>
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Profile;
