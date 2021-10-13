import { useEffect, useState } from 'react';
import { fetchUserArtists } from '../services/userAuth';

export default function useUserArtists(id) {
  const [userArtists, setUserArtists] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchUserArtists(id)
      .then((userArtistArray) => setUserArtists(userArtistArray))
      .finally(() => setloading(false));
  }, []);

  return { userArtists, loading };
}
