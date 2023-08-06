export const SendDate = (nameOfAdvertisment, image, desc, price, location) => {
    return (dispatch) => {
        dispatch({type: "send/data/start"})

        fetch("http://localhost:8080/advertisement", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: nameOfAdvertisment,
                price: price,
                image: image,
                location: location,
                date: "Сегодня в 15:00"
            })
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: "send/data/success",
                payload: data
            })
        })
    }
}