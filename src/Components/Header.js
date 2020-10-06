import React from "react";

// Import Logo
import logo from "../Assets/Logo_Tictactrip.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="tictactrip" />
      <h1>
        Trouvez la destination idéale avec{" "}
        <span style={{ color: "#20E5AB" }}>Tictactrip</span>!
      </h1>
    </div>
  );
};

export default Header;
