import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTimes } from "react-icons/fa";
import "./Templates.css";

import modern from "../../assets/images/templates/modern.png";
import creative from "../../assets/images/templates/creative.png";
import glass from "../../assets/images/templates/glass.png";
import developer from "../../assets/images/templates/developer.png";

import {
  getMyPortfolio,
  updateTemplate,
} from "../../services/portfolioService";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean, minimal and professional portfolio.",
    preview: modern,
    tags: ["Business", "Minimal", "Responsive"],
  },
  {
    id: "creative",
    name: "Creative",
    description: "Colorful design for designers and creators.",
    preview: creative,
    tags: ["Creative", "Animated", "Portfolio"],
  },
  {
    id: "glass",
    name: "Glass",
    description: "Premium glassmorphism portfolio template.",
    preview: glass,
    tags: ["Glass", "Premium", "Dark"],
  },
  {
    id: "developer",
    name: "Developer",
    description: "VS Code inspired portfolio for developers.",
    preview: developer,
    tags: ["VS Code", "Terminal", "Developer"],
  },
];

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState("");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const data = await getMyPortfolio();

      if (data?.portfolio) {
        setSelectedTemplate(data.portfolio.template);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateChange = async (template) => {
    try {
      setSaving(template);

      const response = await updateTemplate(template);

      if (response.success) {
        setSelectedTemplate(template);
        toast.success("Template updated successfully!");

        if (previewTemplate) {
          setPreviewTemplate(null);
        }
      }
    } catch (error) {
      toast.error(error.message || "Failed to update template.");
    } finally {
      setSaving("");
    }
  };

  if (loading) {
    return (
      <div className="templates-loading">
        Loading templates...
      </div>
    );
  }

  return (
    <div className="templates-page">

      <div className="templates-header">
        <h1>Portfolio Templates</h1>

        <p>
          Choose the portfolio template that best
          represents your personal brand.
        </p>
      </div>

      <div className="templates-grid">

        {templates.map((template) => (

          <div
            key={template.id}
            className={`templates-card ${
              selectedTemplate === template.id ? "templates-card-active" : ""
            }`}
          >

            <img
              src={template.preview}
              alt={template.name}
            />

            <div className="templates-content">

              <h2>{template.name}</h2>

              <p>{template.description}</p>

              <div className="templates-tags">
                {template.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="templates-actions">

                <button
                  className="templates-preview-btn"
                  onClick={() => setPreviewTemplate(template)}
                >
                  <FaEye />
                  Preview
                </button>

                {selectedTemplate === template.id ? (

                  <button
                    className="templates-selected-btn"
                    disabled
                  >
                    ✓ Currently Selected
                  </button>

                ) : (

                  <button
                    className="templates-select-btn"
                    disabled={saving === template.id}
                    onClick={() => handleTemplateChange(template.id)}
                  >
                    {saving === template.id
                      ? "Saving..."
                      : "Use Template"}
                  </button>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      {previewTemplate && (

        <div
          className="templates-preview-overlay"
          onClick={() => setPreviewTemplate(null)}
        >

          <div
            className="templates-preview-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="templates-close-preview"
              onClick={() => setPreviewTemplate(null)}
            >
              <FaTimes />
            </button>

            <img
              src={previewTemplate.preview}
              alt={previewTemplate.name}
            />

            <div className="templates-preview-content">

              <h2>{previewTemplate.name}</h2>

              <p>{previewTemplate.description}</p>

              <div className="templates-tags">
                {previewTemplate.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {selectedTemplate === previewTemplate.id ? (

                <button
                  className="templates-selected-btn"
                  disabled
                >
                  ✓ Currently Selected
                </button>

              ) : (

                <button
                  className="templates-select-btn"
                  onClick={() =>
                    handleTemplateChange(previewTemplate.id)
                  }
                >
                  Use This Template
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Templates;