import React, { useEffect, useState } from 'react';
import { postToConvos } from '../../services/convos';
import { fetchUserById } from '../../services/userAuth';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';
import styles from '../../styles/createmsg.css';

export default function CreateConvo() {
  const [today, setToday] = useState('');
  const [toUser, setToUser] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [message, setMessage] = useState('');

  const createDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const today = new Date();
    const date = today.toLocaleDateString('en-US', options);
    return date;
  };

  const history = useHistory();

  const currentUserId = localStorage.getItem('CURRENT_USER_ID');
  const { id } = useParams();

  useEffect(() => {
    fetchUserById(currentUserId).then((user) => setFromUser(user));
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

    // history.push(`/convo/${localStorage.getItem('CURRENT_USER_ID')}/conversations`);
    history.push(`/${localStorage.getItem('CURRENT_USER_ID')}/conversations`);
  };

  const handleTextChange = async (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div className={styles.create_container}>
      <Header />
      <h1 className={styles.send_msg_header}>Send a message</h1>
      <form 
        className={styles.create_form} onSubmit={handleSubmit}>
        <h2 className={styles.to_name_header}>
          Your message to {toUser.displayName}
        </h2>
        <textarea
          className={styles.msg_input}
          placeholder="hey, how's the weather, you like kpop too?!"
          onChange={handleTextChange}
        ></textarea>
        <span>
          <button className={styles.send_btn}>Send</button>
        </span>
      </form>
    </div>
  );
}
