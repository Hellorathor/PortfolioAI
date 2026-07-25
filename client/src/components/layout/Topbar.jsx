import { FaBars } from "react-icons/fa";

import "../../assets/css/layout/topbar.css";

function Topbar({ setSidebarOpen }) {
  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      <h2 className="topbar-title">PortfolioAI</h2>
    </header>
  );
}

export default Topbar;