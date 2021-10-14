export const fetchUserConvosByUserId = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/convos/${id}`);
  // const res = await fetch(
  //   `https://vibn.herokuapp.com/api/v1/user/convos/${id}/convo`
  // );
  const userAndConvos = await res.json();
  
  return userAndConvos;
};

export const fetchMessagesToCurrentUser = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/convos/to/${id}`);

  const messagesToCurrentUser = await res.json();

  return messagesToCurrentUser;
};

export const postToConvos = async (payload) => {
  const res = await fetch('http://localhost:7890/api/v1/convos/', {
  // const res = await fetch('https://vibn.herokuapp.com/api/v1/user/convos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      sentConvo: payload }),
  });

  const body = await res.json();
  return body;
};

export const getSingleConvo = async (id) => {
  const res = await fetch(
    `http://localhost:/7890/api/v1/convos/${id}/convo`
  );
  // const res = await fetch(
    // `https://vibn.herokuapp.com/api/v1/convos/${id}/convo`
  // );

  const singleConvo = await res.json();

  return singleConvo;
};
