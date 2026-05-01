import Greeting from "./components/greeting";
import Information from "./components/information";
import Contact from "./components/contact";
import Attendance from "./components/attendance";
import Gallery from "./components/gallery";
import Location from "./components/location";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Greeting/>
            <Information/>
            <Contact/>
            <Attendance/>
            <Gallery/>
            <Location/>
        </Layout>
    )
}

export default App
