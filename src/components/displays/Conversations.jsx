import React, { useState } from 'react';
import { fetchConvosByUserId } from '../../services/convos';
import ConvoItem from './ConvoItem';

export default function Conversations() {
  const [conversations, setConversations] = useState([]);

  const filterById = (item) => {
    if (item.toUser === localStorage.getItem('CURRENT_USER_ID')) {
      return true;
    }
  };

  const id = localStorage.getItem('CURRENT_USER_ID');
  const convos = fetchConvosByUserId(id);
  const filteredConvos = convos.filter(filterById);
  setConversations(filteredConvos);

  return (
    <div>
      <h1>Your Messages</h1>
      <main>
        {conversations.map(item => 
          <ConvoItem 
            key={id})} 
            convo={item} />)}
      </main>
    </div>
  );
}
