import React from 'react';
import useOtherUser from '../../hooks/useOtherUser';
// import useArtists from '../../hooks/useArtists';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import Header from './Header';
import { useParams } from 'react-router-dom';
// import { fetchUserById } from '../../services/userAuth';

export default function UserDetail() {
  const { id } = useParams();
  const { userObject, loading } = useOtherUser(id);
  // const { artists } = userObject && useArtists(userObject.id);

  if (loading) return <h3>Loading</h3>;

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

      <img src={linebreak} alt="linebreak" />
      <h3 className={styles.top_label}>
        {userObject.displayName}&apos;s Top Artists
      </h3>

      {/* <section className={styles.artists_container}>
        <ul className={styles.artists_list}>
          {artists
            ? artists.map((artist) => (
              <li className={styles.artists_item} key={artist.id}>
                <p>
                  <img className={styles.artist_img} src={artist.images[1].url} />
                </p>
                <p className={styles.artist_name}>
                  <a href={artist.external_urls.spotify} alt={artist.name}>
                    {artist.name}
                  </a>
                </p>
              </li>
            ))
            : 'No Top Artists Found'}
        </ul>
      </section> */}
    </div>
  );
}
