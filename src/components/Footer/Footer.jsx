import React from 'react';
import styles from './Footer.module.css';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const usefulLinks = [
    { name: 'Malawi Government', url: 'https://www.malawi.gov.mw' },
    { name: 'Office of the Ombudsman', url: 'https://ombudsmanmalawi.org/' },
    { name: 'Malawi Legal Aid Bureau', url: 'https://legalaidbureau.org/' },
    { name: 'Ministry of Justice', url: 'https://justice.gov.mw/' },
    { name: 'Malawi Law Commission', url: 'https://www.linkedin.com/company/the-law-commission/' },
    { name: 'The Malawi Parliament', url: 'http://www.parliament.gov.mw/' },
    { name: 'The Anti-Corruption Bureau (ACB)', url: 'http://www.acbmw.org/' },
    { name: 'Malawi Law Society', url: 'https://malawilawsociety.net/' },
    { name: 'Malawi Judiciary', url: 'https://judiciary.mw/' },
    { name: 'Ministry of Information', url: 'https://www.malawi.gov.mw/' },
  ];

  const quickLinks = [
    'About the Ministry',
    'Services',
    'Latest News',
    'Top Management',
    'Ministry`s Service Charter',
    'Photo Gallery',
    'Ministry` Organizational Structure',
    'Video gallery',
    'About the Minister',
    'Vacancies',
    'Speeches'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Useful Links</h3>
            <ul className={styles.linksList}>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className={styles.footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPinIcon className={styles.contactIcon} />
                <p>
                  The Principal Secretary<br />
                  Ministry of Homeland Security<br />
                  Private Bag 31054<br />
                  Capital Hill Floor No:2<br />
                  Lilongwe 3<br />
                  Malawi
                </p>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} />
                <p>Tel: +265 1 772 745</p>
              </div>
              <div className={styles.contactItem}>
                <EnvelopeIcon className={styles.contactIcon} />
                <p>Email: principal.secretary@homeland.gov.mw</p>
              </div>
              <div className={styles.contactItem}>
                <GlobeAltIcon className={styles.contactIcon} />
                <p>
                  <a href="http://www.homeland.gov.mw" className={styles.footerLink}>
                    www.homeland.gov.mw
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Location</h3>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0457362777387!2d33.78333!3d-13.96667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921129817a0f0f7%3A0x6e1c6e7f5f6a6a6a!2sCapital%20Hill%2C%20Lilongwe%2C%20Malawi!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Ministry of Homeland Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 