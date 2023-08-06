// library
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// action
import { loadCards } from "../redux/homeAdvertisementReducer/action";
import { loadAddress, loadDesc, loadLargeImage, loadPhone, loadTitle } from "../redux/openAdvertisement/action";
import { chats } from "../redux/chatsReducer/action";

//components
import { Message } from "../pages/Message";
import { OpenAdvertisment } from "../pages/Open-Advertisment";
import { LincodeComponent } from "./Content/LincodeComponent";
import { Layout } from "./Layout/Layout";
import { AddAdvertisment } from "../pages/addAdvertisment";
import { MyAdvertisment } from "../pages/my-advertisment";






export const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadCards())
  dispatch(loadDesc())
  dispatch(loadLargeImage())
  dispatch(loadPhone())
  dispatch(loadTitle())
  dispatch(loadAddress())
  dispatch(chats())
}, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LincodeComponent />}/>
          <Route path="/advertisment/:id?" element={<OpenAdvertisment />}/>
          <Route path="/message" element={<Message />}/>
          <Route path="/add/advertisment" element={<AddAdvertisment />}/>
          <Route path="/My/advertisment" element={<MyAdvertisment />}/>
      </Route>
    </Routes>
  );
}


