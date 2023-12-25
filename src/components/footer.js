import React from 'react';

const Footer = () => {
  return (
    <footer className="tc-l bg-center cover bg-black">
      <div className="w-100 ph3 pv5 bg-black-80">
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://facebook.com" title="Facebook">
          <span className="f6 ml3 pr2">Facebook</span>
        </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://github.com" title="GitHub">
          <span className="f6 ml3 pr2">GitHub</span>
        </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://instagram.com" title="Instagram">
          <span className="f6 ml3 pr2">Instagram</span>
        </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://linkedin.com" title="LinkedIn">
          <span className="f6 ml3 pr2">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
