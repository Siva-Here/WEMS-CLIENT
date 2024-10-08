import React, { useState } from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { RiBillFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { TbLogout2 } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import BillsPage from '../bills/bills-page/BillsPage';
import {NavLink} from 'react-router-dom';

import './Sidebar.css';
function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  function handleLogOut(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
  }
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`wrapper ${isExpanded ? 'expand' : ''}`}>
      <aside id="sidebar" className={isExpanded ? 'expand' : ''}>
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <BiSolidCategory className='fs-1 text-white home-icon icons'/>
            <h5 className='mt-2 text-white'>Menu</h5>
          </button>
          <div className="sidebar-logo">
            <a href="#">CodzSword</a>
          </div>
        </div>
        <ul className={`sidebar-nav ${isExpanded ? 'd-inline' : 'd-none s-sm-inline'}`}>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link">
            <GoHomeFill className='fs-4 text-white'/>
              <span className='ms-3'>Home</span>
            </a>
          </li>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link">
              <RiBillFill className='fs-4 text-white'/>
              <span className='ms-3'>Upload Bill</span>
            </a>
          </li>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
              data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
              <IoMdContact className='fs-3 text-white icons'/>
              <span className='ms-3'>Auth</span>
            </a>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item mt-3">
                <a href="#" className="sidebar-link">Add User</a>
              </li>
              <li className="sidebar-item mt-3">
                <a href="#" className="sidebar-link">Add Admin</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
              data-bs-target="#dash" aria-expanded="false" aria-controls="dash">
              <MdDashboard className='fs-3 text-white icons'/>
              <span className='ms-3'>DashBoard</span>
            </a>
            <ul id="dash" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item mt-3">
                <a href="#" className="sidebar-link">User Stats</a>
              </li>
              <li className="sidebar-item mt-3">
                <a href="#" className="sidebar-link">Category Stats</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link">
              <i className="lni lni-popup"></i>
              <span className='ms-3'>Notification</span>
            </a>
          </li>
          <li className="sidebar-item mt-3">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span className='ms-3'>Setting</span>
            </a>
          </li>
        </ul>
        <div className={`sidebar-footer mb-3 wrapper ${isExpanded ? '' : 'd-none'}`} onClick={handleLogOut}>
          <NavLink to='/login'>
              <TbLogout2 className='fs-3 text-white icons'/>
              <span className='ms-3 mb-5'>Logout</span>
          </NavLink>
        </div>
      </aside>
      {/* <div className="main p-3">
        <div className="text-center">
          <BillsPage />
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
