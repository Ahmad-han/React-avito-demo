// library
import { useLocation } from "react-router-dom"

// components
import { MenuLogo } from "./MenuLogo"
import { MenuRating } from "./MenuRating"
import { MenuTitle } from "./MenuTitle"



// styles
import styles from "../../pages/messages.module.css"





export const Menu = () => {
const { pathname } = useLocation();

const label = [
    {
        label: "Мои объявления",
        path: "/My/advertisment"
    },
    {
        label: "Заказы"
    },
    {
        label: "Мои отзывы"
    },
    {
        label: "Избранное"
    },
    {
        label: "Резюме"
    },
    {
        label: "Сообщение",
        path: "/message"
    },
    {
        label: "Уведомление"
    },
    {
        label: "Кошелек"
    },
    {
        label: "Платные услуги"
    },
    {
        label: "Для профессионалов"
    },
    {
        label: "Спецпредложения"
    },
    {
        label: "Управление профилем"
    },
    {
        label: "Защита профиля"
    },
    {
        label: "Настройки"
    },
    {
        label: "Lincode-Avito доставка"
    }
];

    return (
        <div className={styles.menu}>
            <MenuLogo />
            <MenuTitle />
            <MenuRating />
            <br />
            <br />
            {
                label.map((lab) => (
                    <>
                    <ul>
                        <li className={`${lab.path === pathname ? styles.active : ""}`}>
                            {lab.label}
                        </li>
                    </ul>
                    <hr />
                    </>
                ))
            }
        </div>
    )
}