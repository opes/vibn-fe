import React, { useState, useEffect } from 'react';
import { getSingleConvo } from '../../services/convos.js';
import { fetchUserById } from '../../services/userAuth.js';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import styles from '../../styles/conversations.css';
const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function ConvoDetail() {
  const [conversation, setConversation] = useState({});
  const [fromUserObject, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { convoId } = useParams();
  
  useEffect(() => {
    getSingleConvo(convoId)
      .then((oneConvo) => setConversation(oneConvo));
  }, []);
  useEffect(() => {
    fetchUserById(conversation.fromUser)
      .then((user) => setFromUser(user))
      .finally(() => setLoading(false));
  }, [conversation]);
  
  if (loading) {
    return <img src={spinner} alt="spinner" />;
  }

  return (
    <div className={styles.convo_container}>
      <Header />
      <div>
        <h4 className={styles.from_name}>
              from: {fromUserObject.displayName}
        </h4>
      </div>
      <article className={styles.message_container}>
        <h2 className={styles.date}>
          {conversation.date}
        </h2>
        <p className={styles.message_p}>
          {conversation.message}
        </p>
      </article>  
    </div>           
  );
}
