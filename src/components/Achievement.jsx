import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <div style={{borderRadius:"20px",boxShadow:"0px 0px 10px 3px gray",}}>
    <div style={{backgroundColor:"cyan"}} className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div  style={{backgroundColor:"cyan" }}
        className={`bg-tertiary rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <h3  className={""} style={{fontSize:"45px",fontWeight:"600",color:'brown',marginLeft:"-50px"}}>My Achievements...</h3>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievements.map((achievement ,index) => (
          <li key={achievement.id || index} className='text-white-100 text-[15px] pl-1' style={{fontSize:18,color:'black',fontWeight:"500"}} >{achievement.title}</li>
        ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "");