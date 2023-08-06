// components
import { Card } from "./Card";
import { useSelector } from "react-redux";

// styles
import styles from "./cards.module.css"




export const Cards = () => {

const cards = useSelector((state) => state.cards.cards)

    return (
        <div className={styles.cards_container}>
            {
            cards.map((card) => <Card card={card} key={cards.id}/>)
            }
        </div>
    )
}