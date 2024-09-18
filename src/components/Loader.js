import React from 'react';
import './Loader.css';
import { SiCodechef } from "react-icons/si";

const Loader = () => {
    return (
        <div className='box' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', flexDirection: 'column', gap: '.6em', background: 'rgba(0, 0, 0, .1)'}}>
            <div className="loader"></div>
            <div className="logo">Nkombiso <SiCodechef className="logo-icon" /></div>
        </div>
    );
};

export default Loader;
