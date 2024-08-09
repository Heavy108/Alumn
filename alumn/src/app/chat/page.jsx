// app/chat/page.js
'use client';
import Chat from "@/Components/ChatHelper";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import dynamic from 'next/dynamic';

// const Chat = dynamic(() => import('@/Components/ChatHelper.jsx'), {
//   ssr: false,
// });
export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status !== 'authenticated') {
    return null; // Or a loading spinner, or placeholder
  }
  
  return <Chat />;
}
