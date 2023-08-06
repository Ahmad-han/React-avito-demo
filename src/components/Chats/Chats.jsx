// library
import { Chat } from "./Chat"

// components
import { useSelector } from "react-redux"








export const Chats = () => {
    const chats = useSelector((state) => state.chats.chats)
    return (
        <>
            {
                chats.map((chat) => <Chat chat={chat}/>)
            }
        </>
    )
}