import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => logout()}>
            Log Out
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

export default LogoutButton
