// styles
import styles from "./header.module.css"



export const Menu = () => {

    return (
        <div className={styles.menu}>
           <ul>
                <li>Для бизнеса</li>
                <li>Lincode Avito Pro</li>
                <li>Вакансии</li>
                <li>Помощь</li>
                <li>Каталоги</li>
           </ul>
        </div>
    )
}