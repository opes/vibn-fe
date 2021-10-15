import React from 'react';
import Header from './Header';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import useListOfUsers from '../../hooks/useListOfUsers';
import linebreak from '../../assets/linebreak.png';
// import useUserArtists from '../../hooks/useUserArtists';
const spinner =
  'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function UserList() {
  const { allUsers, loading } = useListOfUsers();
  // const { userArtists } = useUserArtists(localStorage.getItem('CURRENT_USER_ID'));
  // console.log(userArtists ? userArtists : 'the rain in spain stays mainly on the plane');

  if (loading)
    return <img className={styles.spinner} src={spinner} alt="spinner" />;

  return (
    <div>
      <Header />
      <h1 className={styles.doods}>Find Your Music Match</h1>
      <img src={linebreak} alt="Line break" className={styles.linebreak} />
      <ul
        className={styles.users_container}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {allUsers.map((user) => (
          <li
            className={styles.userlist}
            key={user.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Link to={`/users/${user.id}`}>
              <UserItem displayName={user.displayName} image={user.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
