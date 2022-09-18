import React from 'react';
import { Button, Typography } from "@material-tailwind/react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const greetings = [
  "Hello",
  "Hi",
  "Hey",
]

function getRandomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}


function MainRoute() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center center-divs p-6 md:p-0 flex-col mt-10 md:mt-20 gap-20 md:gap-40 xl:flex-row">
        <motion.div  initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }} className="flex flex-col mt-16 gap-2 max-w-xl ">
          <h1 className="text-5xl font-semibold text-gray-100">{getRandomGreeting()}, I'm Vin</h1>
          <div className='pl-2'>
          <h2 className="text-2xl font-light text-gray-300">I'm a 15 year old fullstack developer from Germany.</h2>
          <h2 className="text-2xl font-light text-gray-300">I love to code and create new things.</h2>
          <h2 className="text-2xl font-light text-gray-300">I'm currently learning the backend programming Go.</h2>

          </div>
          <Link to="/projects" className='mt-10 p-2 white-shadow text-white custom-bcolor  text-center  hover:text-white transition-all rounded-lg'>View all my projects</Link>
        </motion.div>
        <motion.div  initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.9 }} className=" flex-col ml-0 md:ml-10 flex">
          <img src="https://media.discordapp.net/attachments/1018224134804746332/1019682148942356500/unknown.png?width=609&height=647" alt="langs"  className=' w-80 md:w-96'/>
        </motion.div>
      </div>
    </div>
  );
}

export default MainRoute;
