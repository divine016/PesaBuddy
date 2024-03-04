import React from 'react'

import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images"
import { hamburger } from '../assets/icons'

const Header = () => {
  return (
    <header className="padding-x py-8  z-10 w-full fixed top-0 dark:bg-[#020a2c] bg-white ">
      <nav className="flex justify-between items-center max-container">
        <a href="dashboard">
          <img src={headerLogo}
            alt='this contains the logo for the nike website'
            width={130}
            height={29}
          />
        </a>
        <ul className="flex justify-center gap-16 items-center max-lg:hidden ">

          <li>
            <Link to ="dashboard" className="font-monserrat leasding-normal text-lg text-slate-gray dark:text-white">Home
            </Link>
          </li>
          <li>
            <Link to="insights" 
              href="insights" className="font-monserrat leasding-normal text-lg text-slate-gray dark:text-white">Insights
            </Link>
          </li>
        </ul>
        <div className="lg:hidden max-lg:block hidden text-white dark:bg-white">
          {/* //i need to change this */}
          <img src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />


        </div>
      </nav>
    </header>
  )
}

export default Header