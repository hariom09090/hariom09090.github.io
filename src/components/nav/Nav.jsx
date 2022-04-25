import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <HomeOutlinedIcon fontSize='large' />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <PersonOutlineSharpIcon fontSize='large' />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <WorkOutlineOutlinedIcon fontSize='large' />
      </a>
      <a
        href='#skill'
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}>
        <AssignmentOutlinedIcon fontSize='large' />
      </a>
      <a
        href='#education'
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}>
        <SchoolOutlinedIcon fontSize='large' />
      </a>
      {/* <a href='#contact'>
        <PermContactCalendarOutlinedIcon fontSize='large' />
      </a> */}
    </nav>
  );
};

export default Nav;
