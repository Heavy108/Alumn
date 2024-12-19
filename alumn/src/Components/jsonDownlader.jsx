"use client";
import styles from "@/css/DashRegist.module.css";

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function Modal({ item, modalId }) {
  // console.log(item)
  return (
    <>
      <div className={styles.modalstyle}>
        <button
          className={styles.edit}
          onClick={() => document.getElementById( modalId ).showModal()}
        >
          Details
        </button>
        <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
          <div className={styles.modalbox}>
            <h3 className="font-bold text-lg">Alumni Details</h3>

            <p className={`py-4 ${styles.textd}`}>
              <strong>ID:</strong> {item._id}
              <br />
              <strong>Mobile:</strong> {item.mobile}
              <br />
              <strong>First Name:</strong> {item.firstName}
              <br />
              <strong>Last Name:</strong> {item.lastName}
              <br />
              <strong>DOB:</strong> {item.dob}
              <br />
              <strong>Gender:</strong> {item.gender}
              <br />
              <strong>Department:</strong> {item.department}
              <br />
              <strong>Programme:</strong> {item.programme}
              <br />
              <strong>Graduation Year:</strong> {item.graduationYear}
              <br />
              <strong>Current Status:</strong> {item.currentStatus}
              <br />
              <strong>Organisation:</strong> {item.organisation}
              <br />
              <strong>Designation:</strong> {item.designation || "N/A"}
              <br />
              <strong>Company Email:</strong> {item.companyEmail || "N/A"}
              <br />
              <strong>Personal Email:</strong> {item.personalEmail}
              <br />
              <strong>Address:</strong> {item.address}
              <br />
              <strong>City:</strong> {item.city}
              <br />
              <strong>Country:</strong> {item.country}
              <br />
              <strong>WhatsApp:</strong> {item.whatsapp}
              <br />
              <strong>Accommodation:</strong> {item.accommodation}
              <br />
              <strong>With Family:</strong> {item.withFamily}
              <br />
              <strong>Number of Persons:</strong> {item.numberOfPersons}
              <br />
              <strong>Food Preference:</strong> {item.foodPreference}
              <br />
              <strong>Transaction Reference:</strong> {item.transactionRef}
              <br />
              <strong>Transaction Date:</strong> {item.transactionDate}
              <br />
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export function DownloadButtons({ data }) {
  const handleDownloadJSON = () => {
    const jsonContent = JSON.stringify(data, null, 2);
    downloadFile(jsonContent, "registration_details.json", "application/json");
  };

  return (
    <div className={styles.container2}>
      <button onClick={handleDownloadJSON} className={styles.downloadButton}>
        Download JSON
      </button>
    </div>
  );
}
