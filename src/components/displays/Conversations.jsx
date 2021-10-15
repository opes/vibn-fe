import React, { useEffect, useState } from 'react';
import { fetchMessagesToCurrentUser } from '../../services/convos';
import ConvoItem from './ConvoItem';
import Header from './Header';
import styles from '../../assets/conversations.css';

export default function Conversations() {
  const [conversations, setConversations] = useState([]);

  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  console.log(conversations);

  useEffect(() => {
    fetchMessagesToCurrentUser(currentUserId)
      .then((convos) => setConversations(convos));
  }, []);

  return (
    <div>
      <Header />
      <h1>Your Messages</h1>
      <main className={styles.main_container}>
        {conversations.map(item => 
          <ConvoItem 
            key={item.id}
            convo={item} id={currentUserId} />)}
      </main>
    </div>
  );
}
