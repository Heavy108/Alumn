import Navbar from '@/Components/Navbar';
import Footer from "@/Components/Footer";
import Title from '@/Components/Title';
import { FetchData } from '@/app/api/Alumni/route';
import { IoMail,IoLogoLinkedin } from "react-icons/io5";
// const students = ['Student A', 'Student B', 'Student C'];
const Data =[
  {
    _id: ('66b3c157b6deeaf5ec3e0925'),
    Roll_Number: 'CSB14001',
    Name: 'UDDIPANA DIHINGIA',
    Email: 'uddi96@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0926'),
    Roll_Number: 'CSB14004',
    Name: 'JYOTIRMOY PODDAR',
    Email: 'jyotirmoy235@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0927'),
    Roll_Number: 'CSB14005',
    Name: 'DEBOJYOTI PAUL'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0928'),
    Roll_Number: 'CSB14006',
    Name: 'TANNA CHOUDHURY',
    Email: 'tanna.chowdhury13@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0929'),
    Roll_Number: 'CSB14007',
    Name: 'PRAKASH KUMAR GUPTA',
    Email: 'prakashkgupta1994@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092a'),
    Roll_Number: 'CSB14009',
    Name: 'SHREYASEE DEV',
    Email: 'dev.shreyasee@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092b'),
    Roll_Number: 'CSB14010',
    Name: 'SANJEEB DHAR',
    Email: 'sanjeebdhar95@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092c'),
    Roll_Number: 'CSB14011',
    Name: 'GAUTAM BARUAH',
    Email: 'gautambaruah24@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092d'),
    Roll_Number: 'CSB14012',
    Name: 'PALLAB BORAH',
    Email: 'pallab.bora100@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092e'),
    Roll_Number: 'CSB14013',
    Name: 'SANGEET PATAWARI',
    Email: 'sang.bpr@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e092f'),
    Roll_Number: 'CSB14015',
    Name: 'JYOTIMOY KAKOTY'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0930'),
    Roll_Number: 'CSB14017',
    Name: 'BICKY KUMAR JAISWAL',
    Email: 'bickyjaiswal32@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0931'),
    Roll_Number: 'CSB14018',
    Name: 'PRADUMNYA BORAH'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0932'),
    Roll_Number: 'CSB14019',
    Name: 'NABADIP BORAH',
    Email: 'nabadipborah7@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0933'),
    Roll_Number: 'CSB14020',
    Name: 'APARAJITA GOHAIN',
    Email: 'aparajitagohain@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0934'),
    Roll_Number: 'CSB14021',
    Name: 'RAGHUDEV SAHU',
    Email: 'raghudev.1521@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0935'),
    Roll_Number: 'CSB14022',
    Name: 'FILZA PIYA BORAH',
    Email: 'filzapriyab@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0936'),
    Roll_Number: 'CSB14023',
    Name: 'ROHIT PAUL',
    Email: 'rohitpaul97@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0937'),
    Roll_Number: 'CSB14024',
    Name: 'BISHAL NATH',
    Email: 'bishlnath@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0938'),
    Roll_Number: 'CSB14025',
    Name: 'RITUPORNA DOWERAH',
    Email: 'pornaritudowerah@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0939'),
    Roll_Number: 'CSB14027',
    Name: 'ARNIBAN BORAH',
    Email: 'arnibanb@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093a'),
    Roll_Number: 'CSB14028',
    Name: 'SUPRIYA DAS',
    Email: 'das1234supriya@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093b'),
    Roll_Number: 'CSB14029',
    Name: 'BHASKAR SARKAR'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093c'),
    Roll_Number: 'CSB14030',
    Name: 'ABHIJIT AGARWALLA',
    Email: 'abhijitmiri95@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093d'),
    Roll_Number: 'CSB14032',
    Name: 'JHUNURAJ BRAHMA',
    Email: 'jrajbrahma87@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093e'),
    Roll_Number: 'CSB14034',
    Name: 'KALPA JYOTI DAS',
    Email: 'kalpads7@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e093f'),
    Roll_Number: 'CSB14035',
    Name: 'KALPAMAY MASHAHARY',
    Email: 'kalpo.msh@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0940'),
    Roll_Number: 'CSB14036',
    Name: 'ASRAF UDDIN AHMED'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0941'),
    Roll_Number: 'CSB14038',
    Name: 'PRATEEK KUMAR',
    Email: 'prateekankit96@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0942'),
    Roll_Number: 'CSB14039',
    Name: 'ASHISH KUMAR VERMA',
    Email: 'ashish.averma12@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0943'),
    Roll_Number: 'CSB14040',
    Name: 'NIKHIL DIXIT',
    Email: 'nikhildixit117@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0944'),
    Roll_Number: 'CSB14041',
    Name: 'PEETHA ROHIT VARMA'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0945'),
    Roll_Number: 'CSB14042',
    Name: 'ARGHYA DUTTA',
    Email: 'arghya.dutta96@live.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0946'),
    Roll_Number: 'CSB14043',
    Name: 'SIGARAMBOTLA S.JASWANTH',
    Email: 'sigambotlajaswanth@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0947'),
    Roll_Number: 'CSB14044',
    Name: 'SUNIDHI CHAURASIA',
    Email: 'sunidhi484@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0948'),
    Roll_Number: 'CSB14045',
    Name: 'SHRAVAN KUMAR',
    Email: 'shravaniit@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0949'),
    Roll_Number: 'CSB14046',
    Name: 'SUNIL KUMAR SINGH',
    Email: 'Sunilsingh98tu@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094a'),
    Roll_Number: 'CSB14047',
    Name: 'PRATIK DIXIT',
    Email: 'pratikdixit1515@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094b'),
    Roll_Number: 'CSB14048',
    Name: 'REVANTH DASARI',
    Email: 'revanthdasari171@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094c'),
    Roll_Number: 'CSB14049',
    Name: 'ALOK KUMAR',
    Email: 'akmorya7488@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094d'),
    Roll_Number: 'CSB14050',
    Name: 'RAJESH KUMBANG',
    Email: 'rktu131@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094e'),
    Roll_Number: 'CSB14051',
    Name: 'SHUBHAM KUMAR',
    Email: 'mail2shubhampandey@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e094f'),
    Roll_Number: 'CSB14052',
    Name: 'PRABHAT KUMAR',
    Email: 'prabhatkr.963@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0950'),
    Roll_Number: 'CSB14054',
    Name: 'MANNEM VAMSHI',
    Email: 'Edward.r.vamshi@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0951'),
    Roll_Number: 'CSB14055',
    Name: 'PASHUPATI NATH PRASAD',
    Email: 'pas31613@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0952'),
    Roll_Number: 'CSB14056',
    Name: 'PANKAJ KUMAR SHARMA',
    Email: 'pankajsharma01996@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0953'),
    Roll_Number: 'CSB14061',
    Name: 'PIRNCE MISHRA',
    Email: 'princeshah2222@gmail.com'
  },
  {
    _id: ('66b3c157b6deeaf5ec3e0954'),
    Roll_Number: 'CSB14062',
    Name: 'ANGSHUMAN BISWAS',
    Email: '23angshu@gmail.com'
  }
]
export default async function Year({params}) {
  
  const { school, program,course, year } = params;
  console.log(school, program,course, year)
  // const Data =await FetchData(course,year)
  // console.log(Data)
  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div >
      <h1>Students of {year} in {course} ({program} at {school})</h1>
      <div>
        {Data.map((t,index) => (
        <div key={t._id+index}>
            <h4>{t.Name}</h4>
            <p>{t.Roll_Number}</p>
            <p>{t.Email}</p>
            <div>
              <IoMail/>
              <IoLogoLinkedin/>
            </div>
        </div>
        
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
