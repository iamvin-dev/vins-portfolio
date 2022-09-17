import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactArr = [
    {
        "title": "Email",
        "description": "contact@vinlikes.tech",
        "link": "mailto:contact@vinlikes.tech",
        "image": "https://media.discordapp.net/attachments/1010317509150396581/1013454195627663441/envelope-solid.png"
    },
    {
        "title": "Github",
        "description": "iamvin-dev",
        "link": "https://github.com/iamvin-dev",
        "image": "https://media.discordapp.net/attachments/1010317509150396581/1014563771701800970/unknown.png"
    }
];




function Contact() {

    return (
        <div>
            <Navbar />
            <div className="flex ml-10 mb-10 mr-10 md:mr-40 md:ml-40 p-2 md:p-0 flex-col mt-10 md:mt-36 gap-5 md:gap-10 xl:flex-col">
                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-5">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-100">Contact</h1>
                    <p className="text-gray-100 text-xl md:text-2xl">If you want to contact me, you can do it through the following social networks.</p>
                </motion.div>


                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-5">
                    {ContactArr.map((contact, index) => (
                        <div className="flex flex-col gap-2 custom-bg p-10 w-full rounded-lg">
                            <center>
                                <img src={contact.image} className=" w-fit md:max-w-md max-h-56 mb-5 rounded-lg" />
                                <h1 className="text-lg md:text-2xl font-bold text-gray-100 mt-5">{contact.title}</h1>
                                <a href={contact.link} className="text-lg md:text-2xl font-semibold text-gray-100 pt-10">{contact.description}</a>
                            </center>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}

export default Contact;