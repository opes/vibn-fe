const artistsURL = './DemoArtists.js';
const usersURL = './DemoUsers.js';

export function findById(demoUserArray, demoId) {
  const numberId = Number(demoId);
  for (const item of demoUserArray) {
    if (item.id === numberId) return item;
  }

  return null;
}

export const fetchAllDemoUsers = async () => {
  const res = await fetch(usersURL);
  const users = await res.json();

  return users;
};

export const fetchDemoUserById = async (id) => {
  const userList = fetchAllDemoUsers();
  const res = findById(userList, id);
  const user = await res.json();

  return user;
};

export const fetchDemoArtists = async () => {
  const res = await fetch(artistsURL);
  const artists = await res.json();

  return artists;
};

export const fetchDemoUserArtistsById = async (id) => {
  const artistList = fetchDemoArtists();
  const res = findById(artistList, id);

  const artistsArray = await res.json();

  return artistsArray;
};



