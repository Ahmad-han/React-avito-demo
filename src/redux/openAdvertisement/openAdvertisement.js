const initialState = {
    image: [],
    desc: [],
    address: [],
    phone: [],
    title: [],
    loadingCards: false
}



export const OpenAdvertismentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "load/image/start":
            return {
                ...state,
                loadingCards: true
            }

        case "load/image/success":
            return {
                ...state,
                loadingCards: false,
                image: action.payload
            }

        case "load/desc/start":
        return {
                ...state,
                loadingCards: true
            }
    
        case "load/desc/success":
            return {
                ...state,
                loadingCards: false,
                desc: action.payload
            }

        case "load/address/start":
            return {
                ...state,
                loadingCards: true
            }
        
        case "load/address/success":
            return {
                ...state,
                loadingCards: false,
                address: action.payload
            }

        case "load/phone/start":
                return {
                    ...state,
                    loadingCards: true
                }
            
        case "load/phone/success":
                return {
                    ...state,
                    loadingCards: false,
                    phone: action.payload
                }

        case "load/title/start":
                return {
                    ...state,
                    loadingCards: true
                }
                
        case "load/title/success":
                return {
                    ...state,
                    loadingCards: false,
                    title: action.payload
                }


        default:
            return state;
    }
}