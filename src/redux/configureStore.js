// library
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { AdvertismentReducer } from "./homeAdvertisementReducer/advertisement";
import { OpenAdvertismentReducer } from "./openAdvertisement/openAdvertisement";
import { sendData } from "./sendDateReducer/SendReducer";
import { chatReducer } from "./chatsReducer/chatsReducer";
import thunk from "redux-thunk";


const logger = createLogger({
    diff: true,
    collapsed: true
})


const rootReducer = combineReducers({
    cards: AdvertismentReducer,
    openCards: OpenAdvertismentReducer,
    sendData: sendData,
    chats: chatReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunk, logger))