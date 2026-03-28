import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="main-layout">
            {/* Header */}
            <Header />
            {/* Outlet */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout;