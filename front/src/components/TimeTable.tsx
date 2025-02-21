import { forwardRef } from "react";
import "./TimeTable.css";

const TimeTable = forwardRef<HTMLDivElement, object>((_, ref) => {
    const mockTimetable = [
        { time: "09:00 - 10:00", subject: "Mathematics", room: "101" },
        { time: "10:00 - 11:00", subject: "Physics", room: "102" },
        { time: "11:00 - 12:00", subject: "Chemistry", room: "103" },
        { time: "13:00 - 14:00", subject: "Biology", room: "104" },
        { time: "14:00 - 15:00", subject: "History", room: "105" },
    ];

    return (
        <div ref={ref} className="timetable-container">
            <h2 className="timetable-title">Time Table</h2>
            <table className="timetable-table">
                <thead>
                <tr>
                    <th>time</th>
                    <th>lecture</th>
                    <th>classroom</th>
                </tr>
                </thead>
                <tbody>
                {mockTimetable.map((item, index) => (
                    <tr key={index}>
                        <td>{item.time}</td>
                        <td>{item.subject}</td>
                        <td>{item.room}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
});

export default TimeTable;
