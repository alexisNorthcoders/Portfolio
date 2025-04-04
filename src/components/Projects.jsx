import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ncnews from "../assets/img/ncnews.png";
import javarewards1 from "../assets/img/javarewards.png";
import pokemon from "../assets/img/pokemon.png";
import marketplace from "../assets/img/marketplace.png";
import simongame from "../assets/img/simongame.png";
import nextportfolio from "../assets/img/nextportfolio.png";
import hangman2 from "../assets/img/hangman2.gif";
import hangman1 from "../assets/img/hangman.gif";
import advent from "../assets/img/advent.png";
import whatsappchef from "../assets/img/whatsappchef.png";
import reactchat from "../assets/img/reactchat.png";
import platformer from "../assets/img/platformer.gif";
import snake from "../assets/img/snake.png";
import zigzag from "../assets/img/zigzag.png";
import express from "../assets/img/express.png";
import platemate from "../assets/img/platemate.png";
import raspberry from "../assets/img/raspberry.png";
import portfolio from "../assets/img/portfolio.png";
import noteapp from "../assets/img/noteapp.gif";
import midikeyboard from "../assets/img/midikeyboard.gif";
import selfdrivingcar from "../assets/img/self-driving-car.gif";
import clipcloud from "../assets/img/clipcloud.png";

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
      url: "https://alexisraspberry.duckdns.org/chat/simongame",
      github: "https://github.com/alexisNorthcoders/simongame",
      stack: ["JavaScript", "CSS", "HTML"]
    },
  ];
  const personalProjects = [
    {
      title: "ClipCloud",
      description: "Web application that allows users to easily share content by copying and pasting text or sharing files. Coded just with JavaScript, HTML and CSS.",
      imgUrl: clipcloud,
      github: "https://github.com/alexisNorthcoders/clipboard",
      url:"https://clipboard.duckdns.org/",
      stack: ["JavaScript", "Tailwind","HTML","Node.js","API","Websockets"]
    },
    {
      title: "Portfolio with CMS",
      description: "Portfolio Website with Next.js, Kinde(authentication), Supabase and Sanity (CMS)! It features a CMS(Content management system) to easily update content.",
      imgUrl: nextportfolio,
      github: "https://github.com/alexisNorthcoders/next_portfolio_CMS",
      url:"https://next-portfolio-cms.vercel.app/",
      stack: ["Next.js", "Tailwind","Supabase","CMS (Sanity)","Shadcn"]
    },
    {
      title: "Neural Network Self-Driving Car",
      description: "Mini-game with the objective of training a Neural Network to drive a car through traffic.",
      imgUrl: selfdrivingcar,
      github: "https://github.com/alexisNorthcoders/self-driving-car",
      url:"https://neural-network-car-game.netlify.app/",
      stack: ["JavaScript", "HTML","Canvas","CSS","OOP", "Machine Learning"]
    },
    {
      title: "Children's MIDI Keyboard",
      description: "Web app where you can use your mouse, keyboard or MIDI keyboard to play music notes.",
      imgUrl: midikeyboard,
      github: "https://github.com/alexisNorthcoders/midi-chat-sockets",
      url:"https://alexisraspberry.duckdns.org/midi/",
      stack: ["JavaScript", "Nodejs", "Express", "HTML", "TailwindCSS", "CSS","OpenAI", "Websockets"]
    },
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
      title: "Note AI Interpreter",
      description: "Note taking app to showcase vector embedding workflow with an AI model.",
      imgUrl: noteapp,
      url:"https://note-app-ai.vercel.app/",
      github: "https://github.com/alexisNorthcoders/note-taking-app-AI",
      stack: ["TypeScript", "Nextjs", "MongoDB", "Pinecone", "TailwindCSS"]
    },
    {
      title: "Platformer Game",
      description: "Small platformer game drawn on HTML Canvas to showcase OOP principles with game physics and mechanics. ",
      imgUrl: platformer,
      url:"https://alexisraspberry.duckdns.org/kings-and-pigs/",
      github: "https://github.com/alexisNorthcoders/Platformer-Game",
      stack: ["JavaScript", "HTML", "Canvas", "Sprites"]
    },
    {
      title: "Multiplayer Snake Game",
      description: "Multiplayer Snake Game - drawn on Canvas featuring Websockets for realtime communication",
      imgUrl: snake,
      url:"https://alexisraspberry.duckdns.org/snake",
      github: "https://github.com/alexisNorthcoders/p5_snake_game",
      stack: ["Go","Websockets","JavaScript", "HTML", "Canvas"]
    },
    {
      title: "Zigzag Game",
      description: "Small game - drawn on Canvas, features Highscore functionality - submission for challenge on https://www.youtube.com/watch?v=1L5b9GVd75I&t=12s&ab_channel=RaduMariescu-Istodor",
      imgUrl: zigzag,
      url:"https://alexisraspberry.duckdns.org/zigzag/",
      github: "https://github.com/alexisNorthcoders/zigzag-game",
      stack: ["JavaScript", "HTML", "Canvas", "HTTP"]
    },
    {
      title: "PlateMate",
      description: "A React App to share your meal prep with friends and coworkers. Fully styled using TailwindCSS. Realtime Firebase Database, Authentication and Storage.",
      imgUrl: platemate,
      url:"https://platemate.onrender.com/",
      github: "https://github.com/alexisNorthcoders/PlateMate",
      stack: ["JavaScript", "React", "Tailwind CSS", "Firebase"]
    },
    {
      title: "React Chat Assistant",
      description: "React App connecting to OpenAI. Uses streaming responses, gives memory to AI and shows code snippets in markdown format.",
      imgUrl: reactchat,
      url: "https://alexisraspberry.duckdns.org/chat",
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
      description: "My solutions for some challenges from 2019 (TS), 2020 (C#), 2021 (Java), 2022 (TS), 2023 (JS) and 2024 Advent of Code event.",
      imgUrl: advent,
      github: "https://github.com/alexisNorthcoders/adventCode2023",
      stack: ["JavaScript", "Python","C#","Java","TypeScript"]
    },
    {
      title: "Raspberry Pi",
      description: "Most of my code is tested and hosted by my local Raspberry Pi",
      imgUrl: raspberry,
      stack: ["ssh", "Nginx", "https", "SSL Certificates", "Raspberry Pi OS", "Docker"]
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
                  <p>Here you can see some Personal Projects, some coding exercises and Northcoders projects I have done while in the bootcamp.</p>
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