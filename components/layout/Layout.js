import CustomHead from "./CustomHead";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <CustomHead />
            <Topbar />
            <Navbar />
            <main style={{ minHeight: "80vh" }}>{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
