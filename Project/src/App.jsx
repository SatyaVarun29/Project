import React from 'react';

import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'



const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <div className="main-layout">
        <Sidebar/>
        <MainContent />
       
      </div>
    </div>
  );
}

export default App;


// import React from 'react'
// import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
// import EmployeeDetails from './components/Employeedetails'

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route index element={<h1>Hello</h1>}/>)
// )

// const App = () => {
//   return (
//     <div>
//      {/* <EmployeeDetails/> */}
//      <RouterProvider router={router}/>
//     </div>
//   )
// }

// export default App