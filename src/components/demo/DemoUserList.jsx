import React from 'react';
import DemoHeader from './DemoHeader';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DemoUserItem from './DemoUserItem';
import useListOfUsers from '../../hooks/useListOfUsers';
import linebreak from '../../assets/linebreak.png';
import demoUsers from './DemoUsers.js';

const spinner =
  'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function DemoUserList() {
  const { loading } = useListOfUsers();
  console.log(demoUsers);
  const { user } = demoUsers;

  if (loading)
    return <img className={styles.spinner} src={spinner} alt="spinner" />;

  return (
    <div>
      <DemoHeader />
      <h1 className={styles.doods}>Find Your Music Match</h1>
      <img src={linebreak} alt="Line break" className={styles.linebreak} />
      <ul
        className={styles.users_container}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          fontFamily: 'Streamster',
          padding: '10px'
        }}
      >
        {demoUsers.map((user) => (
          <li
            className={styles.userlist}
            key={user.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '5px',
              padding: '5px',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              fontFamily: 'Streamster',
            }}
          >
            <Link to={`/demo-users/${user.id}`}>
              <DemoUserItem 
                displayName={user.displayName} 
                image={user.image}
                key={user.id}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

DemoUserList.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
