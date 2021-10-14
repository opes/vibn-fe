import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserById } from '../../services/userAuth';
// import styles from '../../assets/conversations.css';
const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';
import PropTypes from 'prop-types';

export default function ConvoItem({ convo }) {
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(convo);
  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  useEffect(() => {
    fetchUserById(convo.from_user)
      .then((user) => setFromUser(user))
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return <img src={spinner} alt="spinner" />;
  }

  return (
    <Link to={`/convo/${currentUserId}/detail/${convo.id}`}>
      <div>
        <h4>
            from: {fromUser.displayName}
        </h4>
      </div>
      <article>
        <h2>
          {convo.date}
        </h2>
        <p>
          {convo.message}
        </p>
      </article>        
    </Link>
  );
}

ConvoItem.propTypes = {
  convo: PropTypes.object,
};
