import { useState } from "react";
import "../components/TimeTable.css";

const categories: Record<string, string[]> = {
    "Design": ["UI/UX", "Graphic Design"],
    "Computer Science": ["AI", "Web Development", "Cyber Security"],
    "Engineering": ["Mechanical", "Electrical", "Civil"],
    "Business": ["Marketing", "Finance", "Entrepreneurship"]
};

const allSubCategories = Object.values(categories).flat();
const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const classData = [
    { id: 1, category: "UI/UX", className: "UI/UX Basics", location: "Room 101", day: "Mon", time: "09:00" },
    { id: 2, category: "AI", className: "Machine Learning", location: "Room 202", day: "Mon", time: "09:00" },
    { id: 3, category: "Mechanical", className: "Thermodynamics", location: "Room 303", day: "Wed", time: "11:00" },
    { id: 4, category: "Marketing", className: "Marketing 101", location: "Room 404", day: "Thu", time: "13:00" },
    { id: 5, category: "Web Development", className: "React Basics", location: "Room 505", day: "Fri", time: "14:00" },
    { id: 6, category: "Graphic Design", className: "Photoshop Mastery", location: "Room 102", day: "Mon", time: "09:00" },
    { id: 7, category: "Cyber Security", className: "Ethical Hacking", location: "Room 606", day: "Wed", time: "16:00" },
    { id: 8, category: "Finance", className: "Investment Strategies", location: "Room 707", day: "Thu", time: "17:00" }
];

const TimeTable = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(allSubCategories); // ✅ 기본값: 전체 선택
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const handleSubCategoryChange = (subCategory: string) => {
        setSelectedCategories((prev) =>
            prev.includes(subCategory) ? prev.filter((c) => c !== subCategory) : [...prev, subCategory]
        );
    };


    const timetableMap: Record<string, Record<string, { className: string; location: string }[]>> = {};
    daysOfWeek.forEach(day => {
        timetableMap[day] = {};
        timeSlots.forEach(time => {
            timetableMap[day][time] = [];
        });
    });

    classData.filter(item => selectedCategories.includes(item.category)).forEach(item => {
        const { day, time, className, location } = item;
        timetableMap[day][time].push({ className, location });
    });

    return (
        <div className="timetable-container">
            <h2>Timetable</h2>

            <div className="category-filter">
                {Object.keys(categories).map((category) => (
                    <div
                        key={category}
                        className="category-group"
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <div className="category-title">
                            {category} {hoveredCategory === category ? "▲" : "▼"}
                        </div>
                        <div
                            className={`subcategory-list ${hoveredCategory === category ? "show" : ""}`}
                        >
                            {categories[category].map((subCategory) => (
                                <label key={subCategory} className="category-option">
                                    <input
                                        type="checkbox"
                                        value={subCategory}
                                        checked={selectedCategories.includes(subCategory)}
                                        onChange={() => handleSubCategoryChange(subCategory)}
                                    />
                                    {subCategory}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <table className="timetable">
                <thead>
                <tr>
                    <th></th>
                    {daysOfWeek.map(day => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {timeSlots.map(time => (
                    <tr key={time}>
                        <td className="time-slot">{time}</td>
                        {daysOfWeek.map(day => (
                            <td key={`${day}-${time}`} className="class-cell">
                                {timetableMap[day][time].length > 0 ? (
                                    <div className="class-info-multiple">
                                        {timetableMap[day][time].map((cls, index) => (
                                            <div key={index} className="class-info">
                                                <strong>{cls.className}</strong>
                                                <p>{cls.location}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
