import { Container, Row, Col, Image } from "react-bootstrap"
import headerImg from "../assets/img/header-img.png"
import { useState, useEffect } from "react"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 500
    const toRotate = ["|Software Developer|","|Back-end Developer|","|Front-end Developer|"]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => clearInterval(ticker)
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '|') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{"Hi! I'm Alexis"} <br /> <span className="wrap">{text}</span></h1>
                                    <p>I was introduced to computers at a young age and I have grown a long-standing fascination for coding and the power it
                                        holds to create and innovate.
                                        While my professional journey has led me to the food industry, the years of experience have allowed me to hone my skills in
                                        team leadership, time management, and problem-solving.
                                        Now, I am embracing the software development industry with dedication and a strong desire to grow my knowledge and
                                        experience in this field.</p>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <Image src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Banner;