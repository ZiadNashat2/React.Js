import React, {useState} from 'react'
import './navbar.css'

import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";




const Navbar = () => {
    const [active, setActive]  = useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }


    const removeNavbar = ()=>{
        setActive('navBar')
    }

    return(
        <section className='navBarSection' >
            <header className='header flex' >
            <div className='logoDiv'>
            <a href="#" className='logo flex'>
                <h1> <MdOutlineTravelExplore className= "icon" />El-Moparmgin</h1>
            </a>
            </div>

            <div className={active}>
        <ul className='navLists flex '>
        <li className='navItem'> 
        <a href="#" className='navLink'>Home</a>
        </li>

        <li className='navItem'>
        <a href="#" className='navLink'>packages</a>
        </li>


        <li className='navItem'>
        <a href="#" className='navLink'>shop</a>
        </li>

        <li className='navItem'>
        <a href="#" className='navLink'>About</a>
        </li>

        <li className='navItem'>
        <a href="#" className='navLink'>pages</a>
        </li>

        <li className='navItem'>
        <a href="#" className='navLink'>HOKL</a>
        </li>

        <li className='navItem'>
        <a href="#" className='navLink'>news</a>
        </li>


        <button className='btn'>
            <a href="#">Book now</a>
        </button>
        </ul>

            <div onClick={removeNavbar}
                className='closeNavbar'>
            <IoCloseCircleOutline className='icon' />


            </div>
            </div>

                <div onClick={showNav}
                    className='toggleNabar '>
                <PiDotsNineBold  className='icon'/>
                </div>

            </header>
        </section>
    )
}

export default Navbar