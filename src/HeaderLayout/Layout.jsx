import { Outlet } from "react-router-dom"
import Header from "./Header"
import  Footer  from "./Footer.Jsx"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;