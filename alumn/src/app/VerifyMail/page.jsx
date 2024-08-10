"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '@/CSS/VerifyEmailPage.module.css';
// import { SendCredentials } from "@/Js/SendDigital";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            const response = await fetch('/api/Mailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                throw new Error('Email verification failed');
            }

            const data = await response.json();
            console.log(data)
            const { uniqueID, name, passoutYear,email } = data;
            console.log(uniqueID, passoutYear,email)
            setVerified(true);
            alert('Email Verified Successfully! and check your email for credentials');
            const data2 =await fetch('/api/SendCard', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uniqueID, name, passoutYear, email }),
              });
           
            // await SendCredentials(uniqueID, name, passoutYear,email);
        } catch (error) {
            setError(true);
            alert('Email failed. Please try again.');
            console.error('Error:', error.message);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

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
