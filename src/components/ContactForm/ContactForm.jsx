import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useReveal } from "../../hooks/useReveal.js";
import styles from "./style.module.scss";
import { ThemeContext } from "../../Context/ThemeContext";

const ContactForm = () => {
  const ref = useReveal();

  const { theme } = useContext(ThemeContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState("");
  const [loading, setLoading] = useState(false);

  
  const inputStyle =
    theme === "light"
      ? {
          backgroundColor: "#ccd0da",
          color: "#1e2030",
        }
      : {
          backgroundColor: "#494d64",
          color: "#cad3f5",
        };

  
  const validateSmartEmail = (email) => {
    const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicRegex.test(email)) return false;

    const domain = email.split("@")[1];

    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "protonmail.com",
      "mail.ru",
      "yandex.ru",
    ];

    const gmailTypos = [
      "gmsail.com",
      "gmial.com",
      "gmal.com",
      "gmai.com",
      "gmail.con",
      "gmail.co",
      "gmail.cim",
      "gmail.comm",
      "gmail.om",
      "gmail.cm",
    ];

    if (gmailTypos.includes(domain)) return "gmail_typo";
    if (!validDomains.includes(domain)) return "unknown_domain";

    return true;
  };

  const handleChange = (e) => {
    setEmailStatus("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailCheck = validateSmartEmail(form.email);

    if (emailCheck === false) {
      setEmailStatus("error");
      toast.error("Invalid email format");
      return;
    }

    if (emailCheck === "gmail_typo") {
      setEmailStatus("error");
      toast.error("Did you mean @gmail.com?");
      return;
    }

    if (emailCheck === "unknown_domain") {
      setEmailStatus("error");
      toast.error("This email domain looks suspicious");
      return;
    }

    setEmailStatus("success");
    setLoading(true);

    emailjs
      .send(
        "service_k8nj3b9",
        "template_6wrycia",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Uwgzo5KGEBQPSn-qF"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setEmailStatus("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong: " + error.text);
        setLoading(false);
      });
  };

  return (
    <div ref={ref} className={`${styles.formBox} reveal-right`}>
      <h3 className={styles.title}>Send a Message</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className={
            emailStatus === "error"
              ? "inputError"
              : emailStatus === "success"
              ? "inputSuccess"
              : ""
          }
          style={inputStyle}
        />

        <label>Your Message</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
