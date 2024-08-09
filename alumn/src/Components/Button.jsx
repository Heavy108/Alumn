import style from "@/css/button.module.css"
import Link from "next/link";
function Button(props){
    return(
        <>
        <div className={style.Button}>
          
            <button >{props.text} </button>
           
        </div>

        </>
    )
}
export default Button;