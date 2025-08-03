import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../api';

export default function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserProfile(id).then(setData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{data.user.name}</h2>
      <p><b>Email:</b> {data.user.email}</p>
      <p><b>Bio:</b> {data.user.bio}</p>
      <h3>Posts:</h3>
      {data.posts.map(post => (
        <div key={post._id} style={{ marginBottom: '10px' }}>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
