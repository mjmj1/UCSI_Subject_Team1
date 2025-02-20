import { FaRegCalendarAlt } from "react-icons/fa";
import "./Header.css";

interface HeaderProps {
    scrollToTimeTable: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToTimeTable }) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="/assets/ucsi_uni_logo.png" alt="UCSI University Logo" className="header-logo" />
                <img src="/assets/qs_world_ranking_2025.png" alt="QS World Ranking 2025" className="header-ranking" />
            </div>


            <nav className="header-right">
                <button className="header-link" onClick={scrollToTimeTable}>
                    <FaRegCalendarAlt className="header-icon" />
                    <div className="header-text">
                        <span className="header-line"></span> Class Schedule <span className="header-line"></span>
                    </div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
