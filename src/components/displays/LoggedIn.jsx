import React from 'react';
import { useHistory } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import styles from '../../styles/loggedin.css';
import linebreak from '../../assets/linebreak.png';
import vibn from '../../assets/vibn.png';

export default function LoggedIn({ match }) {
  const history = useHistory();
  // first we set the tokens to local storage
  localStorage.setItem('REFRESH_TOKEN', match.params.refresh_token);
  localStorage.setItem('ACCESS_TOKEN', match.params.access_token);
  localStorage.setItem('CURRENT_USER_ID', match.params.id);

  // then we update state
  const { userObject } = useUsers();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/user/${userObject.id}/dash`);
    // history.push(`/user/${userObject.id}/dash`);
  };

  return (
    <div className={styles.login_body}>
      <img className={styles.vibn_logo} src={vibn} alt="vibn logo" />
      <p className={styles.vibn_desc}>Find your music match</p>
      <img className={styles.linebreak} src={linebreak} alt="linebreak" />
      <form onSubmit={handleSubmit}>
        <button className={styles.login_btn}>Sign in</button>
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
