import { useEffect, useState } from 'react';
import { fetchUserById } from '../services/userAuth';

export default function useOtherUser(id) {
  const [userObject, setUserObject] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchUserById(id)
      .then((user) => setUserObject(user))
      .finally(() => setloading(false));
  }, []);

  return { userObject, loading };
}
