import React,{useEffect} from 'react'
import './home.css'
import video from '../../Assets/Video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";


import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

    
useEffect(()=>{
    Aos.init({duration:2000})
}, [] )





    return(
        <section className='home'>
            <div className='overlay'> </div>
        <video src={video} muted autoPlay loop  type='Video/mp4'></video>

            <div className="homeContent  container">
                <div className="texrDiv">
                    <span data-aos="fade-up" className='smallText'>
                    A Company
                    </span>

                    <h1 data-aos="fade-up"
                        className='homeTitle'>
                        El-Moparmgin
                    </h1>

                </div>

                <div  data-aos="fade-up"
                className="cardDiv grid">
                <div className='destinationInput'>
                <label htmlFor="city">
                    search your destination
                </label>
                <div className='input flex'>
                    <input type="text" placeholder='Enter name here....' />
                    <GrLocation className="icon" />

                </div>
            </div>

            <div className='dateInput'>
                <label htmlFor="date">
                    select your date
                </label>
                <div className='input flex'>
                    <input type="date" />
                    

                </div>
            </div>


            <div className='priceInput'>
                <div className='label_total  flex'>
                    <label htmlFor="price">max price</label>
                    <h3 className='total'>$5000</h3>
                </div>

                <div className='input flex'>
                <input type="range" max="5000" min="1000" />
                </div>
            </div>

                        <div className="searchOptions flex">
                        <HiFilter  className='icon'/>
                    <span>more filters</span>
                        </div>

                </div>

                <div data-aos="fade-up"
                    className="homeFooterIcons flex">
                    <div className='rigthIcons'>
                    <FiFacebook  className='icon'/>
                    <FaInstagram   className='icon'/>
                    <FaTripadvisor   className='icon'/>
                    </div>

                    <div className='leftIcons'>
                    <IoIosList    className='icon'/>
                    <TbApps     className='icon'/>
                    
                    </div>  
                </div>
            </div>
        </section>

    )
}

export default Home