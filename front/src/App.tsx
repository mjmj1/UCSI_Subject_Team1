import React, { useRef } from "react";
// import TimeTable from "./components/TimeTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
    const timetableRef = useRef<HTMLDivElement | null>(null);

    const scrollToTimeTable = () => {
        if (timetableRef.current) {
            timetableRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="app-container">
            <Header scrollToTimeTable={scrollToTimeTable} />
            <main className="main-content">
                {/*<TimeTable ref={timetableRef} />*/}
            </main>
            <Footer />
        </div>
    );
};

export default App;
