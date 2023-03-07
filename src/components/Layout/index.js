import { Outlet } from 'react-router-dom';
import React, { lazy, useState, useEffect } from 'react';
import './index.scss';

//Dynamic import
const Hamburger = lazy(() => import('../Hamburger'))
const Sidebar = lazy(() => import('../Sidebar'))

const Layout = () => {

    // This state keeps track of whether the menu is open or closed
    const [menuIsOpen, setMenuIsOpen] = useState(false); 

    // Use useState and useEffect hooks 
    // to set the page title whenever it changes 
    const [pageTitle, setPageTitle] = useState('Uncle Sam | Front-end web developer');
    
    useEffect(() => {
        // Set the actual page title on the browser window 
        document.title = pageTitle;
    }, [pageTitle])
    

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
                <Outlet context={[setPageTitle]}></Outlet>
    
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

