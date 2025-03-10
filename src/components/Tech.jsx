import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`} style={{color:"skyblue"}}>
          Certifications
        </h2>
      </motion.div><br></br><br></br>
      <div className='flex flex-row flex-wrap justify-center gap-4'>
  {technologies.map((technology, index) => (
    <div style={{ height: '5rem', width: "5rem" }} key={`${technology.name}-${index}`}>
      <BallCanvas icon={technology.icon} />
    </div>
  ))}
</div>

    </>
  );
};

export default SectionWrapper(Tech, "");