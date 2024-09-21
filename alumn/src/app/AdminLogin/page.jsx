"use client";
// import "../global.css"

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import style from "@/css/adminlogin.module.css";

function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      
      const response = await fetch("/api/Adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Login success", data);
        router.push("/DashBoard/Home"); // Redirect to Dashboard after login
      } else {
        console.log("Login failed", data.error);
      }
    } catch (error) {
      console.log("Login failed", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className={style.LoginFrame}>
        <img src="/Login.svg" className={style.LoginImage}/>
        <div className={style.FormContainer}>
          <h1>Alumni_Connect</h1>
          <h2>Welcome to Alumni_Connect</h2>
          <p>Please Sign-in to your account</p>

          <div className={style.form}>
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />
            <label htmlFor="username" className={style.label}>UserName</label>
            <div className={style.input_container}>
            
            <input
              className={style.input}
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="email"
            />
            </div>
            <label htmlFor="password" className={style.label}>password</label>
            <div className={style.input_container}>
            
            <input
              className={style.input}
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
            </div>
            <button
              onClick={onLogin}
              className={style.Button}
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
