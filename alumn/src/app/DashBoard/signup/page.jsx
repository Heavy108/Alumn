'use client';
import Title from "@/Components/Title";
import style from "@/css/signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    console.log("User state before signup:", user);

    if (!user.username || !user.password) {
      alert("Please enter both username and password");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (response.ok) {
        alert("Signup successful!");
        // router.push("/");
      } else {
        alert(`Signup failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name} input changed:`, value);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <Title title="Sign Up" />
      <div className={style.container}>
        <form onSubmit={onSignup} className={style.form}>
          <div className={style.inputGroup}>
            <h4>Signup Information</h4>
            <div className={style.Input_field}>
            <input
              className={style.input}
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
            </div>
            <div className={style.Input_field}>
            <input
              className={style.input}
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            </div>
          </div>

          <div className={style.Button}>
            <button className={style.button} type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;