export const fetchConvosByUserId = async (id) => {
  const res = await fetch(
    `https://vibn.herokuapp.com/api/v1/user/convos/${id}/convo`
  );
  const userAndConvos = await res.json();

  return userAndConvos;
};

export const postToConvos = async (payload) => {
  const res = await fetch('https://vibn.herokuapp.com/api/v1/user/convos/', {
    method: 'POST',
    body: payload,
  });
  const body = await res.json();
  return body;
};

export const getSingleConvo = async (id) => {
  const res = await fetch(
    `https://vibn.herokuapp.com/api/v1/convos/${id}/convo`
  );
  const singleConvo = await res.json();

  return singleConvo;
};
