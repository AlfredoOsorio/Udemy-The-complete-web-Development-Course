import React from "react";

const currentDate = new Date();
var CURRENTYEAR = currentDate.getFullYear();

function Footer() {
  return <p>Footer: copyright message with a dynamically updated year</p>;
}

export default Footer;
