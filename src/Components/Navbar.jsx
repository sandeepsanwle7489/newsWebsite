import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { MdClear } from "react-icons/md";
 

const Navbar = () => {
    
    const [isMobile,setIsMobile] = useState(false);

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime, 1000);

    let greet = '';
    let currentDate = new Date();
    currentDate = currentDate.getHours();


    if (currentDate >= 12 && currentDate < 16) {
        greet = "Good Afternoon";


    } else if (currentDate >= 16 && currentDate < 24) {
        greet = "Good Evening";


    } else {
        greet = "Good Morning";

    }
     
 
    return (
        <>
            <div className="Navbar">
                
                 <Link className="logoname" to="/" > Daily-Updates </Link>
                
                 <div className={isMobile ? "linksdiv-mobile" :"linksdiv"} onClick={()=>setIsMobile(false)}>
                 <NavLink activeClassName={isMobile? "active-mobile":"active"}  className='navlinks' to="/News">News</NavLink>
                 <NavLink activeClassName={isMobile? "active-mobile":"active"}  className='navlinks'  to="/Sports">Sports News</NavLink>
                 <NavLink activeClassName={isMobile? "active-mobile":"active"}  className='navlinks'  to="/Crypto">Crypto</NavLink>
                 </div>
                <div className='timegreet'>
                    <h5 className="greet">{greet}</h5>
                    <h5 className="time">{ctime}</h5>
                </div>
                <div className='hamburger-menu' onClick={()=>setIsMobile(!isMobile)}>
                    
                 {isMobile ?  <MdClear/> : <FaBars/>}  
                
                    
                </div>
            </div>
          
        </>
    );
}
    

export default Navbar;