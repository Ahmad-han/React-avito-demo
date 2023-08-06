
// image
import avatar_user from "../../assets/Avatar_user.png"


// styles
import styles from "../../pages/messages.module.css"




export const Chat = ({ chat }) => {

    return (
        <div className={styles.chat}>
            <div className={styles.avatar_user}>
                <img src={avatar_user} alt="" />
            </div>

        <div className={styles.message_right_block}>
            <div className={styles.messages_user_name}>
                <p>{chat.userName}</p>
                </div>
            
                <div className={styles.title_ad}>
                <p>{chat.nameOfAdvertisement}</p>
                </div>

                <div className={styles.message_from_user}>
                <p>{chat.message}</p>
                </div>
            </div>
        </div>
    )
}