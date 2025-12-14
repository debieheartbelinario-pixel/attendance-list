
import React from 'react';

const AttendanceList = ({ student, updateStudentStatus, deleteStudent }) => {
    // Determine the color based on the current status
    let statusColor = '';
    switch (student.status) {
        case 'P':
            statusColor = 'bg-green-500'; // Green for Present
            break;
        case 'A':
            statusColor = 'bg-red-500'; // Red for Absent
            break;
        case 'L':
            statusColor = 'bg-yellow-500'; // Yellow/Orange for Leave
            break;
        default:
            statusColor = 'bg-gray-300';
    }

    // Helper class for the status buttons
    const getButtonClass = (buttonStatus) => (
        `status-btn ${student.status === buttonStatus ? 'status-active' : 'status-inactive'}`
    );

    return (
        <div className={`student-row ${statusColor}`}>
            <span className="student-name">{student.name}</span>
            <span className="student-info">(Roll No. {student.rollNo})</span>
            <div className="status-buttons">
                {/* Mark Present */}
                <button
                    className={getButtonClass('A')}
                    onClick={() => updateStudentStatus(student.id, 'A')}
                >
                    A
                </button>
                {/* Mark Absent */}
                <button
                    className={getButtonClass('P')}
                    onClick={() => updateStudentStatus(student.id, 'P')}
                >
                    P
                </button>
                {/* Mark Late */}
                <button
                    className={getButtonClass('L')}
                    onClick={() => updateStudentStatus(student.id, 'L')}
                >
                    L
                </button>
                {/* Delete/Remove Student (Simulated Delete CRUD) */}
                <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                    title="Remove Student"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default AttendanceList;