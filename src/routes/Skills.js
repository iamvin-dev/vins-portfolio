import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SkillsArr = [

    {
        "title": "Architecture",
        "entries": [
            {
                "title": "REST APIs",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013110993414520953/1s3bedypkt7zm8maikzg.png"
            },
        ],
    },
    {
        "title": "Containerization",
        "entries": [
            {
                "title": "Docker",
                "image": "https://media.discordapp.net/attachments/933440871850979348/1015619437652615268/vertical-logo-monochromatic.webp"
            },
        ],
    },
    {
        "title": "Backend Framework",
        "entries": [
            {
                "title": "ExpressJS",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014561387906875453/unknown.png"
            },
        ],
    },
    {
        "title": "Hosting Provider",
        "entries": [
            {
                "title": "Azure",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014561715989520495/unknown.png"
            },
            {
                "title": "DigitalOcean",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014561890363527280/unknown.png"
            },
            {
                "title": "Noez",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014562592561319966/unknown.png"
            },
            {
                "title": "Vercel",
                "image": "https://media.discordapp.net/attachments/1018556355197550635/1020746539850809364/unknown.png"
            },
        ],
    },
    {
        "title": "Cloud",
        "entries": [
            {
                "title": "Cloudflare",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014562292442079252/unknown.png"
            },
        ],
    },
    {
        "title": "Database",
        "entries": [
            {
                "title": "MongoDB",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014563027032485988/unknown.png"
            }
        ],
    },
    {
        "title": "Languages",
        "entries": [
            {
                "title": "JavaScript",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013112661250150480/JavaScript-logo.png?width=606&height=606"
            },
            {
                "title": "NodeJs",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013112783820312758/1280px-Node.js_logo.svg.png?width=991&height=606"
            },
            {
                "title": "Python",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013116075078074398/Python_logo_01.svg.png?width=606&height=606"
            },
            {
                "title": "C#",
                "image": "https://media.discordapp.net/attachments/1026285749173223478/1027713193344241664/unknown.png?width=1151&height=648"
            },
        ],
    },
    {
        "title": "Frontend",
        "entries": [
            {
                "title": "HTML",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013115072660394075/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
            },
            {
                "title": "CSS",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013115682822553630/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667.png?width=529&height=606"
            }
        ],
    },
    {
        "title": "Web Server",
        "entries": [
            {
                "title": "Nginx",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014563430553899008/unknown.png"
            },
        ],
    },
    {
        "title": "Proxy Management",
        "entries": [
            {
                "title": "Nginx Proxy Manager",
                "image": "https://media.discordapp.net/attachments/1026285749173223478/1033019537454542910/unknown.png"
            },
        ],
    },
    {
        "title": "Project Control",
        "entries": [
            {
                "title": "Github",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014563771701800970/unknown.png"
            },
            {
                "title": "Git",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1014564056658628679/unknown.png"
            },
            {
                "title": "Git Kraken",
                "image": "https://media.discordapp.net/attachments/1018556355197550635/1020746226808926338/unknown.png?width=648&height=648"
            }
        ],
    },
    {
        "title": "Frontend Framework",
        "entries": [
            {
                "title": "ReactJS",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013116503593324604/React-icon.svg.png?width=697&height=607"
            },
            {
                "title": "NextJS",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013116706199191552/nextjs-boilerplate-logo.png?width=606&height=606"
            },

        ],
    },
    {
        "title": "CSS Framework",
        "entries": [
            {
                "title": "Chakra-UI",
                "image": "https://media.discordapp.net/attachments/1010317509150396581/1013117399471493233/chakra-ui.dark.png",
            },
            {
                "title": "TailwindCSS",
                "image": "https://media.discordapp.net/attachments/1026285749173223478/1033018543308034118/unknown.png?width=671&height=671",
            }
        ]
    }

]





function Skills() {

    return (
        <div>
            <Navbar />
            <div className="flex ml-10 mb-10 mr-10 md:mr-40 md:ml-40 p-2 md:p-0 flex-col mt-10 md:mt-36 gap-5 md:gap-10 xl:flex-col">
                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-5">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-100">Skills</h1>
                    <p className="text-gray-400 pl-2 text-lg">I have worked with a range of technologies in the web development world. From back-end to front-end.</p>
                </motion.div>

                {SkillsArr.map((skill, index) => (
                    <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-5">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-100">{skill.title}</h1>
                        <center>
                            <div className="flex flex-wrap pl-2 gap-5">
                                {skill.entries.map((entry, index) => (
                                    <div className="flex white-shadow flex-col gap-2 custom-bg p-10 w-full rounded-lg">
                                        <center>
                                        <img src={entry.image} className=" w-fit md:max-w-md max-h-56 rounded-lg" />
                                        <h1 className="text-lg md:text-2xl font-bold text-gray-100 mt-10">{entry.title}</h1>

                                        </center>
                                    </div>
                                ))}
                            </div>
                        </center>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}

export default Skills;
