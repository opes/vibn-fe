import { useEffect, useState } from 'react';
import { fetchUserById } from '../services/userAuth';

export default function useCreateConvo(id) {
  const [convo, setConvo] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchUserById(id)
      .then((convo) => setConvo(convo))
      .finally(() => setloading(false));
  }, []);

  return { convo, loading };
}
