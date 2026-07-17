import Greeting from "./components/greeting";
import Information from "./components/information";
import Contact from "./components/contact";
import Attendance from "./components/attendance";
import Gallery from "./components/gallery";
import Location from "./components/location";
import Layout from "./components/layout/Layout";
import Account from "./components/account";
import Footer from "./components/footer";

function App() {
    return (
        <Layout>
            <Greeting/>
            <Information/>
            <Contact/>
            <Account/>
            <Gallery/>
            <Location/>
            <Footer/>
        </Layout>
    )
}

export default App
