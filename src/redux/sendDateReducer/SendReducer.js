const initialState = {
    sendData: [],
    loading: false
}



export const sendData = (state = initialState, action) => {
    switch(action.type) {
        case "send/data/start":
            return {
                ...state,
                loading: true
            }

        case "send/data/success":
            return {
                ...state,
                loading: false,
                sendData: action.payload
            }


        default:
            return state;
    }
}