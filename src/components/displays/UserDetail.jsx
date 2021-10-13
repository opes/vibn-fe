import React from 'react';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
// import useArtists from '../../hooks/useArtists';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
// import icon from '../../assets/spotify-icon.png';
import Header from './Header';

export default function UserProfile() {
  const { userObject, loading } = useUsers();
  // const { artists } = userObject && useArtists(userObject.id);
  
  userObject && localStorage.setItem('VIEWED_USER', userObject.id);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.profile_main}>
      <Header />
      <section className={styles.profile}>
      </section>
      <img src={linebreak} alt="linebreak" />
      <h3 className={styles.top_label}>Your Top Artists</h3>
    </div>
  );
}

UserProfile.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      spotify: PropTypes.string,
      id: PropTypes.string,
      genres: PropTypes.string,
    })
  ),
};
