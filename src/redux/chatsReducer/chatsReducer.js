const initialState = {
    chats: [],
    loading: false
}



export const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case "load/chats/start":
            return {
                ...state,
                loading: true
            }

        case "load/chats/success":
            return {
                ...state,
                loading: false,
                chats: action.payload
            }


        default:
            return state;
    }
}