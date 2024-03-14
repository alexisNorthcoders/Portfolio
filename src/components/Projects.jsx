import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ncnews from "../assets/img/ncnews.png";
import javarewards1 from "../assets/img/javarewards.png";
import pokemon from "../assets/img/pokemon.png";
import marketplace from "../assets/img/marketplace.png";
import simongame from "../assets/img/simongame.png";
import hangman2 from "../assets/img/hangman2.gif";
import hangman1 from "../assets/img/hangman.gif";
import advent from "../assets/img/advent.png";
import whatsappchef from "../assets/img/whatsappchef.png";
import reactchat from "../assets/img/reactchat.png";
import platformer from "../assets/img/platformer.gif";
import express from "../assets/img/express.png";
import platemate from "../assets/img/platemate.png";
import raspberry from "../assets/img/raspberry.png";
import portfolio from "../assets/img/portfolio.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {

  const randomHangmanImage = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    return randomIndex === 0 ? hangman1 : hangman2;
  };
  const hangman = randomHangmanImage();

  const projects = [
    {
      title: "NC News",
      description: "Full Stack Web Application, focused on functionality. Perform many CRUD operations responsive buttons, optimistic rendering and error handling.",
      imgUrl: ncnews,
      url: "https://alexisncnews.netlify.app/",
      github: "https://github.com/alexisNorthcoders/NC-News",
      stack: ["JavaScript", "Nodejs", "PSQL", "React", "Express", "Bootstrap"]
    },
    {
      title: "JavaRewards",
      description: "A Full Stack Mobile App to connect independent coffeeshops with coffee lovers. Final Team Project of Northcoders bootcamp.",
      imgUrl: javarewards1,
      github: "https://github.com/alexisNorthcoders/Java-Rewards-Front-End",
      url: "https://www.youtube.com/watch?v=_u-udnQmH2c",
      stack: ["JavaScript", "Express", "Jest", "TypeScript", "Nodejs", "MongoDB", "React Native", "Firebase",]
    },
    {
      title: "Pokemon Battler",
      description: "Command line Game",
      imgUrl: pokemon,
      github: "https://github.com/alexisNorthcoders/PokemonBattler",
      stack: ["JavaScript", "Nodejs", "Jest", "Inquirer"]
    },
    {
      title: "NC Market Place",
      description: "Web Application for an online Market. User-friendly interface for an API that allow users to retrieve, add, and manage their items.",
      imgUrl: marketplace,
      github: "https://github.com/alexisNorthcoders/MarketPlace",
      stack: ["JavaScript", "Nodejs", "PSQL", "React", "Express"]
    },
    {
      title: "Hangman Mini Game",
      description: "Hangman game using React",
      imgUrl: hangman,
      github:"https://github.com/alexisNorthcoders/hangman",
      stack: ["JavaScript", "CSS", "React"]
    },
    {
      title: "Simon Mini Game",
      description: "Small app to practice DOM manipulation",
      imgUrl: simongame,
      url: "https://alexisraspberry.changeip.co/simongame",
      github: "https://github.com/alexisNorthcoders/simongame",
      stack: ["JavaScript", "CSS", "HTML"]
    },
  ];
  const personalProjects = [
    {
      title: "Back End Express Server",
      description: "Express server that does many things. Hosts APIs for many projects, hosts front end for many projects including this portfolio, has its own Whatsapp assistant and other random utilities.",
      imgUrl: express,
      github: "https://github.com/alexisNorthcoders/WhatsappBot",
      stack: ["JavaScript", "Nodejs", "Express", "React", "webwhatsapp", "OpenAI"]
    },

    {
      title: "Whatsapp Chef",
      description: "Whatsapp Assistant that makes calls to edamam API to fetch recipes.",
      imgUrl: whatsappchef,
      github: "https://github.com/alexisNorthcoders/WhatsappChef",
      stack: ["JavaScript", "Nodejs", "Express", "Edamam", "Twilio"]
    },

    {
      title: "Platformer Game",
      description: "Small platformer game to showcase html Canvas with game physics and mechanics",
      imgUrl: platformer,
      github: "https://github.com/alexisNorthcoders/Platformer-Game",
      stack: ["JavaScript", "HTML", "Canvas", "Sprites"]
    },
    {
      title: "PlateMate",
      description: "A Full Stack Web App to share your meal prep with friends and coworkers.",
      imgUrl: platemate,
      github: "https://github.com/alexisNorthcoders/PlateMate",
      stack: ["JavaScript", "React", "Tailwind CSS", "Firebase"]
    },
    {
      title: "React Chat Assistant",
      description: "React App connecting to OpenAI. Uses streaming responses, gives memory to AI and shows code snippets in markdown format.",
      imgUrl: reactchat,
      url: "https://alexisraspberry.changeip.co/chat",
      stack: ["JavaScript", "React", "OpenAI", "Nodejs", "Express"]
    },{
      title: "Portfolio",
      description: "React App to showcase multiple projects.",
      imgUrl:portfolio,
      github: "https://github.com/alexisNorthcoders/Portfolio",
      stack: ["JavaScript (jsx)", "React", "Bootstrap", "CSS"]
    },


  ];
  const coding = [

    {
      title: "Advent of Code",
      description: "My solutions for some challenges from 2023 Advent of Code event. Using JavaScript and Python.",
      imgUrl: advent,
      github: "https://github.com/alexisNorthcoders/adventCode2023",
      stack: ["JavaScript", "Python"]
    },
    {
      title: "Raspberry Pi",
      description: "Most of my code is tested and hosted by my local Raspberry Pi",
      imgUrl: raspberry,
      stack: ["ssh", "Nginx", "https", "SSL Certificates", "Raspberry Pi OS"]
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here you can see some Personal Projects, some coding exercises and Northcoders projects I've done while in the bootcamp.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Northcoders</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Random</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            personalProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            coding.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Projects;