import React from 'react'
import './AboutMe.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTSANTS = {
        description: "A passionate MERN Stack Web Developer experienced in building Web applications with JavaScript, Reactjs, Nodejs, Angular,and some other cool libraries and frameworks",
        highlights: {
            bullets: [
                "MERN Stack Developer",
                "Interactive Frontend End as per the design",
                "Reactjs, Angular, Node",
                "Building REST API",
            ],
            heading: 'Here are a Few Highlights:'
        }
    }
    const renderHighlight = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
                <div className='hightlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className='about-me-container screen-container' id={props.id}>
            <div className='about-parent'>
                <ScreenHeading title={'AboutMe'} subHeading={'Why Choose Me'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
                        <div className='about-me-hightlights'>
                            <div className='hightlight-heading'>
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="resume.pdf" download="hema resume.pdf">
                                <button className='btn highlighted-btn'>
                                    Get Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
