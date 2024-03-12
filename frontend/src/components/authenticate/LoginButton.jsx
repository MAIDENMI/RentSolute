import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect()}>
            Log In / Register
        </Button>
    )
}

const Button = styled.button`
    color: black;
    font-weight: 500;
    font-size: x-large;
    display: inline;
    text-decoration: none;
    position: relative;
    bottom: 8px;
    border: none;
    background: none;
`;

export default LoginButton
