import React, {useEffect, useState} from "react";
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'


const About = () => {

    const data = [
        {
            id: "1",
            skill: "HTML",
            percentage: "90%"
        },

        {
            id: "2",
            skill: "CSS",
            percentage: "85%"
        },

        {
            id: "3",
            skill: "JAVASCRIPT",
            percentage: "80%"
        },

        {
            id: "4",
            skill: "REACT JS",
            percentage: "85%"
        },

        {
            id: "5",
            skill: "NODE JS",
            percentage: "70%"
        },

        {
            id: "6",
            skill: "EXPRESS JS",
            percentage: "72%"
        },

        {
            id: "7",
            skill: "UI/UX",
            percentage: "75%"
        },
    ]

    const percent = [
        

            '90%',
        

        
             '85%',
        

        
            '80%',
        

        
             '85%',
        

        
             '70%',
        

        
             '72%',
        

        
             '75%'

    ]


    const [skillBar, setSkillBar] = useState ()
    useEffect(() => {
        window.onscroll = function (){
            setInterval(function(){
                percent.forEach((percentage, key) => {
                    const newSkillBar = {
                        opacity: 1,
                        width: `${percentage}`,
                    }
                    console.log(newSkillBar)
                    setSkillBar(newSkillBar)
                })
                
            }, 1000)   
        }
    }, [setSkillBar])
    
       
    

    return(
        <section className="pt-5 pb-5" id="about">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4">About Me</h1>
                <div className="d-lg-flex flex-nowrap gap-3 pt-5">
                    <div className="about-flex">
                        <h4 className="fs-5">Hello! I'm Seun David</h4>
                        <h6 className="about-font fs-6">I am a Full stack developer, fluent in English and specialized in web development.
                        I have a great passion on designing and always love to create a new web project. Thus i am a highly skilled, enthusiastic, self-motivated Full stack developer able to do any kind of work in web designing and development. I have developed few websites and my clients are satisfied. My goal when working with a client is to bring the client’s tasks, wants and imaginations to life. I am efficient and try to keep up to date also upgrade my skills. 
                        I use the best ways and tools to satisfy my clients imaginations. <br />
                        
                        UI/UX (wireframe, mock-up and prototyping) <br />
                        Wordpress, create and customize any commercial theme. <br />
                        Web programming, web development: frontend and backend <br />
                        Adobe creative suites such as XD, Illustrator. <br />
                        HTML, CSS, Bootstrap, Javascript, React, Node.js, Express.js and more....
                        </h6>
                        <div className="d-lg-flex flex-nowrap gap-3 pt-2">
                            <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><HiOutlineMail /></span> Email: oyewumidavid84@gmail.com</h6>
                            <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><BiPhoneCall /></span> Phone Number: 09059630747</h6>
                        </div>
                    </div>
                    <div className="about-flex">
                        <div className="skill-image">
                            <div className="skill-image-overlay">
                                <h6>
                                    HTML, CSS, Bootstrap, Javascript, React, Node.js, Express.js and more....
                                </h6>
                                
                                {data.map((skills, bar) => {
                                    
                                    const skill = `${skills.skill}`    
                                    const percentage = `${skills.percentage}`                                
                                    return( 
                                        <div key={bar.id} className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>{skill}
                                                    <span className="float-end">{percentage}</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line"><span style={skillBar}></span></div>
                                        </div>  
                                    )
                                })}  
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;