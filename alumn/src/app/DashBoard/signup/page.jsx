'use client';
import Title from "@/Components/Title"; // Assuming you have a Title component
import style from "@/css/signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/Components/Input"; // Assuming you have an Input component

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("../api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Serialize the user object
      });

      const data = await response.json(); // Parse the JSON response
      console.log("Signup success", data);

      if (response.ok) {
        alert("Signup successful!");
        
      } else {
        alert(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      console.log("Signup failed", error.message);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title title="Sign Up" />
      <div className={style.container}>
        <form onSubmit={onSignup} className={style.form}>
          <div className={style.inputGroup}>
            <h4>Signup Information</h4>
            <Input
              label="Username"
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className={style.Button}>
          <button type="submit"  disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
