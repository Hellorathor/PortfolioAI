import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";

const GlassTemplate = ({ portfolio }) => {
  if (!portfolio) return null;

  const profile = portfolio.profileSnapshot || {};
  const projects = portfolio.projectSnapshot || [];

  return (
    <>
      <Hero profile={profile} />

      <About profile={profile} />

      <Skills profile={profile} />

      <Projects projects={projects} />

      <Experience experience={profile.experience || []} />

      <Education education={profile.education || []} />

      <Certificates certificates={profile.certificates || []} />

      <Contact profile={profile} />

      <Footer profile={profile} />
    </>
  );
};

export default GlassTemplate;