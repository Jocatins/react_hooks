import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState(1);

  const handleChange = () => {
    setIdFromClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromClick]);
  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleChange}>
        Get Post
      </button>
      <h3>{post.title}</h3>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} </li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
