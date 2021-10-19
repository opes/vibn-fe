import React, { useEffect } from 'react';
import useArtists from '../../hooks/useArtists';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import DemoHeader from './DemoHeader';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import { postUserArtists } from '../../services/userAuth';
import logo from '../../assets/spotify-icon.png';

const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function DemoProfile() {
  const { loading } = useLoggedInUser();
  const { artistsArray } = useArtists(localStorage.getItem('ACCESS_TOKEN'));

  useEffect(() => {
    postUserArtists(artistsArray);
  }, [artistsArray]);

  if (loading) {
    return <img className={styles.spinner} src={spinner} alt="spinner" />;
  }

  return (
    <div className={styles.profile_main}>
      <DemoHeader />
      <section className={styles.profile}>
        <img
          className={styles.demo_pic}
          alt="user image"
          src="https://i.pinimg.com/originals/55/89/5b/55895b77755f726e002422f77dbdc905.jpg"
        />
        <h2 className={styles.profile_name}>
        Welcome, Demo User!
        </h2>
        <a href="https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt?si=nrlbSqhNR5iIrJkFJW7N8A" className={styles.profile_link}>
          <img src={logo} className={styles.spotify_icon} />
        </a>
      </section>

      <img src={linebreak} alt="linebreak" className={styles.linebreak} />

      <h3 className={styles.top_label}>Your Top Artists</h3>

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
