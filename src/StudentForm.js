// src/StudentForm.jsx
import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [newStudentName, setNewStudentName] = useState('');

  const handleSubmit = () => {
    onAddStudent(newStudentName);
    setNewStudentName(''); // Clear the input after submission
  };

  return (
    <div className="add-student-area">
      <input
        type="text"
        placeholder="Enter New Student Name"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        className="add-student-input"
      />
      <button
        onClick={handleSubmit}
        className="btn-add-student"
        disabled={newStudentName.trim() === ''} // Disable if input is empty
      >
        Add Student
      </button>
      <button className="btn-add-class" disabled>
        Add Class
      </button>
    </div>
  );
};

export default StudentForm;
