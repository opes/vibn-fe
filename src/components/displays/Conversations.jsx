import React, { useEffect, useState } from 'react';
import { fetchMessagesToCurrentUser } from '../../services/convos';
import ConvoItem from './ConvoItem';
import Header from './Header';
import styles from '../../styles/conversations.css';

export default function Conversations() {
  const [conversations, setConversations] = useState([]);

  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  useEffect(() => {
    fetchMessagesToCurrentUser(currentUserId)
      .then((convos) => setConversations(convos));
  }, []);

  return (
    <div className={styles.top_container}>
      <Header />
      <h1 className={styles.message_title}>Your Messages</h1>
      <main className={styles.main_container}>
        {conversations.map(item => 
          <ConvoItem 
            key={item.id}
            convo={item} id={currentUserId} />)}
      </main>
    </div>
  );
}
