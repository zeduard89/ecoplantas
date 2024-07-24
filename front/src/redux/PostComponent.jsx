import React, { useEffect, useState } from 'react';
import obtenerDatosPosts from './Auxiliar'; // Ajusta la ruta según la ubicación de tu archivo api.js

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const datosPosts = await obtenerDatosPosts();
         console.log(datosPosts)
        setPosts(datosPosts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 
  

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.imgUrl && <img src={post.imgUrl} alt={post.title} />}
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;