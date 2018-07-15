import React from 'react';

import './footer.scss';

const FooterComponent: React.SFC = () => (
  <div className="footer">
    <p className="footer-paragraph">
      Created by
      <span className="footer-text-handwritten">Kamil Bysiec</span> from
    </p>
    <a
      href="https://agileplayers.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://agileplayers.com/Static/dist/img/logo_full.svg"
        alt="agile players logo"
        className="footer-link-logo"
      />
    </a>
  </div>
);

export default FooterComponent;
