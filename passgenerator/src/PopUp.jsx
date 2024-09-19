// src/PopupForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PopUp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    configuration: '',
    budget: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

//   const validatePhoneNumber = (phone) => {
//     const phoneNumber = parsePhoneNumberFromString(phone, 'IN'); // Assuming 'IN' for India. Change this according to your country
//     if (!phoneNumber || !phoneNumber.isValid()) {
//       setErrors({
//         ...errors,
//         phone: 'Invalid phone number',
//       });
//       return false;
//     }
//     setErrors({
//       ...errors,
//       phone: '',
//     });
//     return true;
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number before submitting
    // if (!validatePhoneNumber(formData.phone)) {
    //   alert('Please enter a valid phone number.');
    //   return;
    // }

    const serviceID = 'service_p0lv1oc';
    const templateID = 'template_u7q8ksa';
    const userID = 'jn_dS40TWdzOX_VBS';  // Use your Public Key here

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('An error occurred, please try again.');
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      configuration: '',
      budget: '',
    });

    // Close the popup
    onClose();
  };

  if (!isOpen) return null;

  const puneAreas = [
    "Shivaji Nagar",
    "Kothrud",
    "Baner",
    "Aundh",
    "Viman Nagar",
    "Koregaon Park",
    "Hadapsar",
    "Pimpri",
    "Chinchwad",
    "Wakad",
    "Kalyani Nagar",
    "Hinjewadi",
    "Bavdhan",
    "Pashan",
    "Kharadi",
    "Magarpatta",
    "Camp",
    "Deccan",
    "Pune University",
    "Yerwada",
    "Swargate",
    "Karve Nagar",
    "Dhanori",
    "Wanowrie",
    "Nigdi",
    "Tathawade",
    "Warje",
    "Lohegaon",
    "Sahakar Nagar",
    "Balewadi"
  ];

  return (
    <div className="fixed inset-0    bg-black bg-opacity-50 flex  justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg  max-w-[650px] w-full">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className='flex sm:flex-row sm:gap-9 h-[300px] flex-col  p-6 max-sm:overflow-y-scroll'>
          <div>
          <label className="block mb-2">
            Name:
            <input type="text" name="name" value={formData.name} placeholder='Enter Your Name' onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
          </label>
          <label className="block mb-2">
            Email:
            <input type="email" name="email" value={formData.email} placeholder='Enter Email-Address' onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
          </label>
          <label className="block mb-2">
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter Your Number' className="w-full p-2 border border-gray-300 rounded mt-1" required />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </label>
          </div>
          <div>
          <label className="block mb-2">
            Area:
            <select name="area" value={formData.area} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required>
              <option value="">Select Area</option>
              {puneAreas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </label>
          <label className="block mb-2">
            Configuration:
            <select name="configuration" value={formData.configuration} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required>
            <option value="DEFAULT" >Choose a config.</option>
            <option value="RK">RK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="5 BHK">5 BHK</option>
            <option value="OFFICE">OFFICE</option>
            <option value="PENTHOUSE">PENTHOUSE</option>
            <option value="OPENCSPACE">OPEN SPACE</option>
            <option value="GARAGE">GARAGE</option>
            </select>
          </label>
          <label className="block mb-2">
            Budget:
            <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required>
            <option value="DEFAULT" >Choose a Budget</option>
            <option value="DE">below 50L</option>
            <option value="US">50L - 99L </option>
            <option value="CA">1Cr - 1.99Cr</option>
            <option value="FR">2Cr - 2.99Cr</option>
            <option value="DE">3Cr - 3.99Cr</option>
            <option value="DE">4Cr - 6Cr</option>
            <option value="DE">above 6Cr</option>
            </select>
          </label>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
          </div></div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;