import "./DarkProTemplate.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const DarkProTemplate = ({
  profile,
  projects,
  experiences,
  education,
  certificates,
}) => {
  return (
    <div className="darkpro">

      <Navbar />

      <main className="darkpro-container">

        <Hero profile={profile} />

        {/* Next Sections */}

        {/* About */}

        {/* Experience */}

        {/* Projects */}

        {/* Skills */}

        {/* Education */}

        {/* Certificates */}

        {/* Contact */}

        {/* Footer */}

      </main>

    </div>
  );
};

export default DarkProTemplate;