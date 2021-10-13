import React, { Component } from 'react';
import useUsers from '../hooks/useUsers';
import Header from './Header';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useArtists from '../../hooks/useArtists';
import UserItem from './UserItem';

export default function UserList() {
  const { users, loading } = useUsers();
  const { artists } = useArtists(localStorage.getItem('ACCESS_TOKEN'));
  // const hideUser = users.map((users) => users.id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Header />
      <h1 className={styles.doods}>List o&apos; doods</h1>

      <ul className={styles.users_container}>
        {users.map((user) => (
          <li className={styles.userlist} key={user.id}>
            <Link to="/users/:id">
              <UserItem
                displayName={user.displayName}
                image={user.image}
                artist_a={user.artist_a}
                artist_b={user.artist_b}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
      genres: PropTypes.string,
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string.isRequired,
      refresh_token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
