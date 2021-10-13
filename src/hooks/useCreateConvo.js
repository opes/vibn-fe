import { useEffect, useState } from 'react';
import { fetchCurrentUserById } from '../services/userAuth';

export default function useCreateConvo(id) {
  const [convo, setConvo] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchCurrentUserById(id)
      .then((convo) => setConvo(convo))
      .finally(() => setloading(false));
  }, []);

  return { convo, loading };
}
