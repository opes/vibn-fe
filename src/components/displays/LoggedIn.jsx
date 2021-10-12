import React from 'react';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import styles from '../../styles/signin.css';

export default function LoggedIn({ match }) {

  // first we set the tokens to local storage
  localStorage.setItem('REFRESH_TOKEN', match.params.refresh_token);
  localStorage.setItem('ACCESS_TOKEN', match.params.access_token);
  localStorage.setItem('CURRENT_USER_ID', match.params.id);
  
  // then we update state
  const { userObject } = useUsers();
  
  console.log('DA USERZZZZZZZ');
  console.log(userObject ? userObject : 'you suck');

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.location.href = 'https://vibn.herokuapp.com/api/v1/auth/login';
    window.location.href = 'http://localhost:7891/user/:id/dash';
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className={styles.signin_btn}>Continue</button>
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
