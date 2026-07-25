import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";
import "../../assets/css/components/profile/basicInfoForm.css";

function BasicInfoForm({ profile, refreshProfile }) {
  const [avatar, setAvatar] = useState(null);

  const [headline, setHeadline] = useState(profile.headline || "");
  const [designation, setDesignation] = useState(profile.designation || "");
  const [email, setEmail] = useState(profile.email || "");
  const [phone, setPhone] = useState(profile.phone || "");
  const [location, setLocation] = useState(profile.location || "");
  const [availability, setAvailability] = useState(
    profile.availability || "Open to Work"
  );
  const [resumeUrl, setResumeUrl] = useState(profile.resumeUrl || "");
  const [languages, setLanguages] = useState(
    profile.languages?.join(", ") || ""
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("headline", headline);
      formData.append("designation", designation);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("location", location);
      formData.append("availability", availability);
      formData.append("resumeUrl", resumeUrl);
      formData.append("languages", languages);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card" onSubmit={handleSubmit}>
      <h2>Basic Information</h2>

      <div className="avatar-section">
        <img
          src={
            avatar
              ? URL.createObjectURL(avatar)
              : profile.avatar?.url || "https://placehold.co/150"
          }
          alt="Avatar"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </div>

      <input
        type="text"
        placeholder="Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />

      <input
        type="text"
        placeholder="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option>Available</option>
        <option>Open to Work</option>
        <option>Freelancing</option>
        <option>Busy</option>
      </select>

      <input
        type="text"
        placeholder="Resume URL"
        value={resumeUrl}
        onChange={(e) => setResumeUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Languages (comma separated)"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

export default BasicInfoForm;