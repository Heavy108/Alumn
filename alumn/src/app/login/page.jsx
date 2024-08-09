// // components/Login.jsx
// "use client"
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from '@/css/ChatBox.module.css';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (username.trim()) {
//       localStorage.setItem('username', username);
//       console.log('Username stored:', username); // Verify this log
//       router.push('/chat');
//     } else {
//       console.log('Username is empty'); // Check for empty username
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Enter your username"
//         className={styles.usernameInput}
//       />
//       <button onClick={handleLogin} className={styles.loginButton}>
//         Login
//       </button>
//     </div>
//   );
// }
'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    // Redirect to chat page
    router.push('/chat');
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Login</h1>
      <button
        onClick={() => signIn('google', { callbackUrl: '/chat' })}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Sign in with Google
      </button>
    </div>
  );
}


