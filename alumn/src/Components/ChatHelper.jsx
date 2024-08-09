'use client';

import * as Ably from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import ChatBox from './ChatBox.jsx';

 function Chat() {
  // Ensure the authUrl is a fully qualified URL
  const client = new Ably.Realtime({ authUrl: `${window.location.origin}/api/Chat` });

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo">
        <ChatBox />
      </ChannelProvider>
    </AblyProvider>
  );
}
export default Chat;
