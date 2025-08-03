import { useState } from 'react';
import { register } from '../api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', bio: '' });

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await register(form);
  if (res.error) {
    alert(res.error);
  } else {
    alert('Registered!');
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Bio" onChange={(e) => setForm({ ...form, bio: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
