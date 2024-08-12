// app/error.js
'use client'
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
  const router = useRouter();

  const handleReset = () => {
    reset();
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '5px',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Something went wrong</h1>
      <p style={paragraphStyle}>{error.message}</p>
      <div>
        <button style={buttonStyle} onClick={() => router.push('/')}>Go to Home</button>
        <button style={buttonStyle} onClick={handleReset}>Try Again</button>
      </div>
    </div>
  );
}
