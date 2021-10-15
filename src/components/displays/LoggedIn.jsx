import React from 'react';
import { useHistory } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import styles from '../../styles/loggedin.css';
import linebreak from '../../assets/linebreak.png';
import vibn from '../../assets/vibn.png';

export default function LoggedIn({ match }) {
  const history = useHistory();
  localStorage.setItem('REFRESH_TOKEN', match.params.refresh_token);
  localStorage.setItem('ACCESS_TOKEN', match.params.access_token);
  localStorage.setItem('CURRENT_USER_ID', match.params.id);

  const { userObject } = useUsers();

  const handleSubmit = (event) => {
    event.preventDefault();
    // history.push(`https://vibn.netlify.app/user/${userObject.id}/dash`);
    history.push(`/user/${userObject.id}/dash`);
  };

  const handleSignout = (event) => {
    event.preventDefault();
    localStorage.setItem('REFRESH_TOKEN', '');
    localStorage.setItem('ACCESS_TOKEN', '');
    localStorage.setItem('CURRENT_USER_ID', '');
    window.localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className={styles.login_body}>
      <img className={styles.vibn_logo} src={vibn} alt="vibn logo" />
      <p className={styles.vibn_desc}>Find your music match</p>
      <img className={styles.linebreak} src={linebreak} alt="linebreak" />
      <form onSubmit={handleSubmit}>
        <button className={styles.login_btn}>Sign in</button>
      </form>
      <form onSubmit={handleSignout}>
        <button className={styles.logout_btn}>Sign Out</button>
      </form>
    </div>
  );
}

LoggedIn.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string.isRequired,
      refresh_token: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
