import React from 'react';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import useArtists from '../../hooks/useArtists';

export default function UserProfile({ match }) {
  const { userObject, loading } = useUsers();
  const { artists } = useArtists(match.params.access_token);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img alt="user image" src={userObject.image} />
      <h2>Welcome, {userObject.displayName}!</h2>
      <a href={userObject.profileURL}>Spotify profile</a>

      <h3>Your Top Artists</h3>
      <ul>
        {userObject
          ? artists.map((artist) => (
            <li key={artist.id}>
              <a href={artist.url}>
                <div>{artist.name}</div>
              </a>
              <img src={artist.images[1].url} />
              <p>{artist.genres}</p>
            </li>
          ))
          : 'unavailable'}
        ;
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
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
