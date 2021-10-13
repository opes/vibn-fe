// const URL = 'https://vibn.herokuapp.com/api/v1/';
const URL = 'http://localhost:7890/api/v1/';

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

export const fetchUserArtists = async (id) => {
  const res = await fetch(`${URL}users/${id}/artists`);
  const artistsArray = await res.json();

  return artistsArray;
};

export const postUserArtists = async (payload) => {
  const res = await fetch('http://localhost:7890/api/v1/users/artists', {
    method: 'POST',
    body: payload
  });

  const body = await res.json();
  return body;
};
