"use client";
import { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
// import Title from "@/Components/Title";
import { useRouter } from "next/navigation";
function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 20000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Navbar />
      {/* <Title title="Thank You!" /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          //   minHeight: "100vh",
          background: "linear-gradient(to bottom, #e0f7fa, #f1f8e9)",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#2c3e50",
              marginBottom: "20px",
            }}
          >
            🎉 Thank You for Your Submission!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              //   marginBottom: "12px",
              padding: "0rem",
            }}
          >
            Your Digital Alumni Card request has been received.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              marginBottom: "24px",
              padding: "0rem",
            }}
          >
            Please check your email for further instructions and verification.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              marginBottom: "16px",
              padding: "0rem",
            }}
          >
            We appreciate your effort in joining our alumni network! and filling
            the feedback for the Convocation Dinner.
          </p>
          <div
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "12px",
              }}
            >
              Contact Information
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#34495e",
                marginBottom: "8px",
                padding: "0rem",
              }}
            >
              <strong>Email:</strong> deena@tezu.ernet.in
            </p>
            <p
              style={{ fontSize: "1.1rem", color: "#34495e", padding: "0rem" }}
            >
              <strong>Phone:</strong> +91 9706368501
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThankYouPage;
