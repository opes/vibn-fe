import React from 'react';
import styles from '../../styles/signin.css';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'http://localhost:7890/api/v1/auth/login';
  };

  return (
    <div className={styles.signin_body}>
      <h2 className={styles.vibn}>vibn</h2>
      <p className={styles.vibn_desc}>Find your music match</p>
      <form onSubmit={handleSubmit}>
        <button className={styles.signin_btn}>Sign in with Spotify</button>
      </form>
    </div>
  );
}
