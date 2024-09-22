import React from 'react';
import './ProfileCard.css';
import EmployeeDetails from './EmployeeDetails';
import {useNavigate} from 'react-router-dom'


const ProfileCard = ({ member,onViewProfile }) => {
  // const navigate = useNavigate();
  // const Empdetails=()=>{
  //   navigate('/EmployeeDetails');
  // }
  return (
    <div className="profile-card">
      <img src={(`../src/Assets/images/member.jpeg`)} alt={member.name} />
      
      
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <button onClick={()=>onViewProfile(member)}>Visit Profile</button>
    </div>
  );
}

export default ProfileCard;
