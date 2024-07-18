import style from "@/css/Gallery.module.css";
import Image from "next/image";
import Title from "./Title";


function Gallery(){
    const imagePaths = Array.from({ length: 8 }, (_, i) => `/Gallery/${i + 1}.jpg`);
    return(
        <>
        <Title title="Memories"/>
        <div className={style.gallery_container}>
        {imagePaths.map((path,index) => (
            <div className={style.img_card}   key={path +  index}>
        <Image
        
          src={path}
          width={220}
          height={220}
          alt="Memories"
        />
        </div>
      ))}

        </div>
        </>
    )
}
export default Gallery;