//library
import { Button } from "../Button/Button"
import { Link } from "react-router-dom"
import { DropDown } from "../DropDown/DropDown"

//styles
import styles from "./header.module.css"

// hooks
import useOutsideAlerter from "../../hook/UseOutside"

//icons
import heart from "../../assets/heart-header.svg"
import message from "../../assets/message-header.svg"
import account from "../../assets/menu-logo.png"






export const Navigation = () => {
const { ref, isShow, setIsShow } = useOutsideAlerter(false)

    return (
        <div className={styles.navigation}>
            <div className={styles.heart}>
                <img src={heart} alt="heart" />
            </div>

            <div className={styles.message}>
                <Link to="/message">
                    <img src={message} alt="message" />
                </Link>
                
            </div>

            <div className={styles.announcement}>
                <Link to="/My/advertisment">
                    Мои объявления
                </Link>    
            </div>

            <div className={styles.account} ref={ref} onClick={() => setIsShow(!isShow)}>
                <div className={styles.avatar}>
                    <img src={account} alt="account" />
                </div>
                    <p className={styles.p}>Lincode</p>
                    {
                        isShow ? (
                            <div className={styles.dropdown_content}>
                                 <DropDown />
                            </div>
                        )
                        :
                        ""
                    }
            </div>
            <Link to="/add/advertisment">
                 <Button color="white" text="Разместить объявление" width="205px"/>
            </Link>
            
        </div>
    )
}