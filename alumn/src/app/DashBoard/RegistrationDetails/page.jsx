import styles from "@/css/DashRegist.module.css";
import { fetchRegistData } from "@/app/api/RegistDetail/route";
import Image from "next/image";
import {DownloadButtons,Modal} from "@/Components/CSVDownlader";
import PictureModal from "@/Components/EnlargeImage";

export const revalidate = 0;

async function RegistrationDetails() {
  const data = await fetchRegistData();
  // console.log(data)
   const cleanData = data.map((item) => ({
     ...item,
     _id: item._id?.buffer?.toString("base64") || item._id, // Convert Buffer to base64 string
     paymentScreenshot: undefined || "", // Handle missing screenshot if necessary
   }));
   
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Registration Details</h4>
        <DownloadButtons data={cleanData} />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Payment</th>
            <th>Name</th>
            <th>Graduation Year</th>
            <th>MobileNo</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id + index}>
              <td className={styles.serialNumberCell}>{index + 1}</td>
              <td>
                <PictureModal
                  image={item.paymentScreenshot}
                  caption="Payment Screenshot"
                />
              </td>
              <td>
                {item.firstName} {item.lastName}
              </td>

              <td>{item.graduationYear}</td>
              <td>{item.mobile}</td>
              <td>{item.personalEmail}</td>
              <td>
                <Modal item={item} modalId={`modal-${item._id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrationDetails;
