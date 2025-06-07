import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  WrenchIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon as UsersIcon,
  FireIcon,
  LockClosedIcon,
  GlobeAltIcon,
  ScaleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "./style/home.module.css";
import ministerImage from "../assets/zikhale.jpg";
import sealImage from "../assets/seal.png";
import capitolHillImage from "../assets/capitolhill.jpg";
import Footer from "../components/Footer/Footer";
import WebsiteModal from "../components/WebsiteModal/WebsiteModal";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Departments from "../components/Departments/Departments";
import ContactUs from "../components/ContactUs/ContactUs";
import policeGroupImage from "../assets/policegroup.jpg";
import stock1Image from "../assets/stock1.png";
import mbcLogo from "../assets/mbc-logo.png";
import interpolLogo from "../assets/interpol.png";
import judiciaryLogo from "../assets/judiciarylogo.png";
import lawCommissionLogo from "../assets/lawcommissionlogo.png";
import malawiLawSocietyLogo from "../assets/malawilawsociety.jpg";
import mhrcLogo from "../assets/mhrclogo.png";
import acbLogo from "../assets/acblogo.png";

const Home = () => {
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navItems = [
    { title: "Home", icon: HomeIcon, action: () => {window.location.href = "/"} },
    { title: "About Us", icon: UserGroupIcon, action: () => setShowAboutUs(true) },
    { title: "Departments", icon: BuildingOfficeIcon, action: () => setShowDepartments(true) },
    { title: "Services", icon: WrenchIcon, action: () => setShowServices(true) },
    { title: "Resource Centre", icon: DocumentTextIcon, action: () => {} },
    { title: "Boma-mail", icon: EnvelopeIcon, action: () => {} },
    { title: "Contact Us", icon: PhoneIcon, action: () => setShowContactUs(true) },
  ];

  const agencies = [
    {
      title: "Malawi Police Service",
      icon: ShieldCheckIcon,
      description: "The primary law enforcement agency established under section 152 of the Constitution, responsible for maintaining law and order, protecting life and property, and enforcing laws across Malawi.",
      website: "https://www.police.gov.mw/"
    },
    {
      title: "National Registration Bureau (NRB)",
      icon: UserGroupIcon,
      description: "Implements and manages the National Registration and Identification System (NRIS), providing civil registration and identification services for all Malawians and resident foreigners to support sustainable development.",
      website: "https://www.nrb.gov.mw/"
    },
    {
      title: "Malawi Prison Service",
      icon: LockClosedIcon,
      description: "Established in 1956, responsible for the safe custody and rehabilitation of offenders through modern correctional approaches and professional prison management across multiple facilities nationwide.",
      website: "/404"
    },
    {
      title: "Immigration Department",
      icon: GlobeAltIcon,
      description: "Controls and manages migration through border security, visa processing, and citizenship services, ensuring national security while facilitating legal movement of people.",
      website: "/404"
    },
    {
      title: "Department of Refugees",
      icon: UsersIcon,
      description: "Manages refugee programs and provides protection services to asylum seekers and refugees in Malawi, ensuring their rights and well-being are protected.",
      website: "/404"
    },
    {
      title: "Malawi Fire and Rescue Services",
      icon: FireIcon,
      description: "Provides essential emergency response, fire fighting, and rescue services throughout Malawi, protecting communities and infrastructure from fire and other disasters.",
      website: "/404"
    },
  ];

  const slides = [
    {
      image: capitolHillImage,
      title: "Securing Malawi's Future",
      quote: "Dedicated to maintaining peace, security, and prosperity for all Malawians through innovative solutions and unwavering commitment.",
    },
    {
      image: policeGroupImage,
      title: "Protecting Our Communities",
      quote: "Together we stand united in our mission to serve and protect every citizen, ensuring a safer tomorrow for generations to come.",
    },
    {
      image: stock1Image,
      title: "Building Trust & Excellence",
      quote: "Through professionalism, integrity, and dedication, we strive to be the cornerstone of national security and public safety.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWebsiteClick = (e, agency) => {
    e.preventDefault();
    setSelectedAgency(agency);
  };

  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={sealImage}
            alt="Ministry Seal"
            className={styles.seal}
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          />
          <div className={styles.logo}>
            Ministry of Homeland Security
          </div>
        </motion.div>
        <div className={styles.navLinks}>
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className={styles.navLink}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                item.action();
              }}
              whileHover={{ scale: 1.05 }}
            >
              {item.title}
            </motion.a>
          ))}
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroSlider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.slide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div 
                className={styles.slideBackground}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              />
              <div className={styles.slideContent}>
                <motion.h1
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className={styles.heroQuote}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slides[currentSlide].quote}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.slideIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  currentSlide === index ? styles.activeIndicator : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className={styles.minister}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.ministerImage}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={ministerImage} alt="Minister Ken Zikhale Ng'oma" />
        </motion.div>
        <motion.div
          className={styles.ministerContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className={styles.ministerTitle}>Minister of Homeland Security</span>
          <h2 className={styles.ministerName}>Hon. Ken Zikhale Ng'oma</h2>
          <p className={styles.ministerDescription}>
            Leading Malawi's homeland security initiatives with dedication and vision,
            Hon. Ken Zikhale Ng'oma brings extensive experience and commitment to
            ensuring the safety and security of our nation.
          </p>
          <blockquote className={styles.ministerQuote}>
            "Committed to building a safer and more secure Malawi for all citizens,
            through innovation, collaboration, and unwavering dedication to public service."
          </blockquote>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.about}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.aboutTitle}>About The Ministry</h2>
            <div className={styles.aboutDescription}>
              <p>
                The Ministry of Homeland Security plays a crucial role in the provision
                of advisory services on specific and general matters of concern in the
                area of security to other ministries, departments and the general public.
              </p>
              <p style={{ marginTop: '1rem' }}>
                These are reflected in our Vision and Mission statements and our
                Corporate Objectives at ministry-level. The Ministry is composed of the
                Ministry Headquarters, Malawi Police Service, Malawi Prisons Service,
                Immigration Department, and Department of Refugees.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The Ministry's mandate is derived from Constitutional Provisions, Acts
                and Government Policies related to the machinery of public service
                administration.
              </p>
            </div>
            <div className={styles.objectives}>
              <h3 className={styles.objectivesTitle}>Corporate Objectives</h3>
              <ul className={styles.objectivesList}>
                <li className={styles.objectiveItem}>
                  To provide internal security policy, strategic and management direction
                </li>
                <li className={styles.objectiveItem}>
                  To reduce crime and fear of crime and maintain public safety and order
                  in an efficient and accountable manner
                </li>
                <li className={styles.objectiveItem}>
                  To execute the sentences of courts and ensure safe, humane custody
                  and rehabilitation of offenders
                </li>
                <li className={styles.objectiveItem}>
                  To provide sound migration management and achieve timely issuance of
                  relevant documents to eligible persons for national security and
                  social-economic development
                </li>
                <li className={styles.objectiveItem}>
                  To manage refugee programs in Malawi
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={capitolHillImage} alt="Capitol Hill - Ministry Headquarters" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.agencies}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.agenciesContent}>
          <motion.div
            className={styles.agenciesHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.agenciesTitle}>Our Agencies</h2>
            <p className={styles.agenciesSubtitle}>
              Established in 1964, the Ministry oversees multiple specialized agencies
              working together to ensure national security and public safety.
            </p>
          </motion.div>

          <motion.div
            className={styles.agenciesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {agencies.map((agency, index) => (
              <motion.div
                key={index}
                className={styles.agencyCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <agency.icon className={styles.agencyIcon} />
                <h3 className={styles.agencyTitle}>{agency.title}</h3>
                <p className={styles.agencyDescription}>{agency.description}</p>
                <motion.button
                  onClick={(e) => handleWebsiteClick(e, agency)}
                  className={styles.agencyButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={fadeIn}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.iconWrapper}>
              <item.icon className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>
              Explore our {item.title.toLowerCase()} section to learn more about our
              services and initiatives for a safer Malawi.
            </p>
          </motion.div>
        ))}
      </motion.div>

      <WebsiteModal
        isOpen={!!selectedAgency}
        onClose={() => setSelectedAgency(null)}
        website={selectedAgency?.website}
        title={selectedAgency?.title}
      />

      <AnimatePresence>
        {showAboutUs && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAboutUs(false)}
            />
            <motion.div
              className={styles.pageModal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3>About Us</h3>
                <button onClick={() => setShowAboutUs(false)} className={styles.modalCloseButton}>
                  <XMarkIcon className={styles.modalCloseIcon} />
                </button>
              </div>
              <div className={styles.modalContent}>
                <AboutUs />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showServices && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowServices(false)}
            />
            <motion.div
              className={styles.pageModal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3>Our Services</h3>
                <button onClick={() => setShowServices(false)} className={styles.modalCloseButton}>
                  <XMarkIcon className={styles.modalCloseIcon} />
                </button>
              </div>
              <div className={styles.modalContent}>
                <Services />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDepartments && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDepartments(false)}
            />
            <motion.div
              className={styles.pageModal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3>Our Departments</h3>
                <button onClick={() => setShowDepartments(false)} className={styles.modalCloseButton}>
                  <XMarkIcon className={styles.modalCloseIcon} />
                </button>
              </div>
              <div className={styles.modalContent}>
                <Departments />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContactUs && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactUs(false)}
            />
            <motion.div
              className={styles.pageModal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3>Contact Us</h3>
                <button onClick={() => setShowContactUs(false)} className={styles.modalCloseButton}>
                  <XMarkIcon className={styles.modalCloseIcon} />
                </button>
              </div>
              <div className={styles.modalContent}>
                <ContactUs />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.section 
        className={styles.partners}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.partnersContent}>
          <motion.div
            className={styles.partnersHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.partnersTitle}>Our Partners</h2>
            <p className={styles.partnersSubtitle}>
              Working together with key institutions to ensure safety, justice, and security for all Malawians
            </p>
          </motion.div>

          <motion.div
            className={styles.partnersGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              { 
                logo: mbcLogo, 
                name: "Malawi Broadcasting Corporation",
                website: "https://mbc.mw/"
              },
              { 
                logo: interpolLogo, 
                name: "INTERPOL Malawi",
                website: "https://www.interpol.int/en/Who-we-are/Member-countries/Africa/MALAWI"
              },
              { 
                logo: judiciaryLogo, 
                name: "Malawi Judiciary",
                website: "https://www.judiciary.mw/"
              },
              { 
                logo: lawCommissionLogo, 
                name: "Malawi Law Commission",
                website: "#"
              },
              { 
                logo: malawiLawSocietyLogo, 
                name: "Malawi Law Society",
                website: "https://malawilawsociety.net/"
              },
              { 
                logo: mhrcLogo, 
                name: "Malawi Human Rights Commission",
                website: "https://mhrcmw.org/"
              },
              { 
                logo: acbLogo, 
                name: "Anti-Corruption Bureau",
                website: "#"
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className={styles.partnerLogo}
                onClick={() => partner.website !== "#" && setSelectedPartner(partner)}
                style={{ cursor: partner.website !== "#" ? "pointer" : "default" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <img src={partner.logo} alt={partner.name} title={partner.name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <WebsiteModal
        isOpen={!!selectedPartner}
        onClose={() => setSelectedPartner(null)}
        website={selectedPartner?.website}
        title={selectedPartner?.name}
      />

      <Footer />
    </div>
  );
};

export default Home;