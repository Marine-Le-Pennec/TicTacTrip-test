import React from "react";

// Import Logo
import logo from "../Assets/Logo_Tictactrip.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="tictactrip" />
      <h1>Trouvez la destination idéale avec Tictactrip!</h1>
    </div>
  );
};

export default Header;
