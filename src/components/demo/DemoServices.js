const URL = './DemoArtists.js';

export const fetchAllDemoUsers = async () => {
  const res = await fetch(`${URL}users`);
  const userList = await res.json();

  return userList;
};

export const fetchDemoUserById = async (id) => {
  const res = await fetch(`${URL}users/${id}`);
  const user = await res.json();

  return user;
};

export const fetchDemoUserArtists = async (id) => {
  const res = await fetch(`${URL}artists/${id}`);
  const artistsArray = await res.json();

  return artistsArray;
};

export function findById(demoUserArray, demoId) {
  const numberId = Number(demoId);
  for (const item of demoUserArray) {
    if (item.id === numberId) return item;
  }

  return null;
}

