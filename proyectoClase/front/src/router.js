import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/RegisterTeacher";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<Login/>} />
        </Routes>
    );
};

export default AppRouter;
