import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import Helmet from "../component/Helmet";
import TextLoop from "react-text-loop";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Tab from "../elements/Tab";
import Skills from "../elements/Skills";
import Counter from "../elements/Counter";
import Slider from "react-slick";


const slickDot = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
]
};

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        buttonText: 'Resume',
        buttonLink: 'https://docs.google.com/document/d/1EU6aj2BCnC1_hxgti9G5TLGUF4DejSc19F4smp8kIBw/edit?usp=sharing'
    }
]
  
const list = [

    {
        image: 'image-3',
        title: 'NPM Resume Library',
        description: 'Personal resume package. JavaScript + Chalk + Inquirer',
        link: 'https://github.com/Yomudogly/roman-s-resume'
    },
    {
        image: 'image-4',
        title: 'Load Tracker API',
        description: 'Time tracking API for warehouse. Python + Flask + MongoDB',
        link: 'https://loadtrackerapi.herokuapp.com/api/'
    },
    {
        image: 'image-1',
        title: 'VIP Car Rental',
        description: 'Car rental company. WordPress pagebuilder + Googel Calendar',
        link: 'http://govipcars.com/'
    },
    {
        image: 'image-2',
        title: 'Innova Market',
        description: 'Single product ecommerce. WordPress + Woocommerce',
        link: 'https://www.innova-market.com/'
    },
    {
        image: 'image-5',
        title: 'Critical Supply Solutions',
        description: 'Transportation company HR. WordPress + GoogleForms',
        link: 'https://www.driveforcss.com/'
    },
    {
        image: 'image-6',
        title: 'React ToDo App',
        description: 'SPA launched on GitHub Pages. ReactJS + API',
        link: 'https://yomudogly.github.io/ToDoApp/'
    }
 ]

const App = () => {
    let title = 'About me',
        description = 'I help to solve user needs and business goals by creating innovative experiences and crafting visual solutions. Through continuous learning, I am also up-to-date on industry technologies as I hold current certifications as well as remain one step ahead by progressing towards future certifications.';
    
    return (
        <div className="active-dark">
            <Helmet />

            <Header homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Roman<br/>
                                            <TextLoop>
                                                <span> Web Developer</span>
                                                <span> SPA Developer</span>
                                                <span> Software Developer</span>
                                                <span> Awesome Person</span>
                                            </TextLoop>{""}
                                            </h1>
                                            <h2>based in Miami</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" target="_blank" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <Tab tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Skills Area  */}
            <div id="skills" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">I build projects with</h2>
                                    <p>However, main skill relies on continuous learning, exploring technologies and combining new knowledge and practice</p>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="row">
                            <div className="col-lg-12">
                                <Skills />
                            </div>
                        </div>
            

                    </div>
                </div>  
            </div>
            {/* End Skills Area  */} 
            
            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix portfolio-area pt--120 pb--140 bg_color--1">
            <div className="rn-slick-dot">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                <h2 className="title">My portfolio</h2>
                                <p>I value minimalism and aesthetics as well as clean, maintainable code and I’m a big fan of agile methodologies. Checkout my recent projects </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slick-space-gutter--15 slickdot--20">
                                <Slider {...slickDot}>
                                    {list.map((value , index) => (
                                        <div className="portfolio" key={index}>
                                            <div className="thumbnail-inner">
                                                <div className={`thumbnail ${value.image}`}></div>
                                                <div className={`bg-blr-image ${value.image}`}></div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <h3>{value.title}</h3>
                                                    <h5>{value.description}</h5>
                                                    <div className="portfolio-button">
                                                        <a className="rn-btn" target="_blank" href={value.link}>Check it out</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* End Portfolio Area */}



            {/* Start CounterUp Area */}
            <div id="numbers" className="fix pt--140 p pb--110 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                            <h2 className="title">Some numbers</h2>
                            <p>Usually people add this section to show some cool numbers that represent their coolnest, so I decided to add it too : ) </p>
                            </div>
                        </div>
                    </div>
                    <Counter />
                </div>
            </div>
            {/* End CounterUp Area */}


            {/* Start Contact Top Area  */}
            <div id="contact" className="fix ptb--120 bg_color--1">
            <div className="container">

                <div className="section-title text-center mb--50">
                    <h2 className="title">Hire me</h2>
                    <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+19549974470">954 997 4470</a> or email:
                        <a href="mailto:khalnepesov@gmail.com"> khalnepesov@gmail.com</a>
                    </p>
                </div>

                <div className="row">
                    {/* Start Single Address  */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service service__style--2">
                            <div className="icon">
                                <FiHeadphones />
                            </div>
                            <div className="inner">
                                <h3 className="title">Phone Number</h3>
                                <h5 className="title">+1 (954) 997 4470</h5>
                            </div>
                        </div>
                    </div>
                    {/* End Single Address  */}

                    {/* Start Single Address  */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                        <div className="service service__style--2">
                            <div className="icon">
                                <FiMail />
                            </div>
                            <div className="inner">
                                <h3 className="title">Email Address</h3>
                                <h5 className="title">khalnepesov@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    {/* End Single Address  */}

                    {/* Start Single Address  */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                        <div className="service service__style--2">
                            <div className="icon">
                                <FiMapPin />
                            </div>
                            <div className="inner">
                                <h3 className="title">Location</h3>
                                <h5 className="title">Miami - Fort Lauderdale, FL</h5>
                            </div>
                        </div>
                    </div>
                    {/* End Single Address  */}

                </div>
            </div>
            </div>
            {/* End Contact Top Area  */}


            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default App;
