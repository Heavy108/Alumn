'use client'
import style from "@/CSS/SignUp.module.css";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";


function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async () => {
    try {
      const response = await fetch("/api/SignUp", 
        {method:"POST",
            body:user
    });
      console.log("Signup success", response.data);
      router.push("/Dashboard/SignUp");
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  };

  useEffect(() => {
    if (user.password.length > 0 && user.username.length > 0 && user.userType.length > 0 && user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={style.Signupframe}>
      <p className={style.head}>Settings</p>
      <p className={style.Info}>" Description Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className={style.Introduction}>
       
        <div className={style.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
        </div>
       
        <div className={style.form}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
        </div>
        
       
        <button onClick={onSignup} disabled={buttonDisabled} className={style.button}>SignUp</button>
      </div>
    </div>
  );
}

export default SignupPage;
