import React from 'react';
import './TaskStats.css';

function TaskStats() {
  return (
    <div className="task-stats-container">
      <h4>All tasks by complete status</h4>
      <div className="task-stats">
        <p><strong>55%</strong> Completed Task</p>
        <p><strong>30%</strong> Incompleted Task</p>
        <p><strong>15%</strong> Overdue</p>
      </div>
    </div>
  );
}

export default TaskStats;
