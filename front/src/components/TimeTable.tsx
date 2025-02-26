import { useState, useMemo } from "react";
import useFetchSchedule from "../hooks/useFetchSchedule";
import { ScheduleItem } from "../api/scheduleApi";
import "../components/TimeTable.css";

const TimeTable = () => {
    const { schedule, loading, error } = useFetchSchedule();

    // ✅ 첫 번째 카테고리 (Faculty)
    const faculties = [
        "CFL", "FAS", "FBM", "FETBE", "FHTM", "FOMHS", "FOSSLA",
        "FPS", "IASDA", "ICAD", "ICSDI", "SABE"
    ];
    const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);
    const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

    const handleFacultyChange = (faculty: string) => {
        setSelectedFaculty(faculty);
        setSelectedCourses([]);
        setFacultyDropdownOpen(false);
        setCoursesDropdownOpen(true);
    };

    // ✅ 두 번째 카테고리 (선택한 Faculty에 해당하는 CourseCode만 표시)
    const courses = useMemo(() => {
        if (!selectedFaculty) return [];
        return schedule
            .filter(({ facultyCode }) => facultyCode === selectedFaculty)
            .map(({ courseCode }) => courseCode)
            .filter((value, index, self) => self.indexOf(value) === index);
    }, [selectedFaculty, schedule]);

    const handleCourseChange = (course: string) => {
        setSelectedCourses((prev) =>
            prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
        );
    };

    // ✅ 타임테이블 매핑 (요일이 가로, 시간이 세로)
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const timeSlots = Array.from({ length: 14 }, (_, i) => `${9 + i}:00`.padStart(5, "0"));

    const timetableMap: Record<string, Record<string, ScheduleItem[]>> = {};

    daysOfWeek.forEach(day => {
        timetableMap[day] = {};
        timeSlots.forEach(time => {
            timetableMap[day][time] = [];
        });
    });

    // ✅ 선택한 Course에 해당하는 강의만 타임테이블에 추가 (시간 반영)
    schedule
        .filter(({ courseCode }) => selectedCourses.includes(courseCode))
        .forEach(item => {
            const day = item.dayOfWeek;
            const startTime = item.startTime;
            const duration = item.minPerSession; // 🔥 이미 시간 단위라 바로 사용하면 됨!

            const startIndex = timeSlots.indexOf(startTime);
            if (startIndex !== -1) {
                for (let i = 0; i < duration; i++) {
                    const timeSlot = timeSlots[startIndex + i];
                    if (timeSlot && timetableMap[day][timeSlot]) {
                        timetableMap[day][timeSlot].push(item);
                    }
                }
            }
        });

    return (
        <div className="timetable-container">
            <h2>Timetable</h2>

            {/* ✅ 두 개의 카테고리를 나란히 배치 */}
            <div className="category-container">
                <div className="category-group">
                    <button className="category-title" onClick={() => setFacultyDropdownOpen((prev) => !prev)}>
                        {selectedFaculty || "Select Faculty"} ▼
                    </button>
                    {facultyDropdownOpen && (
                        <div className="subcategory-list">
                            {faculties.map((faculty) => (
                                <div
                                    key={faculty}
                                    className={`category-option ${selectedFaculty === faculty ? "selected" : ""}`}
                                    onClick={() => handleFacultyChange(faculty)}
                                >
                                    {faculty}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {selectedFaculty && (
                    <div className="category-group">
                        <button className="category-title" onClick={() => setCoursesDropdownOpen((prev) => !prev)}>
                            Select Courses ▼
                        </button>
                        {coursesDropdownOpen && (
                            <div className="subcategory-list">
                                {courses.map((course) => (
                                    <label key={course} className="category-option">
                                        <input
                                            type="checkbox"
                                            value={course}
                                            checked={selectedCourses.includes(course)}
                                            onChange={() => handleCourseChange(course)}
                                        />
                                        {course}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* ✅ 로딩 & 에러 처리 */}
            {loading ? <p>Loading timetable...</p> : error ? <p>{error}</p> : null}

            {/* ✅ 타임테이블 */}
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
                                                <strong>{cls.courseCode}</strong>
                                                <p>{cls.lecturer}</p>
                                                <p>{cls.resourceCode}</p>
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
