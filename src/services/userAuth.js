const URL = 'https://vibn.herokuapp.com/api/v1/';
// const URL = 'http://localhost:7890/api/v1/';

export const fetchCurrentUser = async () => {
  const res = await fetch(`${URL}auth/verify`, {
    credentials: 'include',
    mode: 'cors'
  });
  const user = await res.json();

  return user;
};

export const fetchCurrentUserById = async (id) => {
  const res = await fetch(`${URL}users/${id}`);
  const user = await res.json();

  return user;
};
