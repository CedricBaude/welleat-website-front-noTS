import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Error from '../../_utils/Error';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="dromadaire" element={<Login />} />
            <Route path="dashboard" element={<Login />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AuthRouter;