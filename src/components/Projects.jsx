import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import apod from "../assets/img/projects/apod.webp";
import freescribe from "../assets/img/projects/freescribe.webp";
import facebookClone from "../assets/img/projects/facebookClone.webp";
import notary from "../assets/img/projects/Notary.webp";
import portfolio from "../assets/img/projects/portfolio.webp";
import creditApps from "../assets/img/projects/CreditAppsDash.webp";
import dts from "../assets/img/projects/dts.webp";
import investacard from "../assets/img/projects/investacard.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Astronomy Picture of the Day",
      description:
        "JavaScript | React.js | API Integration | Data Management | Responsive Design",
      imgUrl: apod,
      fullDescription:
        "This project is a React.js application utilizing NASA's Astronomy Picture of the Day API to provide users with stunning daily images and detailed explanations of cosmic phenomena. React hooks were used to manage the data fetching and rendering processes, ensuring a seamless user experience. The application emphasizes data efficiency by storing the first API request, minimizing repeated data loads for optimized performance. Its responsive design allows users to explore the content across devices without compromising on visual quality or usability. This project highlights my strengths in API integration, data handling, and front-end design for scientific and educational applications.",
    },
    {
      title: "Transcription Platform",
      description:
        "JavaScript | React.js | '@xenova/transformers' | Speech Recognition | React Hooks",
      imgUrl: freescribe,
      fullDescription:
        "The Transcription Platform is a React.js application that performs client-side speech recognition, using the '@xenova/transformers' library to handle real-time transcription tasks. React hooks are implemented throughout the application to efficiently manage real-time audio inputs, while maintaining smooth and accurate transcriptions. The intuitive interface ensures users can easily interact with the transcription features, highlighting a user-centric design approach. This project demonstrates my expertise in front-end development, speech recognition technology, and the effective use of React hooks for dynamic, client-side functionality.",
    },
    {
      title: "Facebook Clone",
      description:
        "JavaScript | React.js | Firebase | Google Authentication | Material-UI | UI/UX Design",
      imgUrl: facebookClone,
      fullDescription:
        "This Facebook Clone replicates the core user interface and posting functionality of the social media platform, using React.js for the front end, along with Firebase and Google Authentication for secure user sign-in. With Material-UI components, the interface provides a smooth, responsive experience that closely mirrors the original platform's design. React hooks were used to handle dynamic content updates, ensuring real-time interactions in posting features. This project showcases my skills in UI replication, Firebase integration, and the practical application of React hooks to enhance interactivity.",
    },
    {
      title: "Notary App",
      description:
        "JavaScript | React.js | Node.js | Express.js | MongoDB | Full-Stack Development",
      imgUrl: notary,
      fullDescription:
        "The Notary App is designed for scheduling and client management, specifically for notary services. Built with React.js for the front end and Node.js with Express and MongoDB for the backend, it allows users to set appointments, manage client data, and streamline scheduling. React hooks were implemented to manage state and streamline appointment updates in real time. MongoDB provides the flexibility needed for managing dynamic appointment data, ensuring reliability and ease of data retrieval. This project underscores my capabilities in full-stack development, database management, and intuitive user interface design for service-based applications.",
    },
    {
      title: "Credit Apps",
      description:
        "JavaScript | React.js | Node.js | Express.js | MySQL | UI/UX Design",
      imgUrl: creditApps,
      fullDescription:
        "Credit Apps is a financial management platform developed for handling application submissions and user data. This full-stack application leverages React.js for the front end, while Node.js, Express, and MySQL are used to securely store and manage application data. I focused on creating a streamlined form submission and validation process, ensuring an intuitive experience for users. React hooks enable real-time data updates and error handling, enhancing usability and interactivity. This project showcases my proficiency in handling complex form workflows, data validation, and UI/UX design for financial applications.",
    },
    {
      title: "Diamond Tool Store",
      description:
        "JavaScript | Vue.js | HTML | CSS | Responsive Web Design | API Integration | E-commerce",
      imgUrl: dts,
      fullDescription:
        "Diamond Tool Store is an e-commerce platform designed for a seamless online shopping experience, featuring product listings, a shopping cart, and checkout processes. Developed with Vue.js, this project includes API integration for real-time inventory updates, creating an efficient and user-friendly purchasing experience. The responsive design adapts across devices, providing consistent accessibility and usability for customers. I designed the UI to be clean and intuitive, guiding users through the product discovery and checkout phases. This project highlights my skills in e-commerce web development, responsive design, and API-driven applications.",
    },
    {
      title: "Investacard",
      description:
        "JavaScript | React.js | Node.js | Express.js | MySQL | E-commerce",
      imgUrl: investacard,
      fullDescription:
        "Investacard is an e-commerce application focused on collectible cards, featuring inventory management, order processing, and payment integration. The front end was built with React.js, while Node.js, Express, and MySQL form the backbone of the server side, allowing efficient data handling and user management. I implemented React hooks to manage inventory updates and enhance the shopping experience. The checkout process is optimized for speed and security, making it easy for users to browse and purchase items. This project demonstrates my expertise in building scalable e-commerce platforms that support business objectives and enhance the customer journey.",
    },
    {
      title: "Portfolio Website",
      description:
        "JavaScript | React.js | HTML | CSS | Responsive Design | UI/UX",
      imgUrl: portfolio,
      fullDescription:
        "This portfolio website was designed to showcase my professional projects, skills, and experience, with a responsive and visually engaging interface. Built with React.js, it includes dynamic rendering of content, using React hooks for real-time project updates. I designed the UI with a clean layout and intuitive navigation, providing easy access to my work. The site is fully responsive, allowing for seamless viewing across devices, and incorporates best practices in UI/UX design. This project exemplifies my focus on creating professional, user-friendly web applications that effectively communicate my expertise.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These projects highlight my expertise in front-end and
                    back-end development, with a focus on creating responsive
                    designs, intuitive user experiences, and efficient
                    server-side solutions. Each showcases my ability to apply a
                    diverse technical skill set to real-world challenges,
                    delivering impactful results.
                  </p>
                  <Container id="projects-tabs" defaultactivekey="first">
                    <Container
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Container eventkey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Container>
                    </Container>
                  </Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
