import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Hamburger from '../Hamburger';
import Sidebar from '../Sidebar';
import './index.scss';


const Layout = () => {

    // This state keeps track of whether the menu is open or closed
    const [menuIsOpen, setMenuIsOpen] = useState(false); 

    return (
        <div className="app">
            {/* Hamburger component for toggling Menu */}
            <Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}></Hamburger>

            {/* Sidebar component for showing Menu */}
            <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}></Sidebar>
            <div className="page">
                {/* Decorative Opening HTML Tags */}
                <span className="tags top-tags">&lt;body&gt;</span>
    
                {/* Outlet component for dynamic routing */}
                <Outlet></Outlet>
    
                {/* Decorative Closing HTML Tags */}
                <span className="tags bottom-tags">&lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
                
            </div>
        </div>
    )
}    

export default Layout;

