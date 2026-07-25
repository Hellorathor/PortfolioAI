import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certificates from "./Certificates";
// import Contact from "../../components/portfolio/Contact";
import Footer from "./Footer";

function ModernTemplate({ portfolio }) {
  if (!portfolio) {
    return <h2>Portfolio not found.</h2>;
  }

  const profile = portfolio.profileSnapshot;
  const projects = portfolio.projectSnapshot || [];
    // Debug logs should be AFTER the variable is created
    console.log("Profile Snapshot:", profile);
   console.log("Social Links:", profile.socialLinks);
  return (
    <>
      <Hero profile={profile} />

      <About profile={profile} />

      <Skills profile={profile} />

      <Projects projects={projects} />

      <Experience profile={profile} />

      <Education profile={profile} />
      
      <Certificates profile={profile} />

      {/* <Contact profile={profile} /> */}

      <Footer />
    </>
  );
}

export default ModernTemplate;