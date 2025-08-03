import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost } from '../api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(null);

  const fetchPosts = async () => {
    try {
      const allPosts = await getPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const tokenPayload = JSON.parse(atob(token.split('.')[1]));
        setUserId(tokenPayload?.userId || null);
      } catch (e) {
        console.error('Invalid token format');
      }
    }
  }, []);

  const handlePost = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Please log in first.');
    if (!content.trim()) return alert('Post content cannot be empty!');

    try {
      await createPost({ content }, token);
      await fetchPosts();
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!id || id.length !== 24) return alert('Invalid post ID');

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await deletePost(id, token);
      await fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  return (
    <div className="home-container">
      <h2>Create a Post</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handlePost}>Post</button>

      <hr />

      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <p>"{post.content}"</p>
          <small>
            {post.author ? (
              <>
                By{' '}
                <Link to={`/profile/${post.author._id}`}>
                  {post.author.name}
                </Link>{' '}
                at {new Date(post.createdAt).toLocaleString()}
              </>
            ) : (
              <i>Unknown author</i>
            )}
          </small>
          {userId === post.author?._id && (
            <>
              <br />
              <button
                onClick={() => handleDelete(post._id)}
                className="delete-button"
                style={{ marginTop: '5px' }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
