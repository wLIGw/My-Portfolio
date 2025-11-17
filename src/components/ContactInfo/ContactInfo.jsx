import React from "react";
import styles from "./style.module.scss";
import contactsData from "../../data/contacts.json";
import { useReveal } from "../../hooks/useReveal.js";

const ContactInfo = () => {
  const ref = useReveal();

  return (
    <div ref={ref} className={`${styles.contactBox} reveal-left`}>
      {contactsData.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          <img className={styles.icon} src={item.icon} alt={item.type} />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
