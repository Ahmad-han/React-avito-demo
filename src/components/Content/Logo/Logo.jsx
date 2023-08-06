// library
import { Link } from "react-router-dom"

//logo

import logo from "../../../assets/logo-lincode.svg"

//styles
import styles from "../content.module.css"


export const Logo = () => {

    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            
        </div>
    )
}