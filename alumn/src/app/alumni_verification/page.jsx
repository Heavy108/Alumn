"use client";
import styles from "@/css/DashRegist.module.css";
import { useState, useEffect } from "react";
import { AlumniData } from "@/Js/AlumniData";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function Verification() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Filter data on search input
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = AlumniData.filter((item) =>
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  // Initialize filteredData with full data on component mount
  useEffect(() => {
    setFilteredData(AlumniData);
  }, []);

  // Handle verification
  const handleVerify = async (index) => {
    const selectedItem = filteredData[index];

    const response = await fetch("/api/Alumniverification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: selectedItem._id.$oid,
        verification: 1,
      }),
    });

    if (response.ok) {
      setFilteredData((prevData) =>
        prevData.map((item, i) =>
          i === index ? { ...item, verification: 1 } : item
        )
      );
    } else {
      alert("Failed to update verification");
    }
  };

  const handleBadge = (index) => {
    const uniqueID = filteredData[index]._id.$oid;
    const firstName = filteredData[index].firstName;
    const lastName = filteredData[index].lastName;
    const passoutYear = filteredData[index].graduationYear;

    alert(`Badge issued for ${firstName} ${lastName}`);

    window.open(
      `https://alumniplus.online/Badge?uniqueID=${uniqueID}&name=${encodeURIComponent(
        firstName
      )}%20${encodeURIComponent(lastName)}&passoutYear=${passoutYear}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h4>Registration Details</h4>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Graduation Year</th>
              <th>Transaction Ref</th>
              <th>FoodPref</th>
              <th>Programme</th>
              <th>Department</th>

              <th>No. of Persons</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className={styles.serialNumberCell}>{index + 1}</td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.graduationYear}</td>
                <td>{item.transactionRef}</td>
                <td>{item.foodPreference}</td>
                <td>{item.programme}</td>
                <td>{item.department}</td>
                <td>{item.numberOfPersons}</td>
                <td>
                  <button
                    style={{
                      padding: "6px 12px",
                      margin: "4px",
                      backgroundColor: "black",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleBadge(index)}
                  >
                    Badge
                  </button>
                  <button
                    style={{
                      padding: "6px 12px",
                      margin: "4px",
                      backgroundColor:
                        item.verification === 1 ? "#28a745" : "#6c757d",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleVerify(index)}
                    disabled={item.verification === 1}
                  >
                    {item.verification === 1 ? "Verified" : "Verify"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Verification;
