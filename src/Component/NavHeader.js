import React from 'react';
import { Link } from 'react-router-dom';
import ClapingoLogo from "../Assets/ClapingoLogo.png"

const NavHeader = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
             
             <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Plans & Pricing</a></li>
                            <li><a>Teach with us</a></li>
                            <li><a>Affiliate Programe</a></li>
                            <li><a>Kids</a></li>
                        </ul>
                    </div>
                    <Link to={"/"}>
                   <img src={ClapingoLogo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Plans & Pricing</a></li>
                        <li><a>Teach with us</a></li>
                        <li><a>Affiliate Programe</a></li>
                        <li><a>Kids</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"}>
                    <button className="btn btn-sm bg-gradient-to-r from-teal-700 to-teal-400 border-none rounded-3xl ">Login</button>
                    </Link>
                </div>
        
            </div>
        </div>
    );
};

export default NavHeader;