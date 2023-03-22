import style from './taskcard.module.scss'
import {useState} from "react";

const TaskCard = (props) => {

    const [status, setStatus] = useState(props.completed)

    console.log(props.description)
    return (
        <div className={style.card}>
            <input type={"checkbox"} checked={status} onChange={() => {setStatus(!status)}}/>
            <p>{props.description}</p>
        </div>
    );
};

export {TaskCard};