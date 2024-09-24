'use client'
import React from 'react';

const ViewPDFButton = ({ pdfPath }) => {
 
  const handleDownload = () => {
    const pdfaddress ='/final.pdf'
      const link = document.createElement("a");
      link.href =  pdfaddress;
      link.download = pdfaddress.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <>
      
      <button onClick={handleDownload} style={{
        backgroundColor:"black",
        color:"white",
        padding:"0.8rem 1.2rem 0.8rem 1.2rem",
        height:"2.6rem",
        borderRadius:"1rem",
        


      }}>Download</button>
    </>
  );
};

export default ViewPDFButton;
