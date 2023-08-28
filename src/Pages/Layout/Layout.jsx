import './Layout.css';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div id="main-content">
            <div id="header">
                <Header />
            </div>
            <div id="non-header">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
export default Layout;