import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
// import Login from "./components/Login";
import NoPage from "./components/NoPage";
import LoginButton from "./components/authenticate/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isLoading, isAuthenticated } = useAuth0();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="/login" element={<LoginButton />} /> */}
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
