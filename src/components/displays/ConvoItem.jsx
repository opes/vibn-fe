import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';
// import styles from '../../assets/conversations.css';

const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function ConvoItem({ item, id }) {
  const [toUser, setToUser] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <img src={spinner} alt="spinner" />;
  }

  useEffect(() => {
    fetchUserById(item.toUser)
      .then((user) => setToUser(user))
      .then(fetchUserById(id))
      .then((currentUser) => setFromUser(currentUser))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Link to={`/user/convo/detail/${item.id}`}>
      <div>
        <h4>
            from: {fromUser.displayName}
            to: {toUser.displayName}
        </h4>
      </div>
      <article>
        <h2>
          {item.date}
        </h2>
        <p>
          {item.message}
        </p>
      </article>        
    </Link>
  );
}

ConvoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    toUser: PropTypes.string,
    fromUser: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
  }),
  id: PropTypes.string,
};
