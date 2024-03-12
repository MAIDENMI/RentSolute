import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from './authenticate/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './authenticate/LogoutButton';

const Layout = () => {
    
    const { isLoading, isAuthenticated, error } = useAuth0();

    return (
        <div>
            <NAV>
                <HOMELINK to='/'>RentSolute</HOMELINK>
                <UL>
                    {/* <li><Link>Docs</Link></li> */}
                    {/* <li><Link>Payment</Link></li> */}
                    {/* <li><Link>Roommate</Link></li> */}
                    {/* <li><Link to='/notices'>Notices</Link></li> */}
                    <LI>
                        {/* <Link className='linkAuth' to='/login'>Login</Link> */}
                        {!isAuthenticated && (<LoginButton />)}
                        {isAuthenticated && (<LogoutButton />)}
                    </LI>
                    {/* <LI><Link className='linkAuth' to='/register'>Register</Link></LI> */}
                </UL>
            </NAV>
            <Outlet/>
        </div>
    )
}
const NAV = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    // margin-top: 1rem;
    position: relative;
    top: 1rem;
    border-top: 1px solid;
    margin-inline: 8rem;
    border-color: black;
`;
const HOMELINK = styled(Link)`
    color: black;
    font-weight: 500;
    font-size: xx-large;
    display: inline;
    text-decoration: none;
    position: relative;
    right: 14rem;
`;
const UL = styled.ul`
    display: inline;
    justify-content: flex-end;
    color: white;
    position: relative;
    left: 18rem;
    font-weight: 500;
    font-size: x-large;
`;
const LI = styled.li`
    display: inline;
    margin-inline: 2rem;
    color: white;
`;

export default Layout
