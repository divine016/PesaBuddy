import { Link } from "react-router-dom";

import { headerLogo } from "../assets/images"
import { hamburger } from '../assets/icons'
import { navLinks } from "../constants"
//import Button from "./Button"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src = {headerLogo} 
                alt='this contains the logo for the nike website'
                width={130}
                height={29}
                /> 
            </a>
            <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden ">
                {navLinks.map((item) => ( 
                    <li key={item.label}>
                        {/* <a 
                            href = {item.href} 
                            className="font-monserrat leasding-normal text-lg text-slate-gray">
                            {item.label}
                        </a> */}
                        <Link
                            to = {item.href} 
                            className="font-monserrat leasding-normal text-lg text-blue-950 dark:text-slate-gray">
                            {item.label}
                        </Link>
                    </li>
                 ))}
                 {/* <Button label='Get Started' iconURL = {arrowRight} /> */}
            </ul>
            <div className="lg:hidden max-lg:block hidden">
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