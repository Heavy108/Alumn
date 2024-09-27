"use client";
// import "../global.css"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import style from "@/css/adminlogin.module.css";

function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    type: "admin", // Default type is admin
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

        // Redirect based on the user type
        if (user.type === "admin") {
          router.push("/DashBoard/Home"); // Redirect admin to admin dashboard
        } else if (user.type === "student") {
          router.push("/Student/WritePage"); // Redirect student to student home
        }
      } else {
        window.alert(`Login failed: ${data.error}`); // Alert for incorrect credentials
      }
    } catch (error) {
      window.alert(`Login failed: ${error.message}`);
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
        <img src="/Login.svg" className={style.LoginImage} />
        <div className={style.FormContainer}>
          <h1>Alumni_Connect</h1>
          <h2>Welcome to Alumni_Connect</h2>
          <p>Please Sign-in to your account</p>

          <div className={style.form}>
            {/* <h1>{loading ? "Processing" : "Login"}</h1> */}
            <hr />
            <label htmlFor="username" className={style.label}>UserName</label>
            <form action="">
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
              <label htmlFor="password" className={style.label}>Password</label>
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
              <label htmlFor="type" className={style.label}>Login As</label>
              <div className={style.input_container}>
                <select
                  className={style.input}
                  id="type"
                  value={user.type}
                  onChange={(e) => setUser({ ...user, type: e.target.value })}
                >
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </form>
            <button
              onClick={onLogin}
              className={style.Button}
              disabled={buttonDisabled}
            >
              {loading ? "Processing" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
