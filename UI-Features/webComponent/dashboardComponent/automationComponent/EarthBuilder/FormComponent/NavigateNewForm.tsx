import styles from "@/styles/devOps/Desktop.module.css";
import { useState } from "react";
import NewSubmit from "./NewSubmit";
import Link from "next/link";
import { createHmac } from 'crypto';

const cancerStages: Record<string, string[]> = {
  "Lung Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Breast Cancer": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Pancreatic Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Brain Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Blood Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Liver Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Ovarian Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Colorectal Cancer": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Unknown": ["Unknown"]
};

const communicationMethods = [
  "WhatsApp",
  "Instagram",
  "Facebook",
  "Email",
  "LinkedIn",
  "Phone Call",
  "Text Message",
  "Telegram",
  "Snapchat",
  "Tiktok"
];

const countryCodes = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Antigua", code: "+1-268" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1-246" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cabo Verde", code: "+238" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "CAF", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo", code: "+242" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czechia", code: "+420" },
  { name: "DRC", code: "+243" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad & Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+39-06" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zimbabwe", code: "+263" }
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "CAF",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "DRC",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome ",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "UAE",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

const meetingTypes = ["Phone Call", "Video Call", "One-on-One Meeting"];


export default function ManagerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [houseofGrace, sethouseofGraceFolder] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedCancer, setSelectedCancer] = useState<string>("");
  const [stages, setStages] = useState<string[]>([]);
  const [communication, setCommunication] = useState<string>("");
  const [contactValue, setContactValue] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [meetingType, setMeetingType] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [newError, setNewError] = useState<{ [key: string]: string }>({});
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    countryDialCode: '',
    phoneNumber: '',
    scheduledDate: '',
    cancerType: '',
    cancerStage: '',
    sharedConcern: '',
    communicationMethod: '',
    communicationChannel: '',
  });


  const handleCancerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cancerType = e.target.value;
    setSelectedCancer(cancerType);
    setStages(cancerStages[cancerType] || []);
  };

  const handleCommunicationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCommunication(e.target.value);
    setContactValue("");
  };

  const handleMeetingTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMeetingType(e.target.value);
  };


  const validateForm = () => {

    let newErrors: { [key: string]: string } = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required!";
    if (!formData.countryDialCode) newErrors.phone = "Country dial code is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required!";
    if (!formData.emailAddress) newErrors.emailAddress = "Email Address is required!";
    if (!formData.scheduledDate) newErrors.scheduledDate = "Scheduled Date is required!";
    if (!formData.cancerType) newErrors.cancerType = "Cancer Type is required!";
    if (!formData.cancerStage) newErrors.cancerStage = "Cancer Stage is required";
    if (!formData.sharedConcern) newErrors.cancerStage = "Shared Concern is required";
    if (!formData.communicationChannel) newErrors.communicationChannel = "Communication Channel is required";
    if (!formData.communicationMethod) newErrors.communicationMethod = "Communication Method is required"


    setNewError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOptionUpload = async () => {

    if (!validateForm()) {
      alert('Please Fill in all Required Fields');
      return;
    }

    setUploading(true);

    const { fullName, emailAddress, countryDialCode, phoneNumber, scheduledDate, cancerType, cancerStage, sharedConcern, communicationMethod, communicationChannel } = formData;

    //Using the Secrey KeyPhrase as a Salt for the Hash to ensure it is unique
    const secretKey = process.env.NEXT_PUBLIC_HMAC_SECRET_KEY || "default_secret";

    //Generate a HMAC Key based on input
    const hmac = createHmac('sha256', secretKey);
    hmac.update(`${fullName}:${emailAddress}:${phoneNumber}`);
    const encryptedKey = hmac.digest('hex');

    console.log('Generated HMAC Key: ', encryptedKey)

    //Creating the Data the Input
    const payLoad = {
      fullName,
      emailAddress,
      countryDialCode,
      phoneNumber,
      scheduledDate,
      cancerType,
      cancerStage,
      sharedConcern,
      communicationMethod,
      communicationChannel,
      encryptedKey,
    };

    console.log('The CW Data Structure: ', payLoad)

    try {
      const response = await fetch('/api/emotionalWellnessReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      });

      const data = await response.json();
      console.log('Registration Response: ', data);

      if (data.success) {
        alert('Registration Successful');
      }

      else {
        console.error('Registration Failed: ', data.error)
      }
    }
    catch (error) {
      console.error('Upload Error: ', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
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
            <label className={styles.ManagerPasswordTitle}>Full Name</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="fullName"
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
              type="text"
              aria-label="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              placeholder="Example: name@gmail.com"
            />
            {newError.emailAddress && <p className={styles.ErrorMessage}>{newError.emailAddress}</p>}
          </article>
          {/* Share your Concern */}
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Share Concern</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="shareConcern"
              name="shareConcern"
              value={formData.sharedConcern}
              onChange={(e) => setFormData({ ...formData, sharedConcern: e.target.value })}
              placeholder="Kindly discuss your concern"
            />
            {newError.sharedConcern && <p className={styles.ErrorMessage}>{newError.sharedConcern}</p>}
          </article>
          {newError.cancerStage && <p className={`${styles['ErrorMessage']} ${styles['ManagerPasswordGrid']}`}>{newError.cancerStage}</p>}
         
          {/* Dynamic Field for One-on-One Meeting Location */}

          <NewSubmit handleUpload={handleOptionUpload} uploading={uploading} />

        </form>
      </div>
    </>
  );
}
