import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAmazonaws,
} from "react-icons/si";

const Hero = ({ profile }) => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          👋 Hello, I'm
        </span>

        <h1>
          {profile?.name || "Your Name"}
        </h1>

        <h2>
          {profile?.headline || "Full Stack Developer"}
        </h2>

        <p>
          {profile?.about ||
            "I build scalable, modern and high-performance web applications using MERN Stack, AWS and AI technologies."}
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="primary-btn">
            Hire Me
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>

        </div>

        <div className="social-links">

          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}

          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}

          {profile?.email && (
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope />
            </a>
          )}

          {profile?.resume && (
            <a href={profile.resume}>
              <FaDownload />
            </a>
          )}

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image">

          <img
            src={
              profile?.profileImage ||
              "https://placehold.co/400x500/png?text=Profile"
            }
            alt="Profile"
          />

          <div className="tech react">
            <SiReact />
          </div>

          <div className="tech node">
            <SiNodedotjs />
          </div>

          <div className="tech mongo">
            <SiMongodb />
          </div>

          <div className="tech aws">
            <SiAmazonaws />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;