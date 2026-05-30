import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import NewSubmit from "@/UI-Features/webComponent/registrationComponent/NewSubmit";

const healthOption: Record<string, string[]> = {
  "Lung Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Breast Cancer": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Pancreatic Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Brain Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Blood Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Liver Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Ovarian Cancer": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Colorectal Cancer": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Visual Impairment": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Hearing Impairment": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Spinal Cord-Related": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Limb Amputation": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Cerebral Palsy": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Autism Spectrum": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Muscular Dystrophy": ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Dementia": ["Stage 0", "Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"],
  "Unknown": ["Unknown"]
};

const professionRole: Record<string, string[]> = {
  "Healthcare Practitioner": [
    "General Practitioner (GP)",
    "Pediatrician",
    "Surgeon",
    "Cardiologist",
    "Oncologist",
    "Dermatologist",
    "Anesthesiologist",
    "Ophthalmologist",
    "Psychiatrist",
    "Endocrinologist",
    "Unknown"
  ],
  "Healthcare Nurse": [
    "Registered Nurse",
    "Nurse Practitioner",
    "Midwife",
    "Paramedic",
    "Emergency Technician"
  ],
  "Healthcare Support": [
    "Medical Assistant",
    "Medical Scribe",
    "Medical Coder",
    "Medical Biller",
    "Information Manager",
    "Hospital Administrator"
  ],
  "Technology": [
    "Mechanical Engineer",
    "Electrical Engineer",
    "Software Engineer",
    "Civil Engineer",
    "Aerospace Engineer",
    "Automotive Engineer",
    "AI/ML Engineer",
    "Cybersecurity Analyst"
  ],
  "Science": [
    "Biologist",
    "Biochemist",
    "Geneticist",
    "Ecologist",
    "Epidemiologist",
    "Forensic Scientist",
    "Mathematician",
    "Data Scientist"
  ],
  "Finance": [
    "Investment Banker",
    "Financial Analyst",
    "Accountant",
    "Stockbroker",
    "Actuary",
    "Risk Manager"
  ],
  "Law": [
    "Lawyer",
    "Judge",
    "Paralegal",
    "Politician",
    "Diplomat",
    "Intelligence Analyst"
  ],
  "Education": [
    "School Teacher",
    "University Professor",
    "Tutor",
    "Special Teacher",
    "School Counselor"
  ],
  "Arts & Design": [
    "Graphic Designer",
    "Fashion Designer",
    "Interior Designer",
    "Animator",
    "Illustrator",
    "Photographer"
  ],
  "Skilled Labor": [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Mechanic",
    "Welder",
    "Blacksmith"
  ],
  "Hospitality": [
    "Chef",
    "Hotel Manager",
    "Event Planner",
    "Tour Guide",
    "Flight Attendant"
  ],
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
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      healthOptions: "",
      userName: "",
      currentProfession: "",
      professionalRole: "",
      dateofBirth: "",
      shareConcern: "",
      cancerStage: "",
      communicationMethod: "",
      countryDialCode: "",
      phoneNumber: "",
      socialHandle: "",
      appointmentDate: "",
      meetingType: "",
      countryName: ""
    });
  
    const validateForm = () => {
      let newErrors: { [key: string]: string } = {};
  
      if (!formData.firstName) newErrors.firstName = "First Name is required.";
      if (!formData.lastName) newErrors.lastName = "Last Name is required.";
      if (!formData.healthOptions) newErrors.healthOptions = "Type of Cancer is required.";
      if (!formData.currentProfession) newErrors.currentProfession = "Current Profession is required.";
      if (!formData.professionalRole) newErrors.professionalRole = "Professional Role is required.";
      if (!formData.shareConcern) newErrors.shareConcern = "Write at least 50 characters.";
      if (!formData.cancerStage) newErrors.cancerStage = "Please select stage a cancer.";
      if (!formData.communicationMethod) newErrors.communication = "Choose a communication method.";
      if (!formData.countryDialCode) newErrors.countryDialCode = "Country dial code is required.";
      if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
      if (!formData.socialHandle) newErrors.socialHandle = "Social handle is required.";
      if (!formData.appointmentDate) newErrors.appointmentDate = "Select an appointment date.";
      if (!formData.meetingType) newErrors.meetingType = "Choose a meeting type.";
      if (!formData.countryName) newErrors.countryName = "Please select a country.";
      
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const [Post, setPost] = useState(true)
    const [selectedCancer, setSelectedCancer] = useState<string>("");
    const [stages, setStages] = useState<string[]>([]);
    const [selectedProfession, setSelectedProfession] = useState<string>("");
    const [professionalRoles, setSelectedProfessionalRoles] = useState<string[]>([]);
    const [communication, setCommunication] = useState<string>("");
    const [contactValue, setContactValue] = useState<string>("");
    const [appointmentDate, setAppointmentDate] = useState<string>("");
    const [meetingType, setMeetingType] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showPopup, setShowPopup] = useState(false);
  
    const handleHealthOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const cancerType = e.target.value;
      setSelectedCancer(cancerType);
      setStages(healthOption[cancerType] || []);
    };

    const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const professionType = e.target.value;
      setSelectedProfession(professionType);
      setSelectedProfessionalRoles(professionRole[professionType] || []);
    };
  
    const handleCommunicationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCommunication(e.target.value);
      setContactValue("");
    };
  
    const handleMeetingTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMeetingType(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validateForm()) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 sec
      }
    };
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form onSubmit={handleSubmit} className={styles.ManagerLoginForm}>
        <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>First Name</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="Enter your First Name"
            />
             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Last Name</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Enter your Last Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Username</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="userName"
              name="userName"
              value={formData.userName}
              onChange={(e) => setFormData({...formData, userName: e.target.value})}
              placeholder="Enter your Username"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Profession</label>
            <select
              className={styles.ManagerUsername}
              aria-label="currentProfession"
              name="currentProfession"
              value={formData.currentProfession}
              onChange={(e) => {
                handleProfessionChange(e);
                setFormData({...formData, currentProfession: e.target.value})}
              }              
            >
              <option className={styles.optionTitle} value="">Select Current Profession</option>
              {
                Object.keys(professionRole).map((profession) => (
                  <option className={styles.optionTitle} key={profession} value={profession}>
                    {profession}
                  </option>
                ))
              }
              </select>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
          {selectedProfession && (
            <article className={styles.ManagerPasswordGrid}>
              <label className={styles.ManagerPasswordTitle}>Role</label>
              <select 
              className={styles.ManagerUsernameTest} 
              name="currentProfessionalRole" 
              aria-label="currentProfessionalRole"
              value={formData.professionalRole}
              onChange={(e) => setFormData({...formData, professionalRole: e.target.value})}
              >
                <option className={styles.optionTitle} value="">Select Professional Role</option>
                {professionalRoles.map((professionalRole) => (
                  <option className={styles.optionTitle} key={professionalRole} value={professionalRole}>
                    {professionalRole}
                  </option>
                ))}
              </select>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </article>
          )}
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Medical Entity</label>
            <select
              className={styles.ManagerUsernameTest}
              aria-label="healthOptions"
              name="healthOptions"
              value={formData.healthOptions}
              onChange={(e) => {
                handleHealthOptions(e);
                setFormData({...formData, healthOptions: e.target.value})}
              }
            >
              <option className={styles.optionTitle} value="">Select Health Option</option>
              {Object.keys(healthOption).map((healthEntity) => (
                <option className={styles.optionTitle} key={healthEntity} value={healthEntity}>
                  {healthEntity}
                </option>
              ))}
            </select>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Date of Birth</label>
            <input
              className={styles.ManagerUsernameTest}
              type="date"
              aria-label="dateofBirth"
              name="dateofBirth"
              value={appointmentDate || formData.dateofBirth}
              onChange={(e) => {
                setAppointmentDate(e.target.value)
                setFormData({...formData, dateofBirth: e.target.value});
              }}
              placeholder="Enter your Date of Birth"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </article>
         
          {selectedCancer && (
            <article className={styles.ManagerPasswordGrid}>
              <label className={styles.ManagerPasswordTitle}>Cancer Stage</label>
              <select 
              className={styles.ManagerUsernameTest} 
              name="cancerStage" 
              aria-label="cancerStage"
              value={formData.cancerStage}
              onChange={(e) => setFormData({...formData, cancerStage: e.target.value})}
              >
                <option className={styles.optionTitle} value="">Select Stage</option>
                {stages.map((stage) => (
                  <option className={styles.optionTitle} key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </article>
          )}
         <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Communication</label>
            <select 
            className={styles.ManagerUsernameTest} 
            name="communicationMethod"
            aria-label="communicationMethod"
            value={formData.communicationMethod}
            onChange={(e)=> {
              handleCommunicationChange(e);
              setFormData({...formData, communicationMethod: e.target.value});
            }
            }>
              <option className={styles.optionTitle} value="">Method</option>
              {communicationMethods.map((method) => (
                <option className={styles.optionTitle} key={method} value={method}>{method}</option>
              ))}
            </select>
          </article>
          {/* Communication Preference */}
          {/* Dynamic Input for Selected Communication Method */}
          {["WhatsApp", "Phone Call", "Text Message", "Telegram"].includes(communication) && (
            <article className={styles.ManagerPasswordGrid}>
              <label className={styles.ManagerPasswordTitle}>{communication}</label>
              <select
                className={styles.ManagerUsername}
                name="countryDialCode"
                aria-label="countryDialCode"
                value={formData.countryDialCode || countryCode}
                onChange={(e) => {
                  setCountryCode(e.target.value);
                  setFormData({...formData, countryDialCode: e.target.value});
                }}
              >
                {countryCodes.map(({ name, code }) => (
                  <option className={styles.optionTitle} key={code} value={code}>
                    {name} ({code})
                  </option>
                ))}
              </select>
              <input
                className={styles.ManagerUsername}
                type="tel"
                name={`${communication}-Number`}
                placeholder="Enter your phone number"
                aria-label="phoneNumber"
                value={contactValue||formData.phoneNumber}
                onChange={(e) => {
                  setContactValue(e.target.value);
                  setFormData({...formData, phoneNumber: e.target.value})
                }}
              />
            </article>
          )}
          {["Instagram", "Facebook", "LinkedIn", "Snapchat", "Tiktok"].includes(communication) && (
            <article className={styles.ManagerPasswordGrid}>
              <label className={styles.ManagerPasswordTitle}>{communication}</label>
              <input
                className={styles.ManagerUsername}
                type="text"
                name={`${communication}-Profile`}
                placeholder={`Enter your ${communication} profile link`}
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
              />
            </article>
          )}
          {communication === "Email" && (
            <article className={styles.ManagerUsernameGrid}>
              <label className={styles.ManagerUsernameTitle}>Email</label>
              <input
                className={styles.ManagerUsername}
                type="email"
                name="Email-Address"
                placeholder="Enter your Email Address"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
              />
            </article>
          )}
          <article className={styles.ManagerPasswordGrid}>
              <label className={styles.ManagerPasswordTitle}>Your Country</label>
              <select className={styles.ManagerUsernameTest} name="User-Country" onChange={(e) => setSelectedCountry(e.target.value)}>
                <option className={styles.optionTitle} value="">Select Country</option>
                {countries.map((country) => (
                  <option className={styles.optionTitle} key={country} value={country}>{country}</option>
                ))}
              </select>
            </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Password</label>
            <input
              className={styles.ManagerPassword}
              type="password"
              aria-label="Password"
              name="Password"
              placeholder="Enter a Secure Password"
              content="hidden"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Confirm Pass</label>
            <input
              className={styles.ManagerPassword}
              type="password"
              aria-label="Password"
              name="Password"
              placeholder="Confirm the Secure Password"
              content="hidden"
            />
          </article>
          <NewSubmit/>
        </form>
      </div>
    </>
  );
}
