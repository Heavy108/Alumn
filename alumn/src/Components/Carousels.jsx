'use client'
import { useState ,useEffect } from "react";
import "@/css/Carasoul.css"
import Image from "next/image";


const items = [
    {
        image:"/1.jpeg",
       
    },
    {
      image:"/2.jpeg",
       
    },
    {
      image:'/3.jpeg',
       
    }
    
];

const Card = (props) => {
  return (<>
  <li className="card">
    <div className="Introduction">
    <h2>Together Again!</h2>
    <p 
    >Welcome back, brilliant minds of 0s and 1s! As CSE alumni, you're the architects of the digital future. Reconnect, reminisce, and inspire. Together, let's code unforgettable memories!</p>
    </div>
    
    <Image src={props.image} width={1200} height={1200} alt="Univeristy Image"></Image>

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
  )
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
          <Card key={ index} image={t.image}  />
        )}
      </ul>
    </div>
  )
}
export default Carasoul;