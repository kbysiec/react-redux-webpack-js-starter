import React from 'react';

import './footer.scss';

const FooterComponent = () => (
  <div className="footer">
    <p>
      Created by Kamil Bysiec from{' '}
      <a
        href="https://agileplayers.com"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agile Players
      </a>
    </p>
  </div>
);

export default FooterComponent;
