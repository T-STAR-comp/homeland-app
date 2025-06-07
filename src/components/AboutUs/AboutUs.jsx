import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import capitolHillImage from '../../assets/capitolhill.jpg';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p>Securing Malawi's Future Through Excellence and Innovation</p>
      </motion.div>

      <motion.section 
        className={styles.mission}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <h2>Our Mission</h2>
          <p>To provide comprehensive homeland security services through innovative solutions, 
             professional excellence, and unwavering commitment to protecting Malawi's citizens 
             and interests.</p>
        </div>
      </motion.section>

      <motion.section 
        className={styles.values}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>Maintaining the highest standards of professional and ethical conduct</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>Striving for superior performance and continuous improvement</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>Embracing new technologies and approaches to enhance security</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Collaboration</h3>
              <p>Working together with stakeholders for national security</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.history}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <div className={styles.historyText}>
            <h2>Our History</h2>
            <p>Since its establishment in 1964, the Ministry of Homeland Security has been at 
               the forefront of protecting Malawi's national interests and ensuring public safety. 
               Through decades of service, we have evolved and adapted to meet the changing 
               security needs of our nation.</p>
          </div>
          <div className={styles.historyImage}>
            <img src={capitolHillImage} alt="Capitol Hill - Historical View" />
          </div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.leadership}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <h2>Leadership Structure</h2>
          <div className={styles.leadershipGrid}>
            <div className={styles.leadershipCard}>
              <h3>Minister</h3>
              <p>Provides strategic direction and policy oversight</p>
            </div>
            <div className={styles.leadershipCard}>
              <h3>Principal Secretary</h3>
              <p>Manages administrative and operational functions</p>
            </div>
            <div className={styles.leadershipCard}>
              <h3>Directors</h3>
              <p>Lead specialized departments and initiatives</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutUs; 