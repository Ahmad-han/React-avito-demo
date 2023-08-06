// library
import { useState } from "react"
import { useDispatch } from "react-redux";
import { SendDate } from "../redux/sendDateReducer/action";

// components
import { Button } from "../components/Button/Button"

// styles
import styles from "./add-advertisment.module.css"




export const AddAdvertisment = () => {
const [nameOfAdvertisment, setNameOfAdvertisment] = useState("");
const [image, setImage] = useState("");
const [desc, setDesc] = useState("");
const [price, setPrice] = useState("");
const [location, setLocation] = useState("");
const dispatch = useDispatch();

const handleClick = () => {
    dispatch(SendDate(nameOfAdvertisment, image, desc, price, location))
}


    return (
        <div className="container">
            <h1>Разместить объявление</h1>
            <div className={styles.title_advertisment}>
                <span>Название объявления</span>
                <input 
                type="text"
                placeholder="название объявления"
                value={nameOfAdvertisment}
                onChange={(e) => setNameOfAdvertisment(e.target.value)}
                 />
            </div>

            <div className={styles.photo_advertisment}>
                <span>Картинка объявления</span>
                <input 
                type="text"
                placeholder="картинка объявления"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                 />
            </div>

            <div className={styles.description_advertisment}>
                <span>Описание</span>
                <textarea 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                />

                <span>Ваша локация</span>
                <input 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                />
            </div>

            <div className={styles.price_advertisment}>
                <span>Цена</span>
                <select >
                    <option disabled>цена от</option>
                    <option value="1000₽">1000₽</option>
                    <option value="2000₽">2000₽</option>
                    <option value="3000₽">3000₽</option>
                    <option value="4000₽">4000₽</option>
                    <option value="5000₽">5000₽</option>
                    <option value="6000₽">6000₽</option>
                    <option value="7000₽">7000₽</option>
                    <option value="8000₽">8000₽</option>
                    <option value="9000₽">9000₽</option>
                    <option value="10000₽">10.000₽</option>
                    <option value="11000₽">11.000₽</option>
                    <option value="12000₽">12.000₽</option>
                    <option value="13000₽">13.000₽</option>
                    <option value="14000₽">14.000₽</option>
                    <option value="15000₽">15.000₽</option>
                    <option value="16000₽">16.000₽</option>
                    <option value="17000₽">17.000₽</option>
                    <option value="18000₽">18.000₽</option>
                    <option value="19000₽">19.000₽</option>
                    <option value="20000₽">20.000₽</option>
                </select>

                <p>или же введите свою цену</p>

                <input 
                type="text"
                placeholder="введите вашу цену"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                 />
            </div>

            <div className={styles.button_advertisment}>
                <Button 
                text="Отправить" 
                color="white" 
                width="250px"
                onSubmit={handleClick}
                />
            </div>
        </div>
    )
}