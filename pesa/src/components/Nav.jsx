import { Link } from "react-router-dom";

import { headerLogo } from "../assets/images"
import { hamburger, lightDark } from '../assets/icons'
import { navLinks } from "../constants"
import { useEffect, useState } from "react";
//import Button from "./Button"

const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        // let mode= darkMode?'Dark':'light'
        document.documentElement.classList.toggle("dark")
    }, [!darkMode]);
    // function toggleTheme () {
    //     return document.documentElement.classList.toggle("dark")
    // }

    //     function isDarkMode ()
    //  {
    //     document.documentElement.classList.contains('dark')
    //  }
    return (
        <header className="z-10 w-full fixed shadow-md top-0 left-0 ">
            <nav className="flex justify-between dark:bg-[rgb(23,27,63)] bg-pale-blue items-center max-container padding-x">
            {/* <nav className="md:flex flex justify-between dark:bg-[rgb(23,27,63)] bg-pale-blue items-center max-container padding-x"> */}
                <a href="/">
                    <img src={headerLogo}
                        alt='this contains the logo for the nike website'
                        width={130}
                        height={29}

                    />
                </a>
                <ul className="flex-1 py-10 px-4 flex justify-center gap-16 items-center max-lg:hidden 
           
            ">
                {/* <ul className="md:items-center  absolute md:static dark:bg-[rgb(23,27,63)] bg-pale-blue md:z-auto left-0 w-full md:w-auto py-10 px-4 md:flex md:justify-center gap-16 
           
            "> */}
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-monserrat leasding-normal text-lg hover:text-slate-500 text-slate-gray">
                                {item.label}
                            </a>
                            {/* <Link
                            to = {item.href} 
                            className="font-monserrat leasding-normal text-lg text-blue-950 dark:text-slate-gray dark:text-white ">
                            {item.label}
                        </Link> */}
                        </li>
                    ))}
                    {/* <Button label='Get Started' iconURL = {arrowRight} /> */}
                   
                </ul>
                <button className="bg-black text-white font-palanquin flex items-center gap-2 rounded-full p-3" onClick={() => { setDarkMode(!darkMode) }} > {darkMode ? 'Dark' : 'Light'} Mode
                        <img src={lightDark}
                            width={16}
                            height={16} alt="darkmode" />
                    </button>

                <div className="lg:hidden max-lg:block hidden py-6">
                <img src={hamburger} 
                alt="hanburger"
                width={25}
                height={25} />
            </div>
            </nav>
        </header>
    )
}

export default Nav