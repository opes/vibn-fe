import React from 'react';
import styles from '../../styles/userlist.css';
import PropTypes from 'prop-types';
import useUsers from '../../hooks/useUsers';

export default function UserItem() {
  const { user } = useUsers();

  return (
    <div>
      <section className={styles.user_info}>
        <img
          className={styles.user_img}
          src={user.image}
          alt={user.displayName}
        />
        <h2 className={styles.user_name}>{user.displayName}</h2>
      </section>
    </div>
  );

UserItem.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
