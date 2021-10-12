const URL = 'http://localhost:7890/api/v1/auth/verify';

export const fetchCurrentUser = async () => {
  const res = await fetch(URL, {
    credentials: 'include',
  });
  const user = await res.json();

  return user;
};
