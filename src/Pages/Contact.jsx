import React from "react";

function Contact() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            Have questions or need help? Reach out to us—we're here for you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-pink-50 p-8 rounded-3xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Our Address</h3>
              <p className="text-gray-700">123 Global Rishte Street, Mumbai, India</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Phone & Email</h3>
              <p className="text-gray-700">
                Phone: <span className="font-medium text-pink-600">+91 8144998877</span>
              </p>
              <p className="text-gray-700">
                Email: <span className="font-medium text-pink-600">support@globalrishte.com</span>
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Office Hours</h3>
              <p className="text-gray-700">Mon - Fri: 10:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Sat - Sun: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63c0a123456%3A0xabcdef1234567890!2sMumbai%2C+India!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
