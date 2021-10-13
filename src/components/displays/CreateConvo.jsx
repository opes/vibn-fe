import React, { useState } from 'react';
import { postToConvos } from '../../services/convos';
import { fetchCurrentUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';

export default function CreateConvo({ match }) {
  const [today, setToday] = useState('');
  const currentUserId = localStorage.getItem('CURRENT_USER_ID');
  const toUser = fetchCurrentUserById(match.params.id);
  const [message, setMessage] = useState();

  const createDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const date = today.toLocaleDateString('en-US', options);
    return date;
  };

  setToday(createDate());

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postToConvos({
      toUser: match.params.id,
      fromUser: currentUserId,
      message,
      date: today,
    });

    window.location.href = `http://localhost:7891/user/${localStorage.getItem('CURRENT_USER_ID')}/conversations`;
    // window.location.href = `https://vib.netlify.app/user/${localStorage.getItem('CURRENT_USER_ID')}/conversations`;
  };

  const handleTextChange = async (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Send a message</h1>
      <form onSubmit={handleSubmit}>
        <h2>Your message to {toUser.diplayName}</h2>
        <textarea placeholder="hey, how's the weather, you like kpop too?!" onChange={handleTextChange} ></textarea>
        <span>
          <button>Send</button>
        </span>
      </form>
    </div>
  );
}

CreateConvo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string,
      refresh_token: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

