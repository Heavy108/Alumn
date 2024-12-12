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

export function Modal({ item }) {
  return (
    <div>
      <button
        className={styles.edit}
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Details
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="py-4">
            <p>
              <strong>ID:</strong> {item._id}
            </p>
            <p>
              <strong>Mobile:</strong> {item.mobile}
            </p>
            <p>
              <strong>First Name:</strong> {item.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {item.lastName}
            </p>
            <p>
              <strong>DOB:</strong> {item.dob}
            </p>
            <p>
              <strong>Gender:</strong> {item.gender}
            </p>
            <p>
              <strong>Department:</strong> {item.department}
            </p>
            <p>
              <strong>Programme:</strong> {item.programme}
            </p>
            <p>
              <strong>Graduation Year:</strong> {item.graduationYear}
            </p>
            <p>
              <strong>Current Status:</strong> {item.currentStatus}
            </p>
            <p>
              <strong>Organisation:</strong> {item.organisation || "N/A"}
            </p>
            <p>
              <strong>Designation:</strong> {item.designation || "N/A"}
            </p>
            <p>
              <strong>Company Email:</strong> {item.companyEmail || "N/A"}
            </p>
            <p>
              <strong>Personal Email:</strong> {item.personalEmail}
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>City:</strong> {item.city}
            </p>
            <p>
              <strong>Country:</strong> {item.country}
            </p>
            <p>
              <strong>WhatsApp:</strong> {item.whatsapp}
            </p>
            <p>
              <strong>Accommodation:</strong> {item.accommodation}
            </p>
            <p>
              <strong>With Family:</strong> {item.withFamily}
            </p>
            <p>
              <strong>Number of Persons:</strong> {item.numberOfPersons}
            </p>
            <p>
              <strong>Food Preference:</strong> {item.foodPreference}
            </p>
            <p>
              <strong>Transaction Reference:</strong> {item.transactionRef}
            </p>
            <p>
              <strong>Transaction Date:</strong> {item.transactionDate}
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
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
