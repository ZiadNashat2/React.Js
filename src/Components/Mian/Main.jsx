import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.1.jpg'
import img2 from '../../Assets/img.2.jpg'
import img3 from '../../Assets/img.3.jpg'
import img4 from '../../Assets/img.4.jpg'
import img5 from '../../Assets/img.5.jpg'
import img6 from '../../Assets/img.6.jpg'
import img7 from '../../Assets/img.7.jpg'
import img8 from '../../Assets/img.8.jpg'
import img9 from '../../Assets/img.9.jpg'
import { MdLocationOn } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";


import Aos from 'aos';
import 'aos/dist/aos.css'



        const Data =  [
            {
                id:1,
                imgSrc: img ,
                destTitle:'imag one',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$700',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },

            {
                id:2,
                imgSrc: img2 ,
                destTitle:'imag two',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$600',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  

            {
                id:3,
                imgSrc: img3 ,
                destTitle:'imag there',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$6880',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  


            {
                id:4,
                imgSrc: img4 ,
                destTitle:'imag four',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$100',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  


            {
                id:5,
                imgSrc: img5 ,
                destTitle:'imag five',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$900',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  

            {
                id:1,
                imgSrc: img ,
                destTitle:'imag one',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$700',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },

  

            {
                id:7,
                imgSrc: img7 ,
                destTitle:'imag svene',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$300',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  



            {
                id:8,
                imgSrc: img8 ,
                destTitle:'imag eigth',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$250',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  


            {
                id:9,
                imgSrc: img9 ,
                destTitle:'imag nine',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$150',
                description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the BiWorld. This place ix known for its luxurious and adventurous activities. '
            },  

            
       


            
        ]

const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [] )
    
    




    return(
        <section className='main container section'>
            <div  className='secTitle'>
                <h3  data-aos="fade-right"  
                    className='title'>
                    most visited destinations
                </h3>
            </div>

                    <div className='seContent grid'>


                    {
                        Data.map(({id,imgSrc,destTitle,location,grade,fees,
                            description }) =>{
                                return(
                                    <div key={id}  
                                    data-aos="fade-up"
                                    className="singleDestination">
                                        <div className="imageDiv">
                                            <img src={imgSrc} alt={destTitle} />
                                        </div>
                                        <div className="cardInfo">
                                            <h4  className='destTitle'> {destTitle} </h4>
                                            <span className='continent flex'>
                                            <MdLocationOn className='icon' />
                                            <span className='name'>{location}</span>
                                            </span>

                                            <div className="fees flex">
                                                <div className='grade'>
                                                    <span>{grade}<small>+1</small></span>
                                                </div>
                                                <div className='price'>
                                                    <h5>{fees}</h5>
                                                </div>
                                            </div>

                                            <div className="desc">
                                                <p>{description}</p>
                                            </div>

                                            <button className='btn flex '>
                                                DETAILS  <LuClipboardCheck className="icon" />
                                            </button>
                                        </div>
                                    </div>
                                )
                        })
                    }
                    </div>
            </section>
    )
}

export default Main