import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/Video (2).mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {

        
useEffect(()=>{
    Aos.init({duration:2000})
}, [] )



    return(
        <section className='footer'> 
        <div className='videoDiv'>
            <video src={video2} loop autoPlay  muted  
            typeof='video/mp4'></video>
        </div>

        <div className="secContent container">
            <div className='contactDiv  flex'>
            <div data-aos="fade-up"
            className='text'>
            <small>KKep in tounh</small>
            <h2>travel with us  </h2>
            </div>

            <div className="inputDiv flex">
                <input  data-aos="fade-up"
                type="text" placeholder='Enter email Address' />
                <button data-aos="fade-up"
                className='btn flex'  type='submit'>
                SEND
                <FiSend  className="icon"/>

                </button>
            </div>


            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className='logoDiv'>
            <a href="#" className='logo flex'>
            <MdTravelExplore className="icon" />   Teavel.
            </a>
                    </div>

                    <div data-aos="fade-up"
                            className="footerParagraph">
                    The epitome of romance, Bora Bora is one of 
                    the best travel destinations in the BiWorld. This place ix
                    the best travel destinations in the BiWorld. This place ix
                    known for its luxurious and adventurous activities
                    the best travel destinations in the BiWorld. This place ix
                    known for its luxurious and adventurous activities
                    The epitome of romance, Bora Bora is one of 
                    </div>

                    <div  data-aos="fade-up"
                    className="footerSocials flex">
                    <AiOutlineTwitter  className="icon"/>
                    <AiFillYoutube   className="icon"/>
                    <AiFillInstagram   className="icon"/>
                    <FaTripadvisor    className="icon"/>

                    </div>

                </div>
                
            <div className='footerLinks grid'>

        <div data-aos="fade-up"
        data-aos-duration="3000"
        className="linkGroup">
            <span className='groupTitle'>
                our agenmcy
            </span>
            <li className="footerList flex">
            <FiChevronRight  className="icon" />
            services
            </li>

            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            insurance
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            agenct
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            home
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            paymernt
            </li>

        </div>


        <div  data-aos="fade-up" 
        data-aos-duration="4000"
        className="linkGroup">
            <span className='groupTitle'>
                our agenmcy
            </span>
            <li className="footerList flex">
            <FiChevronRight  className="icon" />
            services
            </li>

            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            insurance
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            agenct
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            home
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            paymernt
            </li>

        </div>


        <div  data-aos="fade-up" 
        data-aos-duration="5000"
        className="linkGroup">
            <span className='groupTitle'>
                our agenmcy
            </span>
            <li className="footerList flex">
            <FiChevronRight  className="icon" />
            services
            </li>

            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            insurance
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            agenct
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            home
            </li>


            <li className="footerList flex">
            <FiChevronRight  className="icon"/>
            paymernt
            </li>

        </div>

            </div>  

                    <div     
                    className="footerDiv flex">
                    <small>BOST TRAVER WECSYTSE THIR</small>
                    <small>BOST TRAVER WECSYTSE THIRIVFI  IFJ IEIR 2024</small>
                    </div>
            </div>


            </div>
        </div>
        </section>
    )
}

export default Footer