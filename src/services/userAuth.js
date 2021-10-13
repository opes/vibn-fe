const URL = 'https://vibn.herokuapp.com/api/v1/auth/verify';
// const URL = 'http://localhost:7890/api/v1/';

export const fetchCurrentUser = async () => {
  const res = await fetch(`${URL}auth/verify`, {
    credentials: 'include',
  });
  const user = await res.json();

  return user;
};

export const fetchCurrentUserById = async (id) => {
  const res = await fetch(`${URL}auth/${id}`);
  const user = await res.json();

  return user;
};
