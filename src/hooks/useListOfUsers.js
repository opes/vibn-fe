import { useEffect, useState } from 'react';
import { fetchAllUsers } from '../services/userAuth';

export default function useListOfUsers() {
  const [allUsers, setAllUsers] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchAllUsers()
      .then((user) => setAllUsers(user))
      .finally(() => setloading(false));
  }, []);

  return { allUsers, loading };
}
