import React, { useState, useEffect, useRef } from 'react';
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
import WebsiteModal from '../WebsiteModal/WebsiteModal';

// Helper to animate numbers
function useCountUp(target, inView, duration = 1200) {
  const [count, setCount] = useState(0);
  const raf = useRef();
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    let end = parseInt(target.replace(/[^\d]/g, ''));
    let startTime;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [target, inView, duration]);
  return count;
}

// Intersection observer hook
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

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

  const departmentDetails = [
    {
      name: "Malawi Police Service",
      title: "Malawi Police Service",
      content: (
        <div>
          <h2>Malawi Police Service</h2>
          <p>The Malawi Police Service (MPS) is the national law enforcement agency, responsible for maintaining law and order, preventing and investigating crime, and protecting life and property throughout Malawi. MPS operates under the Ministry of Homeland Security and is overseen by the Inspector General, supported by two deputies for administration and operations.</p>
          <h3>Key Functions</h3>
          <ul>
            <li>Crime prevention, investigation, and detection</li>
            <li>Apprehending and prosecuting offenders</li>
            <li>Maintaining public order and safety</li>
            <li>Protecting property, life, and individual rights</li>
            <li>Enforcing all laws and regulations in Malawi</li>
          </ul>
          <h3>Structure</h3>
          <ul>
            <li>National Police Headquarters</li>
            <li>Regional Headquarters</li>
            <li>Police Stations and specialized branches (e.g., Criminal Investigations, Road Safety, Community Policing, Marine Services, and more)</li>
          </ul>
          <h3>Recent Initiatives</h3>
          <ul>
            <li>Launch of revised Public Order Policy ahead of 2025 elections</li>
            <li>Development of a Gender Policy to promote fairness and safety</li>
            <li>Comprehensive training on electoral laws and management</li>
          </ul>
          <p>For emergencies, call toll-free on <b>997</b>. <a href="https://www.police.gov.mw/" target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>
      ),
    },
    {
      name: "Malawi Immigration Department",
      title: "Malawi Immigration Department",
      content: (
        <div>
          <h2>Malawi Immigration Department</h2>
          <p>The Malawi Immigration Department is responsible for regulating the movement of people into and out of Malawi, issuing travel documents, and enforcing immigration laws. It plays a crucial role in national security, border management, and the facilitation of legal migration.</p>
          <h3>Key Functions</h3>
          <ul>
            <li>Issuing passports, visas, and residence permits</li>
            <li>Border control and management</li>
            <li>Enforcing immigration laws and regulations</li>
            <li>Managing migration-related detention and deportation</li>
          </ul>
          <h3>Recent Developments</h3>
          <ul>
            <li>Implementation of digital services for travel documents</li>
            <li>Efforts to improve border security and streamline migration processes</li>
          </ul>
          <p>The department also works closely with international organizations to address issues such as human trafficking and irregular migration. <a href="https://www.globaldetentionproject.org/countries/africa/malawi" target="_blank" rel="noopener noreferrer">Read more</a></p>
        </div>
      ),
    },
    {
      name: "Malawi Prison Service",
      title: "Malawi Prison Service",
      content: (
        <div>
          <h2>Malawi Prison Service</h2>
          <p>The Malawi Prison Service is responsible for the custody, rehabilitation, and reintegration of offenders. It operates several prisons across the country, including Maula Prison in Lilongwe and Chichiri Prison in Blantyre.</p>
          <h3>Challenges</h3>
          <ul>
            <li>Severe overcrowding: Prisons often house far more inmates than their intended capacity (e.g., Maula Prison was built for 800 but has held over 2,600 inmates).</li>
            <li>Poor sanitation and outbreaks of disease (e.g., tuberculosis, hepatitis, malaria, HIV).</li>
            <li>Malnutrition and insufficient food, with inmates often receiving only one meal per day.</li>
            <li>Delays in case handling and limited access to bail and appeal.</li>
          </ul>
          <h3>Reform Efforts</h3>
          <ul>
            <li>Government initiatives to improve living conditions and reduce congestion</li>
            <li>Construction of additional cell blocks and review of the Prisons Act</li>
            <li>Support from international partners for health and rehabilitation programs</li>
          </ul>
          <p>Despite the challenges, the Malawi Prison Service is committed to upholding the rights of inmates and preparing them for life after prison. <a href="https://mashable.com/archive/malawis-prisons-overcrowded" target="_blank" rel="noopener noreferrer">Read more</a></p>
        </div>
      ),
    },
    {
      name: "National Registration Bureau",
      title: "National Registration Bureau",
      content: (
        <div>
          <h2>National Registration Bureau (NRB)</h2>
          <p>The National Registration Bureau is responsible for the registration of births, deaths, marriages, and the issuance of national identity cards in Malawi. It plays a vital role in ensuring every citizen has a legal identity and access to government services.</p>
          <h3>Key Services</h3>
          <ul>
            <li>Issuing national ID cards</li>
            <li>Registering vital events (births, deaths, marriages)</li>
            <li>Maintaining a secure and up-to-date national database</li>
          </ul>
          <h3>Digital Transformation</h3>
          <ul>
            <li>Online application and management of services</li>
            <li>Integration with other government agencies for efficient service delivery</li>
          </ul>
          <p>For more, visit the <a href="https://mbrs.gov.mw/" target="_blank" rel="noopener noreferrer">MBRS Portal</a>.</p>
        </div>
      ),
    },
    {
      name: "Refugee Department",
      title: "Refugee Department",
      content: (
        <div>
          <h2>Refugee Department</h2>
          <p>The Refugee Department in Malawi is responsible for the management and protection of refugees and asylum seekers. Malawi is home to thousands of refugees, primarily hosted at the Dzaleka Refugee Camp.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Registration and documentation of refugees and asylum seekers</li>
            <li>Coordination with international organizations (e.g., UNHCR, IOM) for protection and assistance</li>
            <li>Implementation of government policies on refugee encampment and relocation</li>
          </ul>
          <h3>Recent Issues</h3>
          <ul>
            <li>Forced relocations to Dzaleka Camp as part of the encampment policy</li>
            <li>Temporary detention of refugees during relocation</li>
            <li>Efforts to improve camp conditions and access to services</li>
          </ul>
          <p>Learn more about Malawi's refugee policy at the <a href="https://www.globaldetentionproject.org/countries/africa/malawi" target="_blank" rel="noopener noreferrer">Global Detention Project</a>.</p>
        </div>
      ),
    },
    {
      name: "Fire and Rescue Services",
      title: "Malawi Fire and Rescue Services",
      content: (
        <div>
          <h2>Malawi Fire and Rescue Services</h2>
          <p>Malawi Fire and Rescue Services is responsible for fire prevention, firefighting, and rescue operations across the country. The department also provides fire safety education, inspections, and emergency response training to the public and businesses.</p>
          <h3>Key Services</h3>
          <ul>
            <li>Firefighting and emergency rescue</li>
            <li>Fire safety inspections and risk assessments</li>
            <li>Public education and awareness campaigns</li>
            <li>Training in fire prevention and safety</li>
          </ul>
          <h3>Collaboration</h3>
          <ul>
            <li>Works with local authorities, businesses, and international partners to improve fire safety standards</li>
            <li>Promotes the use of modern fire-fighting equipment and techniques</li>
          </ul>
          <p>For more on fire safety and services, see <a href="https://kontekmw.com/" target="_blank" rel="noopener noreferrer">Kontek Safety Company</a>.</p>
        </div>
      ),
    },
  ];

  const [modalIndex, setModalIndex] = React.useState(null);
  const handleOpenModal = (idx) => setModalIndex(idx);
  const handleCloseModal = () => setModalIndex(null);

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
        {departments.map((dept, index) => {
          const cardRef = useRef();
          const inView = useInView(cardRef);
          return (
            <motion.div
              key={index}
              className={styles.departmentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              ref={cardRef}
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
                {Object.entries(dept.stats).map(([key, value], idx) => {
                  // Extract number and suffix
                  const match = value.match(/([\d,]+)/);
                  const number = match ? match[1].replace(/,/g, '') : '';
                  const suffix = match ? value.slice(match[0].length) : value;
                  const count = useCountUp(number, inView);
                  return (
                    <div key={idx} className={styles.statItem}>
                      <span className={styles.statValue}>
                        {match ? count.toLocaleString() + suffix : value}
                      </span>
                      <span className={styles.statLabel}>{key}</span>
                    </div>
                  );
                })}
              </div>

              <motion.button
                className={styles.learnMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpenModal(index)}
              >
                Learn More
              </motion.button>
            </motion.div>
          );
        })}
      </section>

      <WebsiteModal
        isOpen={modalIndex !== null}
        onClose={handleCloseModal}
        website={null}
        title={modalIndex !== null ? departmentDetails[modalIndex].title : ''}
      >
        {modalIndex !== null && departmentDetails[modalIndex].content}
      </WebsiteModal>

      <Footer />
    </div>
  );
};

export default Departments; 