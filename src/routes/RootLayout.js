import React from "react";
import styles from './RootLayout.module.css'
import { Link, Outlet } from "react-router-dom";


function RootLayout(props){
    return(
     <>
     <header className={styles.Header}>
        <span>Cinebaba</span>
        <nav>
            <ul className={styles.NavList}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <Link to={"/movies"}>Movies</Link>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
     </header>
     <Outlet />
     <footer className={styles.Footer}>
        <span>Copyright Cinebaba</span>
        <span>Developed By Dileep Mc</span>

     </footer>
     
     </>


    )
}
export default RootLayout;
