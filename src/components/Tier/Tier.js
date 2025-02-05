import React from "react";
import styles from "./Tier.module.css"
import Row from "../Row/Rows";

function Tier(props) {
    const tier = props.tier
    return (
        <li className={styles.Tier}>
            <h3>{tier.name} - {tier.price}RS</h3>
            <ul className={styles.TierRows}>
                {
                    tier.rows.map(row => {
                        return (
                            <Row row={row} key={row._id} />
                        )
                    })
                }
            </ul>
        </li>


    )
}
export default Tier;