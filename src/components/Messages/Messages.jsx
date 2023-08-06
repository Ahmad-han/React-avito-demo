// components
import { MessagesButton } from "./Messages-Button"
import { Chats } from "../Chats"


// styles
import styles from "../../pages/messages.module.css"







export const Messages = () => {

    return (
        <div className={styles.messages}>
            <span>Сообщения</span>

            <MessagesButton />
            <Chats />
        </div>
    )
}