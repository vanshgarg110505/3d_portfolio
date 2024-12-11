import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Vansh</span>👋🏻
            <br/>
            Your go-to Full Stack Web Developer

        </h1>
    ),
    2 : (
        <InfoBox
            text="Exploring the world of development and honing my skills with every project I undertake."
            link="/about"
            btnText="Learn More"
        />
    ),
    3 : (
        <InfoBox
            text="Worked on exciting projects that helped me grow as a developer. Curious to explore?"
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4 : (
        <InfoBox
            text="Looking for a developer? I’m just a few keystrokes away from bringing your idea to life!"
            link="/contact"
            btnText="Let's Talk"
        /> 
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
