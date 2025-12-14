
import React, { useState, useMemo } from 'react';
import AttendanceList from './AttendanceList.js'; 
import StudentForm from './StudentForm.js'; 
import initialStudents from './student.js'; 
import './index.css'; 

function App() {
    const [students, setStudents] = useState(initialStudents);
    const [newStudentName, setNewStudentName] = useState('');

    // --- CRUD Operations ---

    // 1. Update (Changing Status)
    const updateStudentStatus = (id, newStatus) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, status: newStatus } : student
            )
        );
    };

    // 2. Delete (Removing a Student)
    const deleteStudent = (id) => {
        setStudents(prevStudents =>
            prevStudents.filter(student => student.id !== id)
        );
    };

    // 3. Create (Adding a Student)
    const addStudent = () => {
        if (newStudentName.trim() === '') return;

        const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
        const newRollNo = students.length + 1;

        const newStudent = {
            id: newId,
            rollNo: newRollNo,
            name: newStudentName.trim(),
            status: 'P', // Default to Present
        };

        setStudents(prevStudents => [...prevStudents, newStudent]);
        setNewStudentName(''); // Clear the input
    };



    const summary = useMemo(() => {
        const totalPresent = students.filter(s => s.status === 'P').length;
        const totalAbsent = students.filter(s => s.status === 'A').length;
        const totalLate = students.filter(s => s.status === 'L').length;

        return {
            totalStudents: students.length,
            totalPresent,
            totalAbsent,
            totalLate,
        };
    }, [students]);

    // Function to simulate submission
    const handleSubmitAttendance = () => {
        console.log("Attendance Submitted:", students.map(s => ({
            rollNo: s.rollNo,
            name: s.name,
            status: s.status
        })));
        alert("Attendance Data Logged to Console/Submitted!");
    };

    return (
        <div className="attendance-portal-container">
            <header className="portal-header">
                <h1>Attendance List</h1>
                <span className="academic-year">Academic Year: 2025</span>
            </header>

            <main className="attendance-form-box">
                <h2>Mark Attendance</h2>

                {/* Simulated Add Student Functionality (CRUD Create) */}
                <div className="add-student-area">
                    <input
                        type="text"
                        placeholder="Enter New Student Name"
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)}
                        className="add-student-input"
                    />
                    <button onClick={addStudent} className="btn-add-student">Add Student</button>
                    {/* Simplified 'Add Class' - not functional */}
                    <button className="btn-add-class" disabled>Add Class</button>
                </div>

                <div className="class-selection">
                    <label htmlFor="class-select">Class:</label>
                    {/* Class dropdown is decorative in this single-table setup */}
                    <select id="class-select" value="Class 1" disabled>
                        <option>Class 1</option>
                    </select>
                </div>

                <div className="attendance-list">
                    {students.map((student) => (
                        <AttendanceList
                            key={student.id}
                            student={student}
                            updateStudentStatus={updateStudentStatus}
                            deleteStudent={deleteStudent}
                        />
                    ))}
                </div>

                <div className="summary">
                    <h3>Summary</h3>
                    <p>Total Students : {summary.totalStudents}</p>
                    <p>Total Present : {summary.totalPresent}</p>
                    <p>Total Absent : {summary.totalAbsent}</p>
                    <p>Total Late : {summary.totalLate}</p>
                    <button
                        className="submit-btn"
                        onClick={handleSubmitAttendance}
                    >
                        Submit Attendance
                    </button>
                </div>
            </main>
        </div>
    );
}

export default App;