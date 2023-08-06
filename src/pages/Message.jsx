
// components
import { Menu } from "../components/Menu"
import { Messages } from "../components/Messages"

// styles

import styles from "./messages.module.css"



export const Message = () => {

    return (
        <div className={styles.container}>
            <Menu />
            <Messages />
        </div>
    )
}