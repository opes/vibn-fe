import React from 'react';
import Header from './Header';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import useListOfUsers from '../../hooks/useListOfUsers';
import linebreak from '../../assets/linebreak.png';
// import useUserArtists from '../../hooks/useUserArtists';

export default function UserList() {
  const { allUsers, loading } = useListOfUsers();
  // const { userArtists } = useUserArtists(localStorage.getItem('CURRENT_USER_ID'));
  // console.log(userArtists ? userArtists : 'the rain in spain stays mainly on the plane');
  
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Header />
      <h1 className={styles.doods}>List o&apos; doods</h1>
      <img src={linebreak} alt="Line break" />
      <ul className={styles.users_container}>
        {allUsers.map((user) => (
          <li className={styles.userlist} key={user.id}>
            <Link to="/users/:id">
              <UserItem
                displayName={user.displayName}
                image={user.image}
              />
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
