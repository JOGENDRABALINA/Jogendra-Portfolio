import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    style={{ backgroundColor: "black", boxShadow: "0px 0px 10px 1px lightgrey", fontSize: "18px", fontWeight: "500" }}
    variants={fadeIn("  ", "spring", index * 0.5, 0.75)}
    className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
    whileHover={{ y: -50 }}
    whileTap={{ y: 0 }}
  >
    <div className='mt-7 flex flex-col justify-between items-center gap-1'>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        width="80" height="80"
        className='' style={{ borderRadius: "100px" }}
      />
      <div className='mt-3 flex-1 flex flex-col'>
        <p style={{ fontWeight: 500 }} className='text-center text-white font-medium text-[18px]'>
          <span className='text-center blue-text-gradient'>{name}</span>
        </p>
        <p className='text-center mt-1 text-secondary text-[16px]'>
          {year}
        </p>
      </div>
    </div>

    <p style={{ marginTop: "50px" }} className='text-white font-black text-[48px]'>   </p>

    <div className='mt-1'>
      <p className='text-center text-white tracking-wider text-[18px]'>{degree}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branch}</p>
      <p className='mt-3 text-center green-text-gradient'>{marks}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} id="hello">
      <div style={{ backgroundColor: "black", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
        className={`bg-tertiary  ${styles.padding} min-h-[350px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education Details...</p>
          <h2 style={{ color: "skyblue" }} className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
