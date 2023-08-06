

// styled
import styled from "styled-components"

const DropDownWrapper = styled.div`
    width: 270px;
    background-color: #D8D8D8;
    padding: 10px;
    border-radius: 10px;
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 0 10px 15px;
    border-bottom: 1px solid gray;
    
    & li {
        padding: 15px;
        color: #0382F7;
        margin-top: 10px;

        &:hover {
            background-color: #011765;
            color: #fff;
            padding-left: 40px;
            width: 230px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`


export const DropDown = () => {
    
    return (
        <DropDownWrapper>
            <List>
                <li>Мои объявления</li>
                <li>Заказы</li>
                <li>Мои отзывы</li>
                <li>Избранное</li>
            </List>

            <List>
                <li>Сообщения</li>
                <li>Уведомления</li>
            </List>

            <List>
                <li>Кошелек</li>
                <li>Платные услуги</li>
                <li>Спецпредложения</li>
            </List>

            <List>
                <li>Управление профилем</li>
                <li>Защита профиля</li>
                <li>Настройки</li>
                <li>Lincode-Avito доставка</li>
            </List>
        </DropDownWrapper>
    )
}