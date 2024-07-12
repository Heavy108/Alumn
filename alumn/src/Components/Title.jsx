import  style from "@/css/Title.module.css";

function Title({title}){
    return(
    <div className={style.title}>
        <center><h1>{title}</h1></center>
    </div>
    )
    
}
export default Title;