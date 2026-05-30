'use client';

import styles from "@/styles/devOps/Desktop.module.css";
import popupStyles from "@/styles/Popup/Home.module.css";   // ← For the popup only
import { useState } from "react";
import NewSubmit from "./NewSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function UserRegistration() {
  const [uploading, setUploading] = useState(false);
  const [newError, setNewError] = useState<{ [key: string]: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);   // ← Controls the popup

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
  });

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required!";
    if (!formData.emailAddress.trim()) newErrors.emailAddress = "Email Address is required!";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required!";
    setNewError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOptionUpload = async () => {
    if (!validateForm()) {
      alert("Please fill in all required fields");
      return;
    }

    setUploading(true);

    try {
      const response = await fetch('/api/Luvra/register-user', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          emailAddress: formData.emailAddress.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          keyPurpose: "Join the Foundation"
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessPopup(true);           // ← Trigger the styled popup
        setFormData({ fullName: "", emailAddress: "", phoneNumber: "" });
        setNewError({});
      } else {
        alert(data.error || "Registration Failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Registration Failed. Please check your connection.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOptionUpload();
  };

  return (
    <>
      {/* FORM - unchanged styling */}
      <div className={styles.ManagerLoginComponent}>
        <form onSubmit={handleSubmit} className={styles.CloudinaryLoginForm}>
          
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Full Name</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Example: Prandreas Vrentai"
            />
            {newError.fullName && <p className={styles.ErrorMessage}>{newError.fullName}</p>}
          </article>  

          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Email Address</label>
            <input
              className={styles.ManagerUsername}
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              placeholder="Example: name@gmail.com"
            />
            {newError.emailAddress && <p className={styles.ErrorMessage}>{newError.emailAddress}</p>}
          </article>

          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Phone Number</label>
            <input
              className={styles.ManagerUsername}
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="Example: +254 727 099 123"
            />
            {newError.phoneNumber && <p className={styles.ErrorMessage}>{newError.phoneNumber}</p>}
          </article>

          <NewSubmit handleUpload={handleOptionUpload} uploading={uploading} />
        </form>
      </div>

      {/* SUCCESS POPUP - Using EXACT same classNames as your e-commerce wishlist popup */}
      {showSuccessPopup && (
        <>
          <section className={popupStyles.BeautyProductDetails}>
            <div className={popupStyles.CloseProductDetails}>
              <div className={popupStyles.CloseProductNav}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={popupStyles.TheIcon}
                  onClick={() => setShowSuccessPopup(false)}
                />
                <h2
                  className={popupStyles.CloseProductII}
                  onClick={() => setShowSuccessPopup(false)}
                >
                  Registration Successful!
                  <br />
                  Login credentials sent to your email.
                </h2>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}