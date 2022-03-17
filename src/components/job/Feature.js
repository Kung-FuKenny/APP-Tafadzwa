import React from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Feature.css";
//import { FaAccessibleIcon } from "react-icons/fa";
//import { BsHexagon } from "react-icons/bs";
const btnClick = () => {
  console.log('Im here')
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfkJ-2DkAv9Zzwr_iVxwmsCUS69o4ODacSn2SkjB-7LKKQh2Q/viewform')
}

const longText =
  "Purpose of the Job: To lead, co-ordinate and manage both internal and external corporate communications and stakeholder relations initiatives towards positioning the Umgeni Water brand as a leading water utility in the industry and broader society. To facilitate and initiate stakeholder engagements for the purpose of consolidating and establishing new relationships. Minimum Qualifications: Matric with Bachelor's Degree (NQF 7) in Journalism or Communications or Public Relations / Administration Management. Post graduate qualification in publishing, communication and design will be an added advantage. Minimum Experience: Minimum of 8 years' experience of which 5 years in a senior corporate or public sector stakeholder / communications, journalism role. (This level of skill and experience are required. Anything under 8 years may not be adequate). ";
  

const Feature = ({ applyNow, heading, text }) => {
  return (
      <div className="feature-text">
        <div className="read-more-read-less">
          <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText}
          </ReactReadMoreReadLess>
          </div>
      <div>
        <button btnClass={"btn-light"} onClick={btnClick.bind(this)} >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Feature;
