// components
import { Button } from "../Button/Button"

// styles
import styles from "../../pages/messages.module.css"




export const MessagesButton = () => {

    return (
        <div className={styles.messages_button}>
            <div className="all_messages">
                <Button 
                text="Все сообщения" 
                width="200px" 
                color="white"
                />
            </div>
            <div className="filtered_button">
            <Button 
            text="Фильтр" 
            width="200px" 
            color="white"/>
            </div>
            <div className={styles.search_form}>
                <input 
                type="text" 
                placeholder="Поиск по сообщениям..."
                />
            </div>
        </div>
    )
}