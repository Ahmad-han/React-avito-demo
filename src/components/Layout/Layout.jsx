// library
import { Outlet } from "react-router-dom"

// components
import { Header } from "../Header/Header"
import { Logo } from "../Content/Logo/Logo"
import { Search } from "../Content/Search/Search"
import { Footer } from "../Footer"



export const Layout = () => {

    return (
      <>
        <Header />
        <div className="container-2">
          <Logo />
          <Search />
        </div>
        <Outlet />
        <Footer />
      </>
    );
}