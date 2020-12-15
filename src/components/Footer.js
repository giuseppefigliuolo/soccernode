import React from "react";
import github from '../img/github.svg'
import linkedIn from '../img/linkedin.svg';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <div className="footer__img-container">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://github.com/giuseppefigliuolo"><img src={github} alt="" /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://it.linkedin.com/in/giuseppe-figliuolo-51103818a/en-us?trk=people-guest_people_search-card"><img src={linkedIn} alt="" /></motion.a>
      </div>
      <p>Created by <a href="https://it.linkedin.com/in/giuseppe-figliuolo-51103818a/en-us?trk=people-guest_people_search-card"><strong>Giuseppe Figliuolo</strong></a> using React</p>
      <p>If you want to find out more <a href="#"><strong>here</strong></a> is a link to the Github repo.</p>
      <p>Powered by football-data.org</p>
    </footer>
  );
};

export default Footer;
