import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Seat.module.css"
import { selectSeats, deselectSeat } from "../../Store/screenSlice";

 
function Seat(props) {

    const [status, setStatus] = useState('Available')
    const dispatch = useDispatch()
    const seatNumber = props.index+1
    
     
    function handleSelect(){
        if(status  === "Available"){
            setStatus("selected")
            dispatch(selectSeats({rowName:props.rowName,seatNumber:seatNumber}))

        }
        else{
            setStatus("Available")
            dispatch(deselectSeat({rowName:props.rowName,seatNumber:seatNumber}))

        }

    }

    return (
        <li className={styles.Seat + " " + (status==="selected"?styles.Selected:" ")} onClick={()=>{handleSelect()}}>
            <span>{seatNumber}</span>
        </li>
    )
}
export default Seat;