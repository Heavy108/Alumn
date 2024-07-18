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
            
        <Image
          key={path +  index}
          src={path}
          width={220}
          height={220}
          alt="Memories"
        />
      ))}

        </div>
        </>
    )
}
export default Gallery;