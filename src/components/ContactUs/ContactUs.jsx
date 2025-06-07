import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import styles from './ContactUs.module.css';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      details: [
        "+265 1 789 111",
        "+265 1 789 222"
      ]
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: [
        "info@homeland.gov.mw",
        "support@homeland.gov.mw"
      ]
    },
    {
      icon: MapPinIcon,
      title: "Address",
      details: [
        "Capital Hill",
        "Private Bag 331",
        "Lilongwe 3, Malawi"
      ]
    },
    {
      icon: ClockIcon,
      title: "Working Hours",
      details: [
        "Monday - Friday: 7:30 AM - 5:00 PM",
        "Saturday - Sunday: Closed"
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactContainer}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Contact Us</h1>
        <p>Get in Touch with the Ministry of Homeland Security</p>
      </motion.div>

      <div className={styles.contactContent}>
        <motion.section 
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contact Information</h2>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.iconWrapper}>
                  <info.icon className={styles.icon} />
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.contactForm}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.formWrapper}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter message subject"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows="5"
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>

        <motion.section 
          className={styles.map}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Location</h2>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2298839510744!2d33.78333931485943!3d-13.962999790193461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c844810e0f8dd5%3A0x7020a1d0fad8f9cd!2sCapital%20Hill%2C%20Lilongwe%2C%20Malawi!5e0!3m2!1sen!2s!4v1645783040760!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ministry Location"
            />
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs; 