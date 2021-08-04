import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import manuData from '../data/ManuData'
import { Button } from './Button';
import Bars from '../img/bars.png'
// import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
height:68px;
color:#fff;
display:flex;
justify-content:space-between;
align-items:center;
font-size:30px;
padding:0 10px;
width:100%;
position:fixed;
z-index:9999;
`;

const NavLink = css`
color:white;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`;

const Logo = styled(Link)`
${NavLink}
font-style:italic;
`;

const MenuBar = styled.i`
display:none;

@media screen and (max-width: 768px) {
display:block;
background-image:url(${Bars});
background-size:contain;
height:48px;
width:48px;
cursor:pointer;
position:absolute;
top:0;
right:0;
transform:translate(-30px , 10px);
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px) {
display:none;
}
`;

const NavMenuLink = styled(Link)`
${NavLink}
`;
const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width: 768px) {
display:none;
}
`;
const Navbar = (toggle) => {
    return (
        <Nav>
            <Logo>ElIXR</Logo>
            <MenuBar onClick={toggle}/>
            <NavMenu>
                {manuData.map((item, index) => (
                    <NavMenuLink to={item.link} key={index}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
};

export default Navbar
