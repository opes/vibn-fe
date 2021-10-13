import React from 'react';
import styles from '../../styles/userlist.css';
import PropTypes from 'prop-types';

export default function UserItem({ displayName, image }) {

  return (
    <div>
      <section className={styles.user_info}>
        <img className={styles.user_img} src={image} alt={displayName} />
        <h2 className={styles.user_name}>{displayName}</h2>
      </section>
    </div>
  );
}

UserItem.propTypes = {
  displayName: PropTypes.string,
  image: PropTypes.string,
};
