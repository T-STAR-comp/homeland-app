import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import styles from './WebsiteModal.module.css';

const WebsiteModal = ({ isOpen, onClose, website, title }) => {
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className={styles.header}>
              <h3>{title}</h3>
              <button onClick={onClose} className={styles.closeButton}>
                <XMarkIcon className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.content}>
              {iframeError ? (
                <div className={styles.fallback}>
                  <p>This website cannot be displayed in the preview.</p>
                  <p>Click the button below to visit the website directly.</p>
                  <motion.a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fallbackButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Open Website
                    <ArrowTopRightOnSquareIcon className={styles.externalIcon} />
                  </motion.a>
                </div>
              ) : (
                <iframe
                  src={website}
                  title={title}
                  className={styles.iframe}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  onError={handleIframeError}
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WebsiteModal; 