import React from 'react';
import { useHistory } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import styles from '../../styles/signin.css';

export default function LoggedIn({ match }) {
  const history = useHistory();
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
    
    // window.location.href = 'https://vibn.netlify.app/user/:id/dash';
    history.push(`/user/${userObject.id}/dash`);

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
