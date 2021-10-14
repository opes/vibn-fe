import React from 'react';
import useOtherUser from '../../hooks/useOtherUser';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import pass from '../../assets/pass-icon.png';
import msg from '../../assets/msg-user-icon.png';
import Header from './Header';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useArtists from '../../hooks/useArtists';

const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function UserDetail() {
  const { id } = useParams();
  const { userObject, loading } = useOtherUser(id);
  const { artistsArray } = useUserArtists(localStorage.getItem('ACCESS_TOKEN'));

  if (loading) return <img className={styles.spinner} src={spinner} alt="spinner" />;

  return (
    <div className={styles.profile_main}>
      <Header />
      <section className={styles.profile}>
        <a href={userObject.profileURL} className={styles.profile_link}>
          <img
            className={styles.user_img}
            alt="user image"
            src={userObject.image}
          />
        </a>
        <h2 className={styles.user_name}>{userObject.displayName}</h2>
      </section>

      <section className={styles.match_nav}>
        <Link to="/users">
          <img src={pass} className={styles.pass_btn} />
        </Link>
        <Link to={`/user/${id}/create/convo`}>
          <img src={msg} className={styles.msg_btn} />
        </Link>
      </section>

      <img src={linebreak} alt="linebreak" />
      <h3 className={styles.top_label}>
        {userObject.displayName}&apos;s Top Artists
      </h3>

      <section className={styles.artists_container}>
        <ul className={styles.artists_list}>
          {artistsArray
            ? artistsArray.map((artist) => (
              <li className={styles.artists_item} key={artist.id}>
                <a href={artist.external_urls.spotify} alt={artist.name}>
                  <img className={styles.artist_img} src={artist.images[1].url} />
                </a>
                <p className={styles.artist_name}>
                  {artist.name}
                </p>
              </li>
            ))
            : 'No Top Artists Found'}
        </ul>
      </section>
    </div>
  );
}

UserDetail.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      spotify: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
