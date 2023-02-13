import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Hamburger from '../Hamburger';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false); 

    return (
        <div className="app">
            <Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}></Hamburger>
            <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}></Sidebar>
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet></Outlet>

                <span className="tags bottom-tags">&lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
                
            </div>
        </div>
    )
}

export default Layout;

