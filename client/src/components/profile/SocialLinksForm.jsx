import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";

function SocialLinksForm({ profile, refreshProfile }) {
  const [social, setSocial] = useState({
    github: profile.socialLinks?.github || "",
    linkedin: profile.socialLinks?.linkedin || "",
    website: profile.socialLinks?.website || "",
    twitter: profile.socialLinks?.twitter || "",
    instagram: profile.socialLinks?.instagram || "",
    facebook: profile.socialLinks?.facebook || "",
    youtube: profile.socialLinks?.youtube || "",
    leetcode: profile.socialLinks?.leetcode || "",
    hackerrank: profile.socialLinks?.hackerrank || "",
    codeforces: profile.socialLinks?.codeforces || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSocial((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(social).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Social links updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update social links.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card" onSubmit={handleSubmit}>
      <h2>Social Links</h2>

      <input
        type="url"
        name="github"
        placeholder="GitHub URL"
        value={social.github}
        onChange={handleChange}
      />

      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={social.linkedin}
        onChange={handleChange}
      />

      <input
        type="url"
        name="website"
        placeholder="Portfolio / Website URL"
        value={social.website}
        onChange={handleChange}
      />

      <input
        type="url"
        name="twitter"
        placeholder="Twitter / X URL"
        value={social.twitter}
        onChange={handleChange}
      />

      <input
        type="url"
        name="instagram"
        placeholder="Instagram URL"
        value={social.instagram}
        onChange={handleChange}
      />

      <input
        type="url"
        name="facebook"
        placeholder="Facebook URL"
        value={social.facebook}
        onChange={handleChange}
      />

      <input
        type="url"
        name="youtube"
        placeholder="YouTube Channel URL"
        value={social.youtube}
        onChange={handleChange}
      />

      <input
        type="url"
        name="leetcode"
        placeholder="LeetCode Profile URL"
        value={social.leetcode}
        onChange={handleChange}
      />

      <input
        type="url"
        name="hackerrank"
        placeholder="HackerRank Profile URL"
        value={social.hackerrank}
        onChange={handleChange}
      />

      <input
        type="url"
        name="codeforces"
        placeholder="Codeforces Profile URL"
        value={social.codeforces}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Social Links"}
      </button>
    </form>
  );
}

export default SocialLinksForm;