


// styles
import styles from "../../pages/messages.module.css" 




export const MenuRating = () => {

    return (
        <div className={styles.menu_rating}>
            <span>5,0</span>
            <span className={styles.menu_rating_star}>★</span>
            <span className={styles.menu_rating_star}>★</span>
            <span className={styles.menu_rating_star}>★</span>
            <span className={styles.menu_rating_star}>★</span>
            <span className={styles.menu_rating_star}>★</span>
        </div>
    )
}