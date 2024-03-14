import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from "../assets/img/skills/css-3.svg"
import boot from "../assets/img/skills/bootstrap.svg"
import express from "../assets/img/skills/express.svg"
import firebase from "../assets/img/skills/firebase.svg"
import github from "../assets/img/skills/github-icon.svg"
import html from "../assets/img/skills/html-5.svg"
import javascript from "../assets/img/skills/javascript.svg"
import  jest from "../assets/img/skills/jest.svg"
import mongodb from "../assets/img/skills/mongodb-icon.svg"
import nodejs from "../assets/img/skills/nodejs.svg"
import openai from "../assets/img/skills/openai-icon.svg"
import psql from "../assets/img/skills/postgresql.svg"
import python from "../assets/img/skills/python.svg"
import react from "../assets/img/skills/react.svg"
import tailwind from "../assets/img/skills/tailwindcss-icon.svg"
import typescript from "../assets/img/skills/typescript-icon.svg"
import agile from "../assets/img/skills/agile.svg"
import tdd from "../assets/img/skills/tdd.png"
import mvc from "../assets/img/skills/mvc.svg"
import pairProgramming from "../assets/img/skills/pairprogramming.jpeg"


function Skills() {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const skills = [
        {
            title: "CSS",
            icon: css,
            description: "Proficient in styling webpages using CSS."
        },
        {
            title: "JavaScript",
            icon: javascript,
            description: "Extensive use of JavaScript for dynamic and interactive web development."
        },
        {
            title: "Node.js",
            icon: nodejs,
            description: "Utilizing Node.js for server-side scripting and backend development."
        },
        {
            title: "Bootstrap",
            icon: boot,
            description: "Utilizing Bootstrap components for responsive web development."
        },
        {
            title: "Express",
            icon: express,
            description: "Building RESTful APIs and web applications with Express.js."
        },
        {
            title: "Firebase",
            icon: firebase,
            description: "Leveraging Firebase for authentication, real-time chat, databases, and cloud storage."
        },
        {
            title: "GitHub",
            icon: github ,
            description: "Version control and collaboration using GitHub."
        },
        {
            title: "HTML",
            icon: html,
            description: "Proficient in creating structured webpages with HTML5."
        },
       
        {
            title: "Jest",
            icon: jest,
            description: "Applying Test-Driven Development (TDD) methodology with Jest for robust testing."
        },
        {
            title: "MongoDB",
            icon: mongodb,
            description: "Expertise in using MongoDB for database management."
        },
      
        {
            title: "OpenAI",
            icon: openai,
            description: "Experience with OpenAI API, particularly in prompt engineering."
        },
        {
            title: "PostgreSQL",
            icon: psql,
            description: "Proficient in database management with PostgreSQL, including hosting, testing, and maintenance."
        },
        {
            title: "Python",
            icon: python,
            description: "Utilizing Python for scripting, data analysis, and solving various problems."
        },
        {
            title: "React",
            icon: react,
            description: "Extensive experience in building web and mobile applications using React."
        },
        {
            title: "Tailwind CSS",
            icon: tailwind,
            description: "Applying Tailwind CSS for efficient and customizable styling of webpages."
        },
        {
            title: "TypeScript",
            icon: typescript,
            description: "Implementing type safety and improved code maintainability with TypeScript."
        },
        {
            title: "Pair Programming",
            icon: pairProgramming,
            description: "Proficient in collaborative programming techniques, working closely with team members to solve problems, share knowledge, and produce high-quality code."
        },
        {
            title: "Test-Driven Development (TDD)",
            icon: tdd,
            description: "Skilled in Test-Driven Development (TDD) practices, writing tests before code to ensure code quality, maintainability, and functionality."
        },
        {
            title: "Model-View-Controller (MVC)",
            icon: mvc,
            description: "Experienced in designing and implementing applications following the Model-View-Controller (MVC) architectural pattern for better organization, separation of concerns, and scalability."
        },
        {
            title: "Agile Methodologies",
            icon: agile,
            description: "Adaptable to Agile methodologies, including Scrum and Kanban, to facilitate iterative development, collaboration, and continuous improvement within cross-functional teams."
        }
    ];


    return (<section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here's a summary of my acquired skills, including methodologies, techniques, soft skills, and technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill) => {
                                return (
                                    <div className="item">
                                        <h5>{skill.title}</h5>
                                        <img src={skill.icon} style={{ width: '100px', height: '100px' }} alt={skill.title} />
                                        <p>{skill.description}</p>
                                    </div>
                                )
                            })}

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Skills;