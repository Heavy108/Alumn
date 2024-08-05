//component/chat.js
'use client';

import * as Ably from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import ChatBox from './ChatBox.jsx';

export default function Chat() {
  const client = new Ably.Realtime({ authUrl: '/api/Chat' });

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo">
        <ChatBox />
      </ChannelProvider>
    </AblyProvider>
  );
}