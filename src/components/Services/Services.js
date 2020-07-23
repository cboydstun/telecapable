import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './Services.css';

const ServicesOffered = [
  {
    title: 'Leadership Development',
    description:
      'Problem solving sessions with consultants where client problems and challenges are presented, solutions developed, and implementation programs created by tapping into the collective knowledge and experience of our team.',
    icon: 'icon-screen-smartphone'
  },
  {
    title: 'Employee Training',
    description:
      'Our Employee Training Exercises are highly-customizable, hands-on, real world training on Accountability Principles. Our clients are put in relevant, challenging, and unfamiliar situations that bring to purpose to working remotely from home.',
    icon: 'icon-pencil'
  },
  {
    title: 'Workshops',
    description:
      'Workshops vary greatly based on client objectives, duration, number of attendees, and type of engagement. We work with each client to build a program tailored to their needs, identifying the key concepts and principles for each specific group of attendees.',
    icon: 'icon-like'
  },
  {
    title: 'Technology',
    description:
      'Deep dive into technological components that control the behaviors and results of your best leaders and their teams. Test your organizational ability and develop solutions to cover and overcome common remote business challenges.',
    icon: 'icon-cloud-download'
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h2 className="mb-5">What We Offer</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="row-item col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
        <br />
        <a className="btn btn-xl btn-light" href="#contact">
          Get In Touch
        </a>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;