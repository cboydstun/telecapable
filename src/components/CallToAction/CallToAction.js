import React from 'react';

import './CallToAction.css';

const CallToAction = () => (
  <section className="content-section bg-primary text-white" id="contact">
    <div className="container text-center">
      <h2 className="mb-4">
        Get in touch <em>today</em>!
      </h2>
      <p>Choose whichever option is best for you. =)</p>
      <br />
      <a href="mailto:admin@telecapable.com" className="btn btn-xl btn-light">
        Email
      </a>
      <br />
      <br />

      {/* <a href="" className="btn btn-xl btn-dark">
        Contact Form
      </a>
      <br />
      <br /> */}

      <a
        href="https://calendly.com/telecapable/15min"
        className="btn btn-xl btn-light"
      >
        Book a Free Consultation
      </a>
    </div>
  </section>
);

export default CallToAction;