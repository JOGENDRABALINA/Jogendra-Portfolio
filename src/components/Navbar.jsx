import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ backgroundColor: "" }}
      className={`${styles.paddingX
        } w-full flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

        </Link>

        <div style={{ marginTop: 20 }} className=''>
          <div
          //   className={`top2 ${"text-secondary"
          //   } hover:text-white text-[15px] font-medium cursor-pointer`}
          >
            <a style={{ padding: "13px", backgroundColor: "whitesmoke", height: 20, width: "100px", borderRadius: "15px", textDecoration: "none", color: "black", fontSize: "18px", fontWeight: 600, boxShadow: "0px 0px 10px 1px grey" }} href="https://drive.google.com/file/d/1wv9LtDl5YfRvPFQeXd_zD-COmHjXPytm/view?usp=sharing" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar