import React, { useEffect, useState } from 'react';
import { postToConvos } from '../../services/convos';
import { fetchUserById } from '../../services/userAuth';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';

export default function CreateConvo() {
  const [today, setToday] = useState('');
  const [toUser, setToUser] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [message, setMessage] = useState('');

  const createDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const date = today.toLocaleDateString('en-US', options);
    return date;
  };

  const history = useHistory();

  const currentUserId = localStorage.getItem('CURRENT_USER_ID');
  const { id } = useParams();

  useEffect(() => {
    fetchUserById(currentUserId)
      .then((user) => setFromUser(user));
  }, []);

  useEffect(() => {
    fetchUserById(id)
      .then((user) => setToUser(user))
      .finally(() => setToday(createDate()));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postToConvos({
      toUser: toUser.id,
      fromUser: fromUser.id,
      message,
      date: today,
    });

    history.push(`/convo/${localStorage.getItem('CURRENT_USER_ID')}/conversations`);
    // history.push(`https://vib.netlify.app/user/${localStorage.getItem('CURRENT_USER_ID')}/conversations`);
  };

  const handleTextChange = async (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div>
      <Header />
      <h1>Send a message</h1>
      <form onSubmit={handleSubmit}>
        <h2>Your message to {toUser.displayName}</h2>
        <textarea placeholder="hey, how's the weather, you like kpop too?!" onChange={handleTextChange} ></textarea>
        <span>
          <button>Send</button>
        </span>
      </form>
    </div>
  );
}
