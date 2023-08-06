// library
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"



// components
import { AdvertismentButtons } from "../components/AdvertismentButtons/AdvertismentButtons"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Button } from "../components/Button/Button"
import { Slider } from "../components/Slider/Slider"
import { TitleAndPrice } from "../components/TitleAndPrice/TitleAndPrice"
import { Location } from "../components/Location/Location"
import { Description } from "../components/Description/Description"







export const OpenAdvertisment = () => {

  const id = parseInt(useParams().id)
  const desc = useSelector((state) => state.openCards.desc) 
  const address = useSelector((state) => state.openCards.address)
  const image = useSelector((state) => state.openCards.image) 
  const phone = useSelector((state) => state.openCards.phone) 
  const title = useSelector((state) => state.openCards.title)
  
  return (
    <div className="container">
        <Breadcrumbs />
        {
          title.filter((elem) => elem.id === id).map((item) => <TitleAndPrice item={item}/>)
        }
        <AdvertismentButtons />
        <div className="sliders_and_buttons">

          <div className="slider_left">
            {
              image.filter((elem) => elem.id === id).map((item) => <Slider item={item}/>)
            }
          </div>

          <div className="buttons_right">
            {
              phone.filter((elem) => elem.id === id).map((item) => <Button 
              text={item.phone} 
              color="white" 
              width="300px" 
              padding="15px" 
              fontSize="23px"/>)
            }
            <br />
            <br />
            <Button text="Написать сообщение" color="white" width="300px" padding="15px" fontSize="23px"/>
          </div>
        </div>
        {
          address.filter((elem) => elem.id === id).map((item) => <Location item={item}/>)
        }  
        {
          desc.filter((elem) => elem.advertisementId === id).map((item) => <Description item={item}/>)
        }    
    </div>
  )
}
