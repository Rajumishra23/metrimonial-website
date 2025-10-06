import React from 'react';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sign Up To Get Latest Update</h3>
            <p>Sign up for our monthly newsletter for the latest news & articles</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded-l-md text-black"
              />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              At Riste Wale Matrimonial Services, we believe that marriage is one of the most significant milestones in a person’s life. With a deep understanding of the cultural and traditional values that shape matrimonial choices, we have dedicated ourselves to providing a platform where individuals can find their perfect life partner.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Gallery', 'Clients', 'Contact Us'].map((link, index) => (
                <li key={index}>
                  <a href={`${link.toLowerCase().replace(' ', '-')}.php.html`} className="hover:text-pink-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-pink-600 mr-2"></i>
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p>011-25710036-37</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-pink-600 mr-2"></i>
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p>info@globalrishte.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-pink-600 mr-2"></i>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>CITIZEN REGIONAL OFFICE - DELHI. 810, 8th Floor Padma Tower-I Rajendra Place, New Delhi, Delhi, Delhi - 110008. India.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Reach Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.836849085224!2d77.13861376499025!3d28.690866692509662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f765c10b99%3A0x5692d847db602b2c!2sGlobal%20Rishte%20Matrimonial%20Services%20%7C%20Elite%20%26%20Premium%20Marriage%20Bureau%20%7CBest%20Marriage%20Bureau%20in%20Delhi%20%7C!5e0!3m2!1sen!2sin!4v1723892535738!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © Copyright 2025. All rights reserved. Website Designed By 
            <a href="https://www.websunindia.com/" target="_blank" className="text-pink-500">
              Bigdesign software technologies
            </a>.
          </p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-white hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-pink-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-pink-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;