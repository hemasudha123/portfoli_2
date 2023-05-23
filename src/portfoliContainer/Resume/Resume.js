import React, { useState } from 'react'
import './Resume.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    console.log(fadeInSubscription);

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>
                        {props.heading ? props.heading : ''}
                        <div className='resume-sub-heading'>
                            <span>{props.subHeading ? props.subHeading : ''}</span>
                        </div>
                        <div className='resume-heading-description'>
                            <span>{props.description ? props.description : ''}</span>
                        </div>
                    </span>
                    <div>
                        {props.fromDate && props.toDate ? (
                            <div className='heading-date'>
                                {props.fromDate + "_" + props.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skill", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },

    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "React Js", ratingPercentage: 80 },
        { skill: "Express Js", ratingPercentage: 80 },
        { skill: "Node Js", ratingPercentage: 80 },
        { skill: "Mongo Db", ratingPercentage: 80 },
        { skill: "Html", ratingPercentage: 80 },
        { skill: "Css", ratingPercentage: 85 },
        { skill: "Mysql", ratingPercentage: 50 },
    ];


    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2022", toDate: "2022" },
            description: "A Personal Portfolio Website to showcase all my details and projects at one place",
            subHeading: "Technologies Used:React Js, Bootstrap",
        },
        {
            title: "Ecommerce Website",
            duration: { fromDate: "2022", toDate: "2022" },
            description: "Online ecommerce website for showcasing and selling products through online.",
            subHeading: "Technologies Used:React Js, Bootstrap,Node Js,Express, Mongodb,postman.",
        },
        {
            title: "Admin Panel",
            duration: { fromDate: "2022", toDate: "2022" },
            description: "Create a dashboard that provides an overview of the uploaded content, such as a list or grid view of GIFs, images, and stickers. This will help administrators easily navigate and manage the existing assets. Implement the ability to perform CRUD operations (Create, Read, Update, Delete) on the uploaded files and their associated values. Administrators should be able to view, edit, and delete individual files, as well as update their metadata as needed.",
            subHeading: "Technologies Used:React Js,css, Bootstrap,Node Js,Express, Mongodb,postman.",
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading={"Rajiv Gandhi University of Knowledge Technologies"}
                subHeading={"BACHELOR OF ElECTRONICS AND COMMUNICATION ENGINEERING"}
                fromDate={"2018"}
                toDate={"2022"}
            />
            <ResumeHeading
                heading={"Rajiv Gandhi University of Knowledge Technologies"}
                subHeading={"Pre-University Course (PUC)"}
                fromDate={"2016"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"Zilla Parishad High School "}
                subHeading={"School"}
                fromDate={"2015"}
                toDate={"2016"}
            />
        </div>,
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading
                heading={"Way2News"}
                subHeading={"MERN STACK DEVELOPER"}
                fromDate={"2022"}
                toDate={"present"}
            />
            <span className='resume-description-text'>
                Currently working as MERN stack developer and also online freelancing work.
            </span>
            <span className='resume-description-text'>
                -- Developed  a dashboard that provides an overview of the uploaded content, such as a list or grid view of GIFs, images, and stickers. This will help administrators easily navigate and manage the existing assets
            </span>
            <span className='resume-description-text'>
                -- Implementing login and signup authentication using OTP (One-Time Password) involves creating a system that verifies the identity of users through a temporary code sent to their registered mobile number or email address.
            </span>
            <span className='resume-description-text'>
                -- I stretch my mental capacity  to develope UI as per the given designs.
            </span>
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{ width: skill.ratingPercentage + "%" }}
                            className='active-percentage-bar'
                        >
                        </div>
                    </div>
                </div>
            ))}
        </div>,
        <div className='resume-screen-container' key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,
        <div className='resume-screen-container' key="interests">
            <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something  i can never compromise with,Skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
            />
        </div>
        // </div >,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarsoulOffset = {
            style: {
                transform: "translateY(" + index * offsetHeight * -1 + "px)"
            }
        };
        setCarousalOffSetStyle(newCarsoulOffset);
        setSelectedBulletIndex(index);
    };




    const getBullets = () => {
        console.log(resumeBullets);
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index == selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B" />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ));
    };


    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }


    return (
        <div className='resume-container screen-container ' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div >
    )
}
