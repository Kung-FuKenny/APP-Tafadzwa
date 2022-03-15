import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title-2" data-aos="fade-up">
        <BsFillBookmarkStarFill color="#4b4586" size={30} />
        
          <h2>What Do We Do?</h2>
          <p className="u-text-small">
              Strategy Development, Implementation and Integration Strategy
              is the scope of an organisation over the long-term:
              which achieves advantage for the organisation through its configuration of resources to fulfil stakeholder expectations.
          </p>

          <h2>Our Values</h2>
              <p>
                  Our Values are to consistently deliver the best quality service,
                  working in partnership with our clients and developing sustainable
                  value-adding long-term relationships through integrity and professionalism.
              </p>

          <h2>Our Value Proposition</h2>
             <p>
                Our services weave into each other to create a total robust solution, from assisting
                organisations in developing their organizational strategies, operational, unit and 
                departmental strategies to ensuring the timely Implementation of those strategies.
                Internal audit assures that business processes have all controls needed, and
                are working effectively. Internal audit will also identify risks associated with these processes. In
                additional it will identify risks associated with operations, employees, legislation compliance and
                governance. The risk management processes will enable quantification of risks, identification of
                risk owners, creation of sub-tasks to mitigate the risks and identification of risk mitigation
                strategies.
             </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
