// components
import { Button } from "../Button/Button"


// icons
import heart from "../../assets/heart-open.svg"
import filter from "../../assets/filter.svg"


//styles
import styles from "./buttons.module.css"



export const AdvertismentButtons = () => {

    return (
        <div className={styles.buttons_container}>
            <Button 
            text="Добавить в избранное" 
            color="white" 
            width="200px"
            icon={heart}
            />

            <Button 
            text="Сравнить" 
            color="white" 
            width="200px"
            icon={filter}
            />
        </div>
    )
}