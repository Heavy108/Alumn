import style from "@/css/Accounts.module.css";
import ViewPDFButton from "@/Components/pdf";
import guide from "@/Assets/guide.png";
// import pdf from "@/Assets/pdf.png"
import { fetchAccountData } from "@/app/api/Analytics/route";

async function Accounts() {
  const {totalAlumni, btech, mtech, phd, otherPrograms,achievementsCount,
    cardsCount} =
    await fetchAccountData();
  // const [Btech, , research, events,bytes] =[0,0,0,0,0];
  console.log(totalAlumni, btech, mtech, phd, otherPrograms);

  return (
    <>
      <div className={style.container}>
        <div className={style.Account}>
          <h4>Analytics</h4>
          <ul className={style.items}>
            <li className={style.box}>
              Number of Alumni<span className={style.data}>{totalAlumni}</span>
            </li>
            <li className={style.box}>
              Number of Achievements<span className={style.data}>{achievementsCount}</span>
            </li>
            <li className={style.box}>
              Registered Alumni<span className={style.data}>{cardsCount}</span>
            </li>
            <li className={style.box}>
              Events organized<span className={style.data}> 0</span>
            </li>
            {/* <li className={style.box}>Mentors requested<span className={style.data}>0</span></li> */}
          </ul>
        </div>
        <div className={style.Account}>
          <h4>Alumni</h4>
          <ul className={style.items}>
            <li className={style.box}>
              B.Tech<span className={style.data}>{btech}</span>
            </li>
            <li className={style.box}>
              MCA<span className={style.data}>{otherPrograms}</span>
            </li>
            <li className={style.box}>
              M.Tech<span className={style.data}> {mtech}</span>
            </li>
            <li className={style.box}>
              PHD<span className={style.data}>{phd}</span>
            </li>
          </ul>
        </div>

        {/* <div className={style.guidelines}>
        <div className={style.heading}>
        <h4>Scripture Admin Guidelines</h4>
        <span ><ViewPDFButton pdfPath='/final.pdf'/></span>
        </div>
        <div  className={style.image}>
        <img src={guide} alt="guide image"/>
    </div>
    </div> */}
      </div>
    </>
  );
}

export default Accounts;
