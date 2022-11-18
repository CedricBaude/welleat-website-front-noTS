import React from 'react';
import Error from '../../_utils/Error';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home } from "../../pages/Public"

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PublicRouter;