import React from 'react'
import {styled} from 'styled-components'

const Home = () => {
  return (
    <LANDING>
      <center>
        <H1>Simplify your leasing experience with RentSolute.</H1>
        <Button><h2>Get Started</h2></Button>
      </center>
    </LANDING>
  )
}

const LANDING = styled.div`

`;

const H1 = styled.h1`
    width: 18rem;
    height: 32rem;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin-right: 16rem;
`;

const Button = styled.button`
    background-color: black;
    border-radius: 4px;
    color: white;
    margin-inline: 8rem;
    position: relative;
    top: 2rem;
    padding-inline: 2rem;
`;

export default Home
