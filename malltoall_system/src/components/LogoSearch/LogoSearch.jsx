import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import {FaSearch} from 'react-icons/fa'
// import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <FaSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
