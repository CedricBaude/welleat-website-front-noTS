import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ALayout, Dashboard } from "../../pages/Admin";
import Error from '../../_utils/Error';
import Contact from './Contact';
import Newsletter from './Newsletter';
import Review from './Review';
import Simulation from './Simulation';
import Story from './Story';

const AdminRouter = () => {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="review" element={<Review />} />
            <Route path="contact" element={<Contact />} />
            <Route path="simulation" element={<Simulation />} />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path='story' element={<Story />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AdminRouter;