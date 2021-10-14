import React from 'react';
import styles from '../../styles/signin.css';
import vibn from '../../assets/vibn.png';
import linebreak from '../../assets/linebreak.png';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // window.push.href = 'https://vibn.herokuapp.com/api/v1/auth/login';
    window.location.href = 'http://localhost:7890/api/v1/auth/login';
  };

  return (
    <div className={styles.signin_body}>
      <img className={styles.vibn_logo} src={vibn} alt="vibn logo" />
      <p className={styles.vibn_desc}>Find your music match</p>
      <img className={styles.linebreak} src={linebreak} alt="linebreak" />
      <form onSubmit={handleSubmit}>
        <button className={styles.signin_btn}>Sign up with Spotify</button>
      </form>
    </div>
  );
}
