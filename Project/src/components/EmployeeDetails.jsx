import React from 'react';
import './EmployeeDetails.css';
import Ratings from './Ratings';
import TaskStats from './Taskstats';
import TaskLists from './TaskLists';

function EmployeeDetails({member}) {
  return (
    <div className="employee-details-container">
      <div className="employee-header">
        <div className="employee-photo">
          <img src="src/Assets/images/member.jpeg" alt="Employee" />
        </div>
        <div className="employee-info">
          <span className="employee-role">{member.role}</span>
          <h2>Welcome, {member.name}</h2>
          <p>Manage your info, privacy, and security to make Frontend work better for you. <a href="#">Learn more</a></p>
        </div>
      </div>
      <Ratings />
      <div className="employee-task-section">
        <TaskStats />
        <TaskLists />
      </div>
    </div>
  );
}

export default EmployeeDetails;
