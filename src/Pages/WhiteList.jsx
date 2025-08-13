import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const ContactUs = () => {
 useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  

  const [formData, setFormData] = useState({
    email: '',
    wallet: '',
  
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.wallet || !formData.email) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        'service_baxhqtm', // Replace with your EmailJS service ID
        'template_bqoevx2', // Replace with your EmailJS template ID
        {
          email: formData.email,
           name: formData.wallet,
         
        },
        'IOAeM7yqVb21Briq0' // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          Swal.fire({
  title: "success!",
  text: "You've been added to the whitelist",
  icon: "success",
 

 
});
setFormData({ email: '',wallet: ''});
        },
        (error) => {
          Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <div style={{ paddingTop:'60px' }}>
                 <div className="lamp" style={{ marginTop:'15vh' }}></div>
            <div className="container" style={{ textAlign:"center", color:"white" }}>
            <h1>Join the Whitelist</h1>
            <p>Submit your details to join Matrix whitelist for updates about our project and possible future airdrop</p>
           </div>
       <div className="contactUs">
       
      <form onSubmit={handleSubmit}>
       

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

         <label>Wallet(Sol):</label><br />
        <input
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          required
        /><br /><br />

       <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {status && <p>{status}</p>}
      </div>
      <hr/>
       
    </div>
  );
};

export default ContactUs;