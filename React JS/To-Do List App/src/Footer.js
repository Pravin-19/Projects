import React from 'react';


    const Footer = ({lengtH})=> {
    

  return (
  <footer>
    {lengtH} List {lengtH === 1 ? "Item" : "Items"}
  </footer>
  )
}

export default Footer;

// getFullYear ---==>method....