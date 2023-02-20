import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'gray',
  },
  footingStyle: {
    fontSize: '2rem',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>Footer</h1>
    </header>
  );
}

export default Footer;