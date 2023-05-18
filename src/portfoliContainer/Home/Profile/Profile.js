import React from 'react'
import Typical from 'react-typical';
import "./profile.css";


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.instagram.com/">
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href="https://twitter.com/home?lang=en">
                                <i className='fa fa-twitter'></i>
                            </a>

                            <a href="https://www.linkedin.com/feed/">
                                <i className='fa fa-linkedin'></i>
                            </a>

                            <a href="https://github.com/hemasudha123">
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello,  I'M  <span className='highlighted-text'>HemaSudha</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev",
                                        1000,
                                        "MERN Stack Dev",
                                        1000,
                                        "Cross Platform ",
                                        1000,
                                        "Reactjs/Node Dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-optins'>
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
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>
            </div >
        </div >
    )
}
