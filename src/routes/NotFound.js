import React from 'react';
import { Button, Typography } from "@material-tailwind/react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



function NotFound() {
  return (
    <div>
      <Navbar />
      <div className=" justify-center center-divs p-6 md:p-0 flex-col mt-10 md:mt-20 gap-20 md:gap-40 xl:flex-row">
        <motion.div  initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }} className="flex flex-col mt-16 gap-2 max-w-xl ">
          <h1 className="text-5xl font-semibold text-gray-100">404 - Not Found</h1>
          <div className='pl-2'>
            <h2 className="text-2xl font-light text-gray-300">The page you are looking for does not exist.</h2>
            

          </div>
          <Link to="/" className='mt-10 p-2 text-white custom-bcolor  text-center  hover:text-white transition-all rounded-lg'>Go Home</Link>
        </motion.div>
      
      </div>
    </div>
  );
}

export default NotFound;
