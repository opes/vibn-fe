import React, { useState, useEffect } from 'react';
import { getSingleConvo } from '../../services/convos.js';
import { fetchUserById } from '../../services/userAuth.js';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
// import styles from '../../assets/conversations.css';
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
    <>
      <Header />
      <div>
        <h4>
              from: {fromUserObject.displayName}
        </h4>
      </div>
      <article>
        <h2>
          {conversation.date}
        </h2>
        <p>
          {conversation.message}
        </p>
      </article>  
    </>           
  );
}
