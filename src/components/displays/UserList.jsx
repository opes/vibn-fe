import React, { Component } from 'react';
// import useUsers from '../hooks/useUsers';
import Header from './Header';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserList extends Component {
  render() {
    // const { userObject, loading } = useUsers(id);
    const hideUser = users.map(users => users.)

    // if (loading) {
    //   return <h1>Loading...</h1>;
    // }

    return (
      <div>
        <Header />
        <h1 className={styles.doods}>List o&apos; doods</h1>

  <section className={styles.users_container}>
            {userObject.map((user) => (

                    <Link to="/users/:id">
                      <UserItem 
                        displayName={users.displayName}
                        
                      />
                    </Link>
              ))}
          </section>
      </div>
    );
  }
};

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
}
