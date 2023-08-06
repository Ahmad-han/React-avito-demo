
// image
import menu_logo from "../../assets/menu-logo.png"


// styles
import styles from "../../pages/messages.module.css"



export const MenuLogo = () => {

    return (
        <div className={styles.menu_logo}>
            <img src={menu_logo} alt="menu_logo" />
        </div>
    )
}