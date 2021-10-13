import { useEffect, useState } from 'react';
import { fetchCurrentUserById } from '../services/userAuth';

export default function useLoggedInUser() {
  const [userObject, setUserObject] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchCurrentUserById(localStorage.getItem('CURRENT_USER_ID'))
      .then((user) => setUserObject(user))
      .finally(() => setloading(false));
  }, []);

  return { userObject, loading };
}
