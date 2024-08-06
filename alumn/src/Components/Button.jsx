import style from "@/css/button.module.css"
function Button(props){
    return(
        <>
        <div className={style.Button}>
            <button type={props.type}>{props.text} </button>
        </div>
        </>
    )
}
export default Button;