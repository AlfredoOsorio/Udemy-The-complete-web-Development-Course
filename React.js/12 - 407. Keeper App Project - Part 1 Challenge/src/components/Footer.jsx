import React from "react";

function Footer() {
  const currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  return (
    <footer>
      <p>Copyright - {currentYear}</p>
    </footer>
  );
}

export default Footer;
