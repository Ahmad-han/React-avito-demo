// components
import { Advertisment } from "../components/Advertisment/Advertisment"
import { Menu } from "../components/Menu"

// styles
import styles from "../pages/messages.module.css"



export const MyAdvertisment = () => {

    return (
        <div className={styles.container}>
                <Menu />
                <Advertisment />
        </div>
    )
}