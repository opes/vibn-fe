const spotifyURL = 'https://api.spotify.com/v1/me/top';

export const fetchTopArtists = async (token) => {
  const res = await fetch(`${spotifyURL}/artists`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.items;
};

export const tokenRefresh = async (refresh_token) => {
  return fetch(
    `https://vibn.herokuapp.com/api/v1/auth/refresh_token?refresh_token=${refresh_token}`
  ).then((res) => res.json());
};
