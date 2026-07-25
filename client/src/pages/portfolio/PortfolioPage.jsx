import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPublicPortfolio } from "../../services/portfolioService";

import ModernTemplate from "../../templates/modern/ModernTemplate";
import CreativeTemplate from "../../templates/creative/CreativeTemplate";
import GlassTemplate from "../../templates/glass/GlassTemplate";
import DeveloperTemplate from "../../templates/developer/DeveloperTemplate";

function PortfolioPage() {
  const { slug } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, [slug]);

  const fetchPortfolio = async () => {
    try {
      const data = await getPublicPortfolio(slug);
    //     console.log("Backend Response:", data);
    // console.log("Portfolio:", data.portfolio);
    // console.log("Template:", data.portfolio.template);
      setPortfolio(data.portfolio);
    } catch (error) {
      console.log(error);
      setPortfolio(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Portfolio...</h2>;
  }

  if (!portfolio) {
    return <h2>Portfolio Not Found</h2>;
  }

  switch (portfolio.template) {
    case "creative":
      return <CreativeTemplate portfolio={portfolio} />;

    case "glass":
      return <GlassTemplate portfolio={portfolio} />;

    case "developer":
      return <DeveloperTemplate portfolio={portfolio} />;

    case "modern":
    default:
      return <ModernTemplate portfolio={portfolio} />;
  }
}

export default PortfolioPage;