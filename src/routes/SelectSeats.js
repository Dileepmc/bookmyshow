import React, { useEffect } from "react";
import axios from "axios";
import {Link,redirect,useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tier from "../components/Tier/Tier";
import styles from "./SelectSeats.module.css"
import { useSelector, useDispatch  } from "react-redux";
import { addTiers, selectedShow } from "../Store/screenSlice";

export async function loader({ params }) {
    const res = await axios.get('http://localhost:3000/shows/'+params.showId)
    const show = res.data
    const showId = params.showId
    const bookingRes = await axios.get('http://localhost:3000/bookings?show='+showId)
    const bookingList = bookingRes.data
    const bookedSeats = []
   


    return { show, showId, bookedSeats}
}


function SelectSeats(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { show,showId,} = useLoaderData()
    console.log()
    const screen = show.screen
    const screenData = useSelector(state => state.screen)
    const totalPrice = useSelector(state=> state.screen.totalPrice)

    
   
    useEffect(()=>{
        dispatch(addTiers(screen.tiers))
    }, [])


    const handleSeatConfirmation = () =>{
        dispatch(selectedShow(showId))
        navigate("/booking-summary");

        
    }
    return (
        <main className={styles.SelectSeatsMain}>
            <ul className={styles.Tiers}>
                {
                    screenData.tiers.map(tier => {
                        return (<Tier key={tier._id} tier={tier} />)

                    })
                }
            </ul>
            <div className={styles.ScreenDiv}>&nbsp;</div>
            <div>
                <button onClick={handleSeatConfirmation} className={styles.CheckoutButton} to="/booking-summary">Pay Rs.{totalPrice}</button>
            </div>

        </main>
            
    )
}
export default SelectSeats;