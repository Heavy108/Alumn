import style from "../CSS/ThreeCardFrame.module.css";
import Link from "next/link";

function ThreeCardFrame(props) {
  console.log(props.tags)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
   
  };

  return (
    <div className={style.InfoCard_Container}>
      <img src={`data:image/jpeg;base64,${props.image}`} alt="Card Image" />
      <div className={style.Card_Introduction}>
        <div className={style.Card_Tags}>
          <li className={style.Tags}>{props.tags}</li>
          <li>{formatDate(props.Date)}</li>
        </div>
        <div>
          <h2>{props.Title}</h2>
          <p>{props.Description}</p>
        </div>
        <div className={style.buttonAlignment}>
          <Link href={{ pathname: "/Blog", query: { _id: props._id } }}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThreeCardFrame;
