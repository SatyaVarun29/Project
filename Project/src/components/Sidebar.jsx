import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = ['Menu One', 'Menu Two', 'Menu Three', 'Menu Four', 'Menu Five', 'Menu Six', 'Menu Seven', 'Menu Eight', 'Menu Nine', 'Menu Ten'];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
