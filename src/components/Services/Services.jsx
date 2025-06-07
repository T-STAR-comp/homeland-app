import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  IdentificationIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import styles from './Services.module.css';
import Footer from '../Footer/Footer';

const Services = () => {
  const services = [
    {
      title: "Law Enforcement",
      icon: ShieldCheckIcon,
      description: "Professional policing services ensuring public safety and order across Malawi.",
      features: [
        "Criminal investigations",
        "Community policing",
        "Traffic management",
        "Emergency response"
      ]
    },
    {
      title: "National Registration",
      icon: IdentificationIcon,
      description: "Comprehensive civil registration and identification services for citizens.",
      features: [
        "National ID issuance",
        "Birth registration",
        "Death registration",
        "Data management"
      ]
    },
    {
      title: "Immigration Services",
      icon: GlobeAltIcon,
      description: "Border control and immigration management services.",
      features: [
        "Visa processing",
        "Passport issuance",
        "Border security",
        "Citizenship services"
      ]
    },
    {
      title: "Correctional Services",
      icon: DocumentCheckIcon,
      description: "Modern correctional facilities focused on rehabilitation and reform.",
      features: [
        "Inmate rehabilitation",
        "Skills development",
        "Correctional education",
        "Reintegration programs"
      ]
    },
    {
      title: "Refugee Services",
      icon: UserGroupIcon,
      description: "Support and protection services for refugees and asylum seekers.",
      features: [
        "Asylum processing",
        "Refugee camp management",
        "Integration support",
        "Protection services"
      ]
    },
    {
      title: "Emergency Services",
      icon: FireIcon,
      description: "Rapid response fire and rescue services protecting communities.",
      features: [
        "Fire fighting",
        "Rescue operations",
        "Disaster response",
        "Safety training"
      ]
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Services</h1>
        <p>Comprehensive Security and Public Safety Services</p>
      </motion.div>

      <motion.section 
        className={styles.servicesGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <service.icon className={styles.icon} />
            </div>
            <h2>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.features}>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <motion.button
              className={styles.learnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        className={styles.contact}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.contactContent}>
          <h2>Need Assistance?</h2>
          <p>Our dedicated team is here to help you with any inquiries about our services.</p>
          <motion.button
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Services; 