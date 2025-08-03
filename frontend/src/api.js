const API = 'http://localhost:5000/api';

export const register = async (data) =>
  fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const login = async (data) =>
  fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const getPosts = async () =>
  fetch(`${API}/posts`).then(res => res.json());

export const createPost = async (data, token) =>
  fetch(`${API}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const getUserProfile = async (id) =>
  fetch(`${API}/users/${id}`).then(res => res.json());
export const deletePost = async (id, token) => {
  const res = await fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const contentType = res.headers.get('content-type');
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
  if (contentType && contentType.includes('application/json')) {
    return res.json();
  } else {
    return { message: 'Deleted' };
  }
};
