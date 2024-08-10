
"use client";
import { FcGoogle } from "react-icons/fc";
import style from "@/css/login.module.css"
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    // Redirect to chat page
    router.push("/chat");
    return null;
  }

  return (
    <div className={style.LoginFrame}>
      
      <div className={style.card}>
      <h1>Login</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/chat" })}>
       <center><FcGoogle /></center> Sign in with Google
      </button>
      <Link href='/'>Visit Home</Link>
      </div>
    </div>
  );
}
