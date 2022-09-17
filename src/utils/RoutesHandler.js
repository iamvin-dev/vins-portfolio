import React from 'react';
import { Routes, Route } from 'react-router-dom';

// routes
import MainRoute from '../routes/MainRoute';
import Projects from '../routes/Projects';
import Skills from '../routes/Skills';
import Contact from '../routes/Contact';
import NotFound from '../routes/NotFound';

const RoutesHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesHandler;
