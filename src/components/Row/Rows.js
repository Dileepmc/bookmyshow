import React from "react";
import styles from "./Row.module.css"
import Seat from "../Seat/Seat";



function Row(props){
  const seatsArray = new Array(props.row.numberOfSeats).fill('Available')

    return (
    <li className={styles.Row}>
    <h4>{props.row.name}</h4>
    <div className={styles.RowWrapper}>
    <ul className={styles.RowSeats}>
        {
          seatsArray.map((seat,index)=>{
            
            return(
                <Seat key={index} seat={seat} index={index} rowName={props.row.name}/>
            )
          })  
        }
    </ul>
    </div>
</li>


    )
}
export default Row;