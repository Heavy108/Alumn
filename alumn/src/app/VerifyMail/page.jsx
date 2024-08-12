"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '@/css/VerifyEmailPage.module.css';
// import { SendCredentials } from "@/Js/SendDigital";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            const response = await fetch('/api/Mailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message === 'Invalid token') {
                    console.error('Invalid token');
                }
                throw new Error('Email verification failed');
            }

            const data = await response.json();
            if(data.success){
                alert('Email Verified Successfully! Check your email for credentials.');
            } else {
                alert(data.error);
            }
            
            const { uniqueID, name, passoutYear, email } = data;
            console.log(uniqueID, passoutYear, email);
            setVerified(true);
           
            if (uniqueID && name && passoutYear && email) {
                await fetch('/api/SendCard', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ uniqueID, name, passoutYear, email }),
                });
              } else {
                console.error("Required data is missing:", { uniqueID, name, passoutYear, email });
              }
              
        } catch (error) {
            setError(true);
            alert('Email verification failed. Please try again.');
            console.error('Error:', error.message);
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get('token');
        const urlId = urlParams.get('id');

        setToken(urlToken || "");
        setId(urlId || "");
    }, []);

    useEffect(() => {
        if (token.length > 0 && id.length > 0) {
            verifyUserEmail();
        }
    }, [token, id]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Verify Email</h1>
            <h2 className={styles.token}>{token ? `${token}` : "No token"}</h2>

            {verified && (
                <div>
                    <h2 className={styles.message}>Email Verified</h2>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className={styles.error}>Error</h2>
                </div>
            )}
        </div>
    );
}
