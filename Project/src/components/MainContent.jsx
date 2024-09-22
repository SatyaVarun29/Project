import {React, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import "./MainContent.css";
import EmployeeDetails from "./EmployeeDetails";

const members = [
  { name: "Victor", role: "UI UX Team Lead" },
  { name: "Alexa", role: "Sr. UI UX Designer" },
  { name: "Juliet", role: "Blockchain Dev. Team Lead" },
  { name: "Hina", role: "QA Team Lead" },
  { name: "Steve", role: "UI UX Team Manager" },
  { name: "Andrielle", role: "Sr. UI UX Designer" },
  { name: "Billie", role: "Blockchain Dev. Manager" },
  { name: "Alita", role: "QA Team Manager" },
];

const MainContent = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  
  const handleViewProfile = (member) => {
    setSelectedMember(member);
  };
  return (
<Router>
      <div className="main-content">
        <h2>Project Members</h2>
        <input type="text" placeholder="Search 08 employees" />

       
        {selectedMember ? (
        <EmployeeDetails member={selectedMember} />
      ) : (
        <div className="member-grid">
          {members.map((member, index) => (
            <ProfileCard key={index} member={member} onViewProfile={handleViewProfile} />
          ))}
        </div>
      )}

     
        <Routes>
       
          <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
        </Routes>
      </div>
    </Router>



    
  );
};

export default MainContent;


