import React from 'react'
import styled from 'styled-components'
import menuData from '../data/ManuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

const DropdownContainer = styled.div`
display: flex;
z-index: 999999;
width: 100%;
height: 100%;
background-color:#20252b;
position: fixed;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-out;
opacity: ${({isOpen})=> (isOpen? '1' : '0')};
top:${({isOpen})=> (isOpen? '0' : '-100%')};
`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline: none;

`;
const CloseIcon = styled(FaTimes)`
color:#fff;
`;
const DropdownWrapper = styled.div`
margin:0 auto;
`;

const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1rm;
grid-template-rows:repeat(4,80px);
text-align:center;
margin-bottom:4rem;


@media screen and (max-width:768px){
    grid-template-rows:repeat(4,60px);
}


`;
const DropdownLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color:#fff;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition: 0.3s ease-in-out;

&:hover{
    color:#313842;
}
`;
const BtnWrap = styled.div`
display:flex;
justify-content:center;
`;

const Dropdawn = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index)=>(
                        <DropdownLink>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>
                     Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdawn
