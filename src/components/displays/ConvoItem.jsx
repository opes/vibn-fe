import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserById } from '../../services/userAuth';

export default function ConvoItem({ convo }) {
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);
console.log(convo)
  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  useEffect(() => {
    fetchUserById(convo.from_user)
    .then((user) => setFromUser(user))
    .finally(() => setLoading(false))
  }, []);
  
  if (loading) {
    return <h1>Loading...</h1>;
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
