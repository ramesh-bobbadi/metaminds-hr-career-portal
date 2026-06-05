import React from 'react'
import './styles/dashboard.css'

function ManagerDashboard() {
  return (
    <div>
       <header className='dash_header'>
         <div>logo</div>
         <div>
            <input type='search' placeholder='search what you want'/>
         </div>
         <div>
            <button>message</button>
            <button>profile</button>
        </div>
       </header>
       <div className='asidebar'>
       <aside>
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>Employees</a></li>
            <li><a>Departments</a></li>
            <li><a>Attendance</a></li>
            <li><a>Leaves</a></li>
            <li><a>Recruitment</a></li>
            <li><a>Payroll</a></li>
            <li><a>Reports</a></li>
            <li><a>Settings</a></li>
          </ul>
       </aside>
       </div>
       <main>

       </main>
    </div>
  )
}

export default ManagerDashboard