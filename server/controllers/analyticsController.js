import Analytics from "../models/Analytics.js";

/**
 * Track Portfolio View
 */
export const trackPortfolioView = async (portfolioId, ip) => {
  try {
    // Find analytics document
    let analytics = await Analytics.findOne({
      portfolio: portfolioId,
    });

    // Create if it doesn't exist
    if (!analytics) {
      analytics = await Analytics.create({
        portfolio: portfolioId,
      });
    }

    // Increase total views
    analytics.totalViews += 1;

    // Update last viewed time
    analytics.lastViewed = new Date();

    // Check if this IP already visited
    const alreadyVisited = analytics.visitors.some(
      (visitor) => visitor.ip === ip
    );

    // Count unique visitor
    if (!alreadyVisited) {
      analytics.uniqueVisitors += 1;

      analytics.visitors.push({
        ip,
        viewedAt: new Date(),
      });
    }

    await analytics.save();

    return analytics;
  } catch (error) {
    console.error("Analytics Error:", error.message);
  }
};

/**
 * Get Analytics
 */
export const getAnalytics = async (req, res) => {
  try {
    const { portfolioId } = req.params;

    const analytics = await Analytics.findOne({
      portfolio: portfolioId,
    });

    if (!analytics) {
      return res.status(404).json({
        success: false,
        message: "Analytics not found.",
      });
    }

    res.status(200).json({
      success: true,
      analytics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};