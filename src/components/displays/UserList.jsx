import React, { Component } from 'react';
// import useUsers from '../hooks/useUsers';
import Header from './Header';
import styles from '../../styles/userlist.css';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class UserList extends Component {
  render() {
    // const { userObject, loading } = useUsers(id);

    // if (loading) {
    //   return <h1>Loading...</h1>;
    // }

    return (
      <div>
        <Header />
        <h1 className={styles.doods}>List o&apos; doods</h1>
      </div>
    );
  }
  /* <section className={styles.users_container}>
          <ul className={styles.users_list}>
            {userObject
              ? userObject.map((user) => (
                <li className={styles.users_item} key={user.id}>
                  <p>
                    <Link to="/users/:id">
                      <img
                        className={styles.user_img}
                        src={user.images[1].url}
                      />
                      <p className={styles.user_name}>{user.name}</p>
                    </Link>
                  </p>
                </li>
              ))
              : 'unavailable'}
          </ul>
        </section>
      </div>
    );
  }
// }

UserList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      spotify: PropTypes.string,
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
}; */
}
