// app/chat/page.js
'use client';
import Chat from "@/Components/Chat"
// import dynamic from 'next/dynamic';

// const Chat = dynamic(() => import('@/components/Chat.jsx'), {
//   ssr: false,
// });

export default function ChatPage() {
  return <Chat />;
}
