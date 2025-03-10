import React from "react";

import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 style={{color:'skyblue'}} className={`${styles.sectionHeadText} text-center`}>
          Technical Skills
        </h2>
      </motion.div>
      <div className='my-skills'>
  {profiles.map((profile, index) => (
    <div key={profile.id || index} className="skill" data-aos="fade-up" data-aos-delay="200">
      <div className="icon-container">
        <a href={profile.link} target="_blank">
          <img src={profile.icon} alt="Skill Icon" />
        </a>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default SectionWrapper(Profile, "");