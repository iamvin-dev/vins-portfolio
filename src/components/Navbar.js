import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const items = [
        {
            name: 'Projects',
            link: '/projects',
        },
        {
            name: 'Skills',
            link: '/skills',
        },
        {
            name: 'Contact',
            link: '/contact',
        },
    ]

  return (
    <div className='p-5'>
        <nav className="flex rounded-xl items-center justify-between flex-wrap custom-bg p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/" className="font-semibold text-xl tracking-tight">Vin's Portfolio</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggle} className="flex items-center px-3 py-2 rounded text-gray-200  hover:text-white ">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    {items.map((item, index) => (
                        <Link to={item.link} key={index} className="transition-all rounded-lg block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            
            
            
        </nav>
    </div>
  )
}

export default Navbar