import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Moviecard from "../components/Moviecard/Moviecard";
import styles from "./HomePage.module.css"


export async function loader(){
    const res =  await axios.get("http://localhost:3000/movies")
    const data = res.data
    return { data};

 }
function HomePage(){
    const { data } = useLoaderData()

    return(
        <main>
            <section>
                <h2>Latest Realease</h2>
                <ul className={styles.MoviesList}>
                    {
                        data.map((movie, index)=>{
                            return  <Moviecard key={movie._id} movie={movie}/>
                        })
                    }
                </ul>
            </section>
        </main>


    )
}
export default HomePage;