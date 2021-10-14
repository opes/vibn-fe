import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';

export default function ConvoItem({ convo }) {
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserById(convo.from_user)
    .then((user) => setFromUser(user))
    .finally(() => setLoading(false))
  }, []);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Link to={`/user/convo/detail/${convo.id}`}>
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
  item: PropTypes.shape({
    id: PropTypes.string,
    toUser: PropTypes.string,
    fromUser: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
  }),
  id: PropTypes.string,
};
