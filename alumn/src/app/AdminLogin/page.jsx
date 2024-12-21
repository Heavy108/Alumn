'use client'; // Ensure you're using client-side rendering

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import style from "@/css/adminlogin.module.css";
import Link from "next/link";

function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "Admin",
    password: "Admin@123",
    type: "admin", // Default type is admin
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      setButtonDisabled(true); // Disable button during submission

      const response = await fetch("/api/Adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
          type: user.type,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login success", data);

        // Redirect based on the user type returned from the backend
        if (data.type === "admin") {
          router.push("/DashBoard/Home"); // Redirect admin to dashboard
        } else if (data.type === "student") {
          router.push("/Student/studentDash"); // Redirect student to student page
        } else {
          window.alert("Unknown user type");
        }
      } else {
        window.alert(`Login failed1: ${data.error}`); // Show error message
      }
    } catch (error) {
      window.alert(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
      setButtonDisabled(false); // Re-enable button after submission
    }
  };

  useEffect(() => {
    // Disable login button if username or password is empty
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className={style.LoginFrame}>
        <img src="/Login.svg" className={style.LoginImage} alt="Login Image" />
        <div className={style.FormContainer}>
          <h1>Alumni_Plus</h1>
          <h2>Welcome to Alumni_Plus</h2>
          <p style={{color:"black"}}>Please Sign-in to your account</p>

          <div className={style.form}>
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
              {loading ? "Processing..." : "Login"}
            </button>
            <Link href="/">Visit Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
