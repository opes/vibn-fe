import { useEffect, useState } from 'react';
import { fetchTopArtists } from '../services/spotifyAPI';

export default function useArtists(id) {
  const [userArtists, setUserArtists] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchTopArtists(id)
      .then((userArtistArray) => setUserArtists(userArtistArray))
      .finally(() => setloading(false));
  }, []);

  return { userArtists, loading };
}
