'use client'
import { useState ,useEffect } from "react";
import "@/css/Carasoul.css"
import Image from "next/image";


const items = [
  {
    image: "/1.jpeg",
  },
  {
    image: "/Carasoul2.jpeg",
  },
  {
    image: "/Carasoul3.jpeg",
  },
];

const Card = (props) => {
  return (
    <>
      <li className="card" key={props.ind}>
        <div className="Introduction">
          <h2
            // style={{
            //   textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            //   backgroundColor: "rgba(0, 0, 0, 0.5)",
            // }}
          >
            Together Again!
          </h2>
          <p
            // style={{
            //   textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            //   backgroundColor: "rgba(0, 0, 0, 0.5)",
            // }}
          >
            Welcome Home, Tezpur University Alumni! Let's celebrate our shared
            journey, rekindle cherished memories, and envision a brighter future
            together. United as one family, we inspire greatness!
          </p>
        </div>

        <Image
          src={props.image}
          width={1200}
          height={1200}
          alt="Univeristy Image"
        ></Image>
      </li>
      {/*     
    <li className="card">
    <Image
    src={props.image}
    width="10rem"
    height="5rem"
    alt="University Image"
    />
      
      <p>{props.copy}</p>
    </li> */}
    </>
  );
}

const Carasoul = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);
  
  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])
  useEffect(() => {
    const interval = setInterval(
      () => {
        setMoveClass("prev");
      },

      5000
    );

    return () => clearInterval(interval);
  }, []);
  
  const handleAnimationEnd = () => {
    if(moveClass === 'prev'){
      shiftNext([...carouselItems]);
    }else if(moveClass === 'next'){
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }
  
  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }
  
  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }
  
  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) => 
          <Card key={ index} image={t.image} ind={index} />
        )}
      </ul>
    </div>
  )
}
export default Carasoul;