"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function ThankYouPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#2c3e50",
              marginBottom: "20px",
            }}
          >
            🎉 Thank You for Your Feedback!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              marginBottom: "12px",
              padding: "0rem",
            }}
          >
            Your feedback for the Alumni Meet 2025 for the batch 1995-2005 has
            been received.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              marginBottom: "16px",
              padding: "0rem",
            }}
          >
            Thank you for helping us improve and make future events better!
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#34495e",
              marginBottom: "24px",
              padding: "0rem",
            }}
          >
            We appreciate your continued support in building a stronger alumni
            network.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                backgroundColor: "#2c3e50",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              Go to Home
            </button>
            <button
              style={{
                backgroundColor: "#16a085",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => router.push("/Digital_Card")}
            >
              Get Your Digital Alumni Card
            </button>
          </div>
          <div
            style={{
              marginTop: "40px",
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
            <p style={{ fontSize: "1.1rem", color: "#34495e" }}>
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
