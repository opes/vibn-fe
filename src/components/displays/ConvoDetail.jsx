import React, { useState, useEffect } from 'react';
import { getSingleConvo } from '../../services/convos.js';
import { fetchUserById } from '../../services/userAuth.js';
import PropTypes from 'prop-types';

export default function ConvoDetail({ match }) {
  const [toUser, setToUser] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [conversation, setConversation] = useState([]);

  const convoId = match.params.id;
  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    getSingleConvo(convoId)
      .then((oneConvo) => setConversation(oneConvo))
      .then(fetchUserById(currentUserId))
      .then((currentUser) => setFromUser(currentUser))
      .then(fetchUserById(conversation.toUser))
      .then((user) => setToUser(user))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        <h4>
              from: {fromUser.displayName}
              to: {toUser.displayName}
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
  
ConvoDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string,
      refresh_token: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};
