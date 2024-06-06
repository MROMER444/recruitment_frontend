import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Preview from './Preview';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </Router>
    );
};

export default App;
