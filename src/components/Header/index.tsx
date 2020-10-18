import React from 'react';

import LogoImg from '../../assets/images/logo.svg';

import './styles.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className="page-header">
            <div className="logo-page-header">
                <img src={LogoImg} alt="Forever Beta"/>
            </div>
            
            <h1>{title}</h1>
        </header>
    );
}

export default Header;