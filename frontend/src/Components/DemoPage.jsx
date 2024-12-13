import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../Context/ProjectContext";
import styled, { keyframes } from "styled-components";
import { Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LazyLoad from "react-lazyload";


const borderAnimation = keyframes`
  0% {
    border-color: #99aaff;
  }
  50% {
    border-color: #ff99aa;
  }
  100% {
    border-color: #99aaff;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 20s infinite;
  border: 2px solid rgba(200, 162, 200, 0.5);
  margin-right: 13px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 2;
  }

  &::before {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledText = styled.span`
  font-size: 5em;
  display: inline-block;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 33px;
  margin-bottom: 40px;
  font-family: "Source Code Pro", monospace;
  animation: ${borderAnimation} 3s infinite;

  @media (max-width: 480px) {
    font-size: 3em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 3.5em;
    margin-top: 100px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    font-size: 4em;
    margin-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 220px;
  }
`;

const StyledVideo = styled.video`
  width: 80%;
  height: auto;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 3px solid #d8bfd8;
  margin-bottom: 40px;
  animation: ${borderAnimation} 3s infinite;
  padding: 10px;
`;

const DescriptionContainer = styled.div`
  text-align: left;
  text-justify: inter-word;
  padding: 20px;
  border: 3px solid #99aaff;
  border-radius: 10px;
  animation: ${borderAnimation} 3s infinite;
  margin-bottom: 20px;
`;

const DemoPage = () => {
  const { projectId } = useParams();
  const { projectList } = useContext(ProjectContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = projectList.find((p) => p.title === projectId);

  if (!project) {
    return <div>Demo not found</div>;
  }

  const detailedDescriptions = {
    FitLife: `
    <h2>FitLife Gym</h2>
    <p>FitLife Gym is an innovative digital platform designed to enhance the user experience in the fitness world. Developed as a preliminary project for my master's thesis, it focuses on usability and accessibility, allowing users to register, book classes, and manage their fitness activities efficiently from anywhere.</p>
    <p><strong>Disclaimer:</strong> This project was created for educational purposes as part of my master's program. All images used in the platform were sourced from Canva and are intended solely for project demonstration.</p>
    <h3>Key Features:</h3>
    <ul>
      <li><strong>User Registration and Authentication:</strong> Intuitive account creation with email and SMS notifications upon successful registration.</li>
      <li><strong>Class Booking System:</strong> Users can explore and reserve classes across various disciplines like Yoga, Pilates, Boxing, Cardio, and Strength, with automated booking confirmations.</li>
      <li><strong>Personalized User Profiles:</strong> Access to active and canceled reservations with the option to manage bookings as needed.</li>
      <li><strong>Instructor Interaction:</strong> Detailed information about instructors and their classes, enabling users to choose sessions that align with their preferences.</li>
      <li><strong>Contact Form:</strong> Direct communication with support via a contact form, with confirmation notifications for inquiries.</li>
      <li><strong>Admin Dashboard:</strong> Centralized control for managing user data, reservations, and gym operations. Includes real-time charts for tracking memberships and bookings.</li>
      <li><strong>External Integrations:</strong> Integration with services like Spotify for motivational playlists and email/SMS notifications to keep users informed.</li>
      <li><strong>Achievement:</strong> Preliminary project for my master’s thesis, graded 8.6/10 at Universidad Europea de Madrid.</li>
    </ul>
  `,
    DineBooker: `
    <p>DineBooker is a dynamic platform developed as my master’s thesis to revolutionize the dining experience for both users and restaurant owners. The platform combines real-world data with fictional elements, showcasing advanced features for restaurant discovery, reservation management, and user engagement.</p>
    <p><strong>Disclaimer:</strong> This project is for educational purposes only and is not affiliated with, endorsed by, or officially associated with any of the restaurants listed. Restaurant names, addresses, and websites are real and publicly available, while other components such as photos, menus, schedules, reviews, and ratings were creatively designed using Canva and generated to fulfill the requirements of the project.</p>
    <h3>Project Overview:</h3>
    <ul>
      <li><strong>Purpose:</strong> To create a seamless and intuitive platform that simplifies restaurant reservations while fostering user loyalty and providing restaurant owners with powerful management tools.</li>
      <li><strong>Scope:</strong> A fully functional full-stack application using React, Python, Django, and PostgreSQL.</li>
      <li><strong>Achievement:</strong> Successfully defended as my master’s thesis at Universidad Europea de Madrid, graded 10/10.</li>
    </ul>
    <h3>Key Features:</h3>
    <ul>
      <li><strong>User Profiles:</strong>
        <ul>
          <li>Manage active and canceled reservations with ease.</li>
          <li>Earn and redeem DinePoints through bookings and referrals, generating QR codes for discounts.</li>
          <li>View and edit reviews, favorite restaurants, and personal details.</li>
        </ul>
      </li>
      <li><strong>Advanced Search & Filters:</strong>
        <ul>
          <li>Find restaurants based on cuisine, location, and user preferences.</li>
          <li>Access details like menus, reviews, operating hours, and photo galleries.</li>
        </ul>
      </li>
      <li><strong>Booking System:</strong>
        <ul>
          <li>Step-by-step process to reserve tables, select seat preferences, add notes for special occasions, and apply promo codes.</li>
        </ul>
      </li>
      <li><strong>Gift Cards:</strong>
        <ul>
          <li>Purchase customizable gift cards with selectable designs and values, perfect for new users and occasional visitors.</li>
        </ul>
      </li>
      <li><strong>Restaurant Owner Dashboard:</strong>
        <ul>
          <li>Manage bookings, menus, and operating hours.</li>
          <li>Respond to user reviews and monitor restaurant performance through interactive charts showing reservation trends and membership types.</li>
        </ul>
      </li>
      <li><strong>Loyalty Program (DinePoints):</strong>
        <ul>
          <li>Users earn points for registering, booking, and referring friends. Points are redeemable as discounts for future reservations.</li>
        </ul>
      </li>
      <li><strong>Real and Fictional Data Integration:</strong>
        <ul>
          <li><strong>Real Data:</strong> Restaurant names, addresses, and websites.</li>
          <li><strong>Fictional Data:</strong> Photos (created using Canva), menus (designed for project purposes), schedules, reviews, and ratings.</li>
        </ul>
      </li>
    </ul>
    <p>This project reflects my ability to design and implement a complex full-stack application while solving real-world challenges. It showcases technical expertise in Python, Django, React, and PostgreSQL, as well as creativity and attention to user experience.</p>
  `,
  };

  return (
    <Container>
      <StyledText>
        <AnimatedLetter>{project.title.charAt(0)}</AnimatedLetter>
        {project.title.slice(1)}
      </StyledText>
      <LazyLoad height={200} offset={100}>
        <StyledVideo controls>
          <source src={project.demoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </LazyLoad>
      <DescriptionContainer
        dangerouslySetInnerHTML={{
          __html: `<p>${project.comment}</p><p>Technologies: ${
            project.technologies
          }</p><hr style="border: 1px solid #d8bfd8;"/>${
            detailedDescriptions[project.title]
          }`,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            padding: "12px 22px",
            backgroundColor: "rgba(200, 162, 200, 0.3)",
            borderRadius: "12px",
            color: "#a080a0",
            display: "flex",
            textDecoration: "none",
            boxSizing: "border-box",
            transition:
              "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",

            "&:hover": {
              backgroundColor: "rgba(200, 162, 200, 0.5)",
              color: "#d8bfd8",
            },
            "& svg": {
              color: "white",
              marginRight: "8px",
            },
          }}
        >
          <GitHubIcon />
          View on GitHub
        </Button>
      </div>
    </Container>
  );
};

export default DemoPage;
