import React from "react";

import { Routes, Route } from "react-router-dom";

//FILE-PAGES
import Home from "./pages/RegisterTeacher";
//

import NotFound from "./pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
