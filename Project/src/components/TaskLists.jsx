import React from 'react';
import './TaskList.css';

function TaskList() {
  return (
    <div className="task-list-container">
      <div className="task-list-section">
        <h4>Current & Upcoming</h4>
        <ul>
          <li>
            <span className="task-title">ZEN Roadmap</span>
            <span className="task-status high">High</span>
          </li>
        </ul>
      </div>
      <div className="task-list-section">
        <h4>Completed</h4>
        <ul>
          <li>
            <span className="task-title">ZEN-01</span>
            <span className="task-status medium">Medium</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
