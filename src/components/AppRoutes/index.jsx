import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from "../../layouts/DefaultLayout";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;