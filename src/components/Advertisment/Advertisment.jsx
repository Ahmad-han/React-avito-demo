

// image
import advertisment from "../../assets/advertisment-lincode.png"

// styles
import styles from "./Advertisment.module.css"


export const Advertisment = () => {

    return (
        <div className={styles.advertisment}>
            <h1>Мои объявления</h1>
            <br />
            <br />

            <div className={styles.border_bottom}>
                <div className={styles.active_and_archive}>
                    <span className={styles.actived}>Активные</span>
                    <span className={styles.archived}>Архив</span>
                </div>
            </div>

            <div className={styles.advertisment_block}>
                <div className={styles.advertisment_image}>
                    <img src={advertisment} alt="" />
                </div>

                <div className={styles.advertisment_text}>
                    <p className={styles.course}>
                    Курсы программирования
                    (Frontend-разработка)
                    </p>

                    <p className={styles.price}>35.000₽ за услугу</p>

                    <p className={styles.location}>Чеченская Республика, Грозный</p>
                </div>
            </div>
        </div>
    )
}