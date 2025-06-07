import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  FireIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import styles from './Departments.module.css';
import Footer from '../Footer/Footer';
import policeGroupImage from '../../assets/policegroup.jpg';
import immigrationImage from '../../assets/immigration.jpg';
import prisonServiceImage from '../../assets/prisonservice.jpg';
import nrbImage from '../../assets/nrbhq.jpg';
import refugeeImage from '../../assets/refugee.jpg';
import fireRescueImage from '../../assets/fire&rescue.jpg';

const Departments = () => {
  const departments = [
    {
      name: "Malawi Police Service",
      icon: ShieldCheckIcon,
      image: policeGroupImage,
      description: "Maintaining law and order through professional policing services.",
      responsibilities: [
        "Crime prevention and investigation",
        "Traffic management and road safety",
        "Community policing initiatives",
        "Public order maintenance",
        "Emergency response services"
      ],
      stats: {
        established: "1921",
        personnel: "15,000+",
        stations: "34 major"
      }
    },
    {
      name: "Immigration Department",
      icon: GlobeAltIcon,
      image: immigrationImage,
      description: "Managing migration and border control services.",
      responsibilities: [
        "Border control and security",
        "Visa and permit processing",
        "Passport issuance",
        "Immigration law enforcement",
        "International cooperation"
      ],
      stats: {
        established: "1964",
        offices: "12 regional",
        borderPosts: "8 major"
      }
    },
    {
      name: "Prison Service",
      icon: BuildingOfficeIcon,
      image: prisonServiceImage,
      description: "Providing correctional and rehabilitation services.",
      responsibilities: [
        "Inmate custody and care",
        "Rehabilitation programs",
        "Skills development",
        "Prison security",
        "Reintegration services"
      ],
      stats: {
        established: "1945",
        facilities: "23",
        programs: "15+"
      }
    },
    {
      name: "National Registration Bureau",
      icon: DocumentTextIcon,
      image: nrbImage,
      description: "Managing national identification and civil registration.",
      responsibilities: [
        "National ID issuance",
        "Birth registration",
        "Death registration",
        "Marriage registration",
        "Data management"
      ],
      stats: {
        established: "2007",
        registrations: "9M+",
        centers: "28"
      }
    },
    {
      name: "Refugee Department",
      icon: UserGroupIcon,
      image: refugeeImage,
      description: "Providing support and protection for refugees and asylum seekers.",
      responsibilities: [
        "Asylum processing",
        "Refugee status determination",
        "Camp management",
        "Protection services",
        "Integration support"
      ],
      stats: {
        established: "1990",
        camps: "2 major",
        beneficiaries: "40,000+"
      }
    },
    {
      name: "Fire and Rescue Services",
      icon: FireIcon,
      image: fireRescueImage,
      description: "Emergency response and fire prevention services.",
      responsibilities: [
        "Fire fighting",
        "Rescue operations",
        "Fire prevention",
        "Safety inspections",
        "Emergency response"
      ],
      stats: {
        established: "1970",
        stations: "15",
        vehicles: "45+"
      }
    }
  ];

  return (
    <div className={styles.departmentsContainer}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Departments</h1>
        <p>Specialized Units Working Together for National Security</p>
      </motion.div>

      <motion.section 
        className={styles.overview}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <h2>Department Overview</h2>
          <p>The Ministry of Homeland Security operates through specialized departments, 
             each focused on specific aspects of national security and public safety. 
             Our departments work collaboratively to ensure comprehensive security services.</p>
        </div>
      </motion.section>

      <section className={styles.departmentsGrid}>
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className={styles.departmentCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={dept.image} alt={dept.name} />
            </div>
            
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <dept.icon className={styles.icon} />
              </div>
              <div className={styles.headerText}>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
              </div>
            </div>

            <div className={styles.responsibilities}>
              <h4>Key Responsibilities</h4>
              <ul>
                {dept.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className={styles.stats}>
              {Object.entries(dept.stats).map(([key, value], idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{key}</span>
                </div>
              ))}
            </div>

            <motion.button
              className={styles.learnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Departments; 