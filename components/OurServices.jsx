import React from "react";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="our-services-block">
          <h2 className="our-services-title">Our Services</h2>

          <ul className="our-services-list">
            <li className="our-services-item">
              <h3 className="our-services-item-title">Design</h3>

              <ul className="our-services-item-description">
                <li className="our-services-item-description-text">
                  Innovative Design: We create modern and creative designs that
                  help your application stand out in a competitive environment
                  and attract user attention.
                </li>
                <li className="our-services-item-description-text">
                  User-Centric Expertise: Our designers aim for maximum user
                  satisfaction, crafting interfaces that are intuitive and
                  user-friendly.
                </li>
              </ul>
            </li>
            <li className="our-services-item">
              <h3 className="our-services-item-title">Development</h3>
              <ul className="our-services-item-description">
                <li className="our-services-item-description-text">
                  Technical Expertise: Our development team possesses high-level
                  technical skills, ready to implement the most complex ideas
                  for your applications.
                </li>
                <li className="our-services-item-description-text">
                  Flexible Approach: We use agile development methodologies,
                  allowing us to adapt quickly to changes and deliver the best
                  solutions to clients.
                </li>
              </ul>
            </li>
            <li className="our-services-item">
              <h3 className="our-services-item-title">Support</h3>
              <ul className="our-services-item-description">
                <li className="our-services-item-description-text">
                  24/7 Support Service: Our support team is available around the
                  clock, ready to address technical issues and ensure the stable
                  operation of your application.
                </li>
                <li className="our-services-item-description-text">
                  Updates and Enhancements: We regularly provide updates and
                  enhancements to applications, staying abreast of industry
                  trends and incorporating new features.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
