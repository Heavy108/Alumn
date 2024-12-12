
import style from "@/css/DashRegist.module.css";

const DashRegist = ({ data }) => {
  return (
    <>
      <div className={style.container}>
        <h4>Carousel</h4>
        <div className={style.Heading}>
          <li style={{ width: "40px", height: "21px" }}>S.No.</li>
          <li style={{ width: "120px", height: "21px" }}>ScreenShot</li>
          <li style={{ width: "160px", height: "21px" }}>Title</li>
          <li style={{ width: "240px", height: "21px" }}>Description</li>
          <li style={{ width: "160px", height: "21px" }}>Address</li>
          <li style={{ width: "80px", height: "21px" }}>BG Color</li>
        </div>

        {data.map((item, index) => (
          <div key={item._id + index}>
            <div className={style.table}>
              <li style={{ width: "40px", height: "18px" }}>{item._id}</li>
              <img
                src={`data:image/jpeg;base64,${item.paymentScreenshot}`}
                alt={item.title}
                className={style.image}
              />
              <li style={{ width: "160px", height: "120px" }}>{item.title}</li>
              <li style={{ width: "240px", height: "120px" }}>{item.text}</li>
              <li style={{ width: "160px", height: "18px" }}>{item.address}</li>
              <li style={{ width: "80px", height: "18px" }}>{item.bg_color}</li>
            </div>
            <hr style={{ backgroundColor: "#d9d9d9", opacity: "0.5" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DashRegist;
