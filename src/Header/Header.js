import React, { useState } from 'react'
import Logo from './img/header-logo.png';
import ContentImg from './img/header.logo.png';
import {FaAngleLeft, FaAngleRight, FaBars, FaSearch, FaTimes, FaWeightHanging} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import AOS from 'aos';
const Header = () => {
    const [angle,setAngle] =useState(true)
     const OnClick = () =>{
       document.querySelector('.shadowed').classList.toggle("shadow-opened")
       document.querySelector('.header-menu').classList.toggle("menu-opened") 
     
     

    }
    const Cancel = () =>{
        document.querySelector('.shadowed').classList.toggle("shadow-opened")
        document.querySelector('.header-menu').classList.toggle("menu-opened") 
        setAngle(!angle)
        
    }
    const Searchbox = () =>{
        document.querySelector(".box").classList.toggle("box-opened")
    }
    AOS.init();

    return (
        <div>
            <div className="shadowed "  >
           
                    <div className="header-menu">
                        <ul  data-aos="zoom-in-up">
                            <li onClick={Cancel} >
                                <a  href="#">Home</a>
                            </li>
                            <li onClick={Cancel}  >
                            <a href="#">About</a>
                            </li>
                            <li onClick={Cancel} >
                            <a  href="#">Blog</a>
                           </li>
                            <li onClick={Cancel} >
                            <a  href="#">Contact</a>
                            </li>
                        </ul>
                       
                    </div>
                <button className="cancel-button" onClick={Cancel}>
                    {angle?<FaAngleLeft className="angle-right"  style={{color:"black"}} />:<FaAngleRight className="angle-right" style={{color:"black"}} />}
                 </button>
                </div>
           <div className="your-order">
                <p >
               Get 10% Off Your First Order with Code WELCOME10
               </p>
            </div> 
            <div className="header-logo-column">
                
                <div className="container-fluid">
                    <div className="Row">
              <button onClick={OnClick} style={{border:"0px",background:"transparent",color:"white",fontSize:"20px"}}><FaBars/></button>
                <div className="header-logo-img">
                    <img src={Logo} className="img-fluid" alt=""/>
                </div>
                <div className="d-flex align-items-center" >
                    <div className="d-flex" id="search">
                        <input type="text" className="first-input" />
                        <button onClick={Searchbox}><FaSearch/></button>
                        <input type="search" placeholder="Search..." className="box" />

                    </div>
                    <div className="icon-div">
                        <FaWeightHanging/>
                </div>
                </div>
                    </div>
                </div>
                
            </div>
            <div className="content-img-column">
               <button>
               Shop NEW Summer Collection!
               </button>
            </div>
        </div>
    )
}

export default Header
