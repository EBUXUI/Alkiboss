import styles from "@/styles/devOps/Desktop.module.css";
import { useState } from "react";
import NewSubmit from "./NewSubmit";
import Link from "next/link";
import {createHmac} from 'crypto';

export default function BloodCancerNavigateNewFormLogin() {
  const [uploading, setUploading] = useState(false);
  const [newError, setNewError] = useState<{ [key: string]: string }>({});
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    emailAddress: ''
  });

  const validateForm = () => {

    let newErrors: { [key: string]: string } = {};
    if(!formData.emailAddress) newErrors.emailAddress = "Email Address is required!";

    setNewError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOptionUpload = async () => {

    if (!validateForm()) {
      alert('Kindly Enter your Login Email Address.');
      return;
    }

    setUploading(true);

    const {emailAddress} = formData;

    //Using the Secrey KeyPhrase as a Salt for the Hash to ensure it is unique
    const secretKey = process.env.NEXT_PUBLIC_HMAC_SECRET_KEY || "default_secret";

    //Generate a HMAC Key based on input
    const hmac = createHmac('sha256', secretKey);
    hmac.update(`${emailAddress}`);
    const encryptedKey = hmac.digest('hex');

    console.log('Generated HMAC Key: ', encryptedKey)

    //Creating the Data the Input
    const payLoad = {
      emailAddress
    };

    console.log('The CW Data Structure: ', payLoad)

    try{
      const response = await fetch('/api/emotionalWellnessReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      });

      const data = await response.json();
      console.log('Registration Response: ', data);

      if (data.success){
        alert('Registration Successful');
      }

      else{
        console.error('Registration Failed: ', data.error)
      }
    }
    catch(error){
      console.error('Upload Error: ', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(validateForm()) {
      handleOptionUpload(); // Call Upload Immediately After Validation.
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  }
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form onSubmit={handleSubmit} className={styles.CloudinaryLoginForm}>
        <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Email Address</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              placeholder="Example: name@gmail.com"
            />
            {newError.emailAddress && <p className={styles.ErrorMessage}>{newError.emailAddress}</p>}
          </article>

          <NewSubmit handleUpload={handleOptionUpload} uploading={uploading} />
      
        </form>
      </div>
    </>
  );
}
