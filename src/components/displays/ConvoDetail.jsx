import React, { useState, useEffect } from 'react';
import { getSingleConvo } from '../../services/convos.js';
import { fetchUserById } from '../../services/userAuth.js';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';

export default function ConvoDetail() {
  const [conversation, setConversation] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { convoId } = useParams();
  
  useEffect(() => {
    getSingleConvo(convoId)
    .then((oneConvo) => setConversation(oneConvo))
    .then(fetchUserById(conversation.fromUser))
    .then((user) => setFromUser(user))
  }, [convoId]);

  // useEffect(() => {
  //   fetchUserById(conversation.fromUser)
  //   .then((user) => setFromUser(user))
  //   .finally(() => setLoading(false));
  // }, [conversation])

  console.log(conversation);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <div>
        <h4>
              from: {fromUser.displayName}
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
