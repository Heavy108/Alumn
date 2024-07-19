import style from '@/css/Input.module.css';
export function Input(props){
    return(
        <>
        <div className={style.Input_field}>
            <label htmlFor={props.label}>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export function Textarea(){
    return(
        <>
        <div className={style.Textarea_field}>
            <label htmlFor=""></label>
            <textarea type="text" placeholder='#'/>
        </div>
        </>
    )
}
