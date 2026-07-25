import { useEffect, useState } from "react";
import { getMyProfile } from "../../services/profileService";

import BasicInfoForm from "../../components/profile/BasicInfoForm";
import AboutForm from "../../components/profile/AboutForm";
import SkillsForm from "../../components/profile/SkillsForm";
import ExperienceForm from "../../components/profile/ExperienceForm";
import EducationForm from "../../components/profile/EducationForm";
import CertificateForm from "../../components/profile/CertificateForm";
import SocialLinksForm from "../../components/profile/SocialLinksForm";
import "../../assets/css/pages/profile.css";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
const [loading ,setLoading]=useState(false);
const fetchProfile = async () => {
  try {
   const data = await getMyProfile();

setProfile(data.profile);
    setProfile(data.profile);
  } catch (error) {
    if (error.response?.status === 404) {
      // New user - initialize an empty profile
      setProfile({
        headline: "",
        designation: "",
        about: "",
        location: "",
         phone: "",
         email: "",
        availability: "Open to Work",
        resumeUrl: "",
        languages: [],
        skills: [],
        experience: [],
        education: [],
        certificates: [],
        socialLinks: {},
      });
    } else {
      console.error(error);
      alert("Failed to load profile.");
    }
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="profile-page">
      <h1>Edit Profile</h1>

<BasicInfoForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<AboutForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<SkillsForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<ExperienceForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<EducationForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<CertificateForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

<SocialLinksForm
  profile={profile}
  refreshProfile={fetchProfile}
/>

    </div>
  );
}

export default ProfilePage;