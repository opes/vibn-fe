import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCurrentUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';

export default function ConvoItem({ item, id }) {
  const [toUser, setToUser] = useState({});
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    fetchCurrentUserById(item.toUser)
      .then((user) => setToUser(user))
      .finally(fetchCurrentUserById(id)
        .then((currentUser) => setFromUser(currentUser))
        .finally(() => setLoading(false)));
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
