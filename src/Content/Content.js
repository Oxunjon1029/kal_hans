import React from 'react'
import './content.css';
import SoldOut from './img/sold-out.png';
import SoldOut1 from './img/sold-out-1.png';
import SoldOut2 from './img/sold-out-2.png';
import SoldOut3 from './img/sold-out-3.png';
import SoldOut4 from './img/sold-out-4.png';
import SoldOut5 from './img/sold-out-5.png';
import ContentSecondImg from './img/content-second-img.png';
import CardImg1 from './img/content-firstcard-img.png';
import CardImg2 from './img/content-secondcard-img.png';
import CardImg3 from './img/content-thirdcard-img.png';
import FifthImg from './img/content-fifth-img.png';
import ThirdImg from './img/content-third-img.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
const Content = () => {
    
  

    const SoldObject = [
        {
         
            image:SoldOut,
            h6:"Hydrating Rose Petal Face Mist",
            p1:"$7.94",
            p2:" 14 reviews"
        },
        {
            image:SoldOut1,
            h6:"Rejuvenation & Repair Night Serum",
            p1:"$47.99",
            p2:" 15 reviews"
        },
        {
            image:SoldOut2,
            h6:"Kansa Wand",
            p1:"$32.45",
            p2:" 11 reviews"
        }
    ]
    const SoldObjectSecond = [
        {
         
            image:SoldOut3,
            h6:"Aloe Cucumber Mist",
            p1:"$5.52",
            p2:" 1 review"
        },
        {
            image:SoldOut4,
            h6:"Skin Brightening Under Eye Cream",
            p1:"$32.80",
            p2:" 1 review"
        },
        {
            image:SoldOut5,
            h6:"Daily Moisture Sun Protection Lotion",
            p1:"$13.46",
           
        }
    ]
    const settings={
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        
      ]
    }
    return (
        <div>
            <div className="first-content-column">
                <div className="skin-natural">
                    <h1 className="text-center mb-5 ">
                    We Make Feeling Comfortable in Your Own Skin Natural
                    </h1>
                    <p className="text-center ">
                    Kal Hans symbolizes transformation. Let's celebrate what makes you unique with our 100% all Natural, Vegan, Luxury skincare line, <br/> getting you one step closer to being your best self.
                    </p>
                </div>
            </div>
            <div className="second-content-column">
                <p className="text-center p1" >
                The Skincare Essentials
                </p>
                <div className="container">
                <div className="grid">
                   {SoldObject.map(item=>(
                        <div>
                        <img src={item.image} className="img-fluid " alt=""/>
                     <h6 className="text-center">
                     {item.h6}
                    </h6>
                    <p className="text-center">
                    {item.p1}
                    </p>
                    <p className="text-center p3">
                   {item.p2}
                    </p>
                    </div>
                   ))}
                    
                </div>
                <div className="grid">
                   {SoldObjectSecond.map(item=>(
                        <div>
                            <div className="img-div4">
                               <img src={item.image} className="img-fluid " alt=""/>
                            </div>
                     <h6 className="text-center">
                     {item.h6}
                    </h6>
                    <p className="text-center">
                    {item.p1}
                    </p>
                    </div>
                   ))}
                    
                </div>
                </div>
                
            </div>
            <div className="content-third-column">
                <div className="grid-second">
                    <div className="backgroun-img">
                  
                    </div>
                    <div className="free-from">
                        <div className="center-column">
                            <h5 className="text-white text-center">
                            Free From
                            </h5>
                            <ul className="free-from-ul">
                                <li>
                                    <a  href="#">GMO's</a>
                                </li>
                                <li>
                                    <a href="#">Toxins</a>
                                </li>
                                <li>
                                    <a href="#">Fillers</a>
                                </li>
                                <li>
                                    <a href="#">Artificial Colours</a>
                                </li>
                                <li>
                                    <a href="#">Synthetic Chemicals</a>
                                </li>
                                <li>
                                    <a href="#">Artificial Fragrances</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                            <button>
                            Shop Green Beauty
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="content-fifth-column">
                  <img src={ThirdImg} className="img-fluid" alt=""/>
            </div>
            <div className="content-sixth-column">
                <div className="grid-second">
                        <div className="your-skin">
                            <div className="skin-deserves">
                                <h3 className="text-center">
                                Your Skin Deserves The Best!
                                </h3>
                                <p className="text-center">
                                You have only one body and it deserves the best! Kal Hans brings you the highest quality, nutrient rich natural ingredients to elevate your skincare routine and give you glowing skin. Because the best makeup is NO makeup.
                                </p>
                                <div className="button-center">
                                <button>
                                Get Glowing
                                </button>
                                </div>
                               
                            </div>
                        </div>
                        <div className="trio">

                        </div>

                </div>
            </div>
            <div className="content-seventh-column">
                <div className="newsletter-center">
                    <div className="KH">
                        <p className="kh-p1">
                        KH Newsletter
                        </p>
                        <p className="kh-p2">
                        Sign up to our newsletter and we’ll keep you up to date with the latest products, skincare news and exclusive discounts!
                        </p>
                        <div className="d-flex subscribe">
                            <input type="text"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-eigth-column">
                <div className="grid-second">
                    <div className="kal-han_girl">

                    </div>
                    <div className="our-story p-5">
                        <div className="our-story-kal-han">
                            <div className="our-story-center">
                                <p className="our-story-p1">
                                Our Story
                                </p>
                                <p className="perfection text-center">
                                Kal Hans is not a brand that strives for perfection but one that strives for the continual betterment, growth and confidence in one’s own skin. After meeting with a severe accident in New York founder Lisa D'Mello created Kal Hans
                                </p>
                                <button>
                                Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-last-column ">
                <div className="d-flex justify-content-center naturalist-blog">
                <p >
                The Naturalist Blog
                </p>
                </div>
                <div className="container">
                <div className="dispay-grid-cards">
                    <div>
                        <img src={CardImg1} className="img-fluid" alt=""/>
                        <p className="food">
                        Food For Your Skin: A Diet To Achieve <br/> Glowing Skin For Your Skin Type
                        </p>
                        <h6>
                        Jan 08, 2021
                        </h6>
                        <p className="reflection">
                        Your skin is a reflection of your body’s overall health. When your skin looks dull and unkept it could be caused as a result of a poor diet, no exercise or bad skincare habits. Today we are going to tackle a healthy diet for natural glowing skin.All skin is different and it should be treated as such. A balanced diet is necessary for all skin types but certain foods can cause breakouts for already oily skin and certain foods can cause dehydration for already dry skin. So what should we include in our diet and what should we avoid?
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
                    <div>
                        <img src={CardImg2}  className="img-fluid" alt=""/>
                        <p className="food">
                        Hydrate Skin With These Hyaluronic Acid <br/> Rich Foods
                        </p>
                        <h6>
                        Sep 07, 2020
                        </h6>
                        <p className="reflection">
                        In the last few years, there have been a lot of fast growing skincare ingredients but the one that has been the most popular so far is Hyaluronic acid. HA helps hydrate your skin by holding in over 1000x its weight in water.
                        </p>
                        <p className="reflection">
                        But, applying Hyaluronic acid directly to your face is not the only way! Hyaluronic acid foods and supplements can provide you with the Hyaluronic acid your skin needs.
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
                    <div>
                        <img src={CardImg3}  className="img-fluid" alt=""/>
                        <p className="food">
                        The Ultimate Skincare Acid Cheat Sheet
                        </p>
                        <h6>
                        Aug 28, 2020
                        </h6>
                        <p className="reflection">
                        Skincare acids can often get confusing, but this cheat sheet will help show the differences between them. Skincare acids help encourage cell turnover (which is the process of old cells shedding and new cells coming through) which then helps improve skin texture and even out skin tone. Between the two main skincare acids, there are other uses that can help target additional skincare concerns.
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
               </div>
                </div>
               
            </div>
        </div>
    )
}

export default Content
