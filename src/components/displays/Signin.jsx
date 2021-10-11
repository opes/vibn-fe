import React from 'react';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'http://localhost:7890/api/v1/auth/login';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Sign in with Spotify</button>
      </form>
    </div>
  );
}
