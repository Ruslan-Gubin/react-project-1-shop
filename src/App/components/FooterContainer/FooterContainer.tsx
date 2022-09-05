import React from "react";
import FooterIcons from "./FooterIcons/FooterIcons";
import FooterMenu from "./FooterMenu/FooterMenu";

const FooterContainer = () => {
  return (
    <div className="footer">
      <FooterIcons />
      <FooterMenu />
      <p>@2022 Online Shop || RGS</p>
    </div>
  );
};

export default FooterContainer;
