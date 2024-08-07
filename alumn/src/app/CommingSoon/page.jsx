'use client'

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

function Coming() {
    return (
        <>
        <Navbar/>
      <div className="soon">
        <h1>Coming Soon...</h1>
        <style jsx>{`
          .soon {
            text-align: center;
          }
  
          .soon h1 {
            font-size: 50px;
            margin: 50px auto;
            padding: 30px;
            display: inline-block;
            background: linear-gradient(135deg, #6c5ce7, #ecf0f1);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientText 2s ease-in-out infinite alternate;
          }
  
          @keyframes gradientText {
            0% {
              filter: hue-rotate(0deg);
            }
            100% {
              filter: hue-rotate(360deg);
            }
          }
        `}</style>
      </div>
      <Footer/>
      </>
    )
  }
  export default Coming;