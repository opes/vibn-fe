const spotifyURL = 'https://api.spotify.com/v1/me/top';

export const fetchTopArtists = async (token) => {
  const res = await fetch(`${spotifyURL}/artists`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const thing = await res.json();
  return thing.items;
};

export const tokenRefresh = async (refresh_token) => {
  return fetch(
    `http://localhost:7890/api/v1/auth/refresh_token?refresh_token=${refresh_token}`
  ).then((res) => res.json());
};
