import React from 'react';
import {useEffect } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import img1 from '../Image/img/portfolio/1.jpg';
import img2 from '../Image/img/portfolio/2.jpg';
import img3 from '../Image/img/portfolio/3.jpg';
import img4 from '../Image/img/portfolio/4.jpg';
import img5 from '../Image/img/portfolio/5.jpg';
import img6 from '../Image/img/portfolio/6.jpg';
import img7 from '../Image/img/portfolio/7.jpg';
import img8 from '../Image/img/portfolio/8.jpg';
import img9 from '../Image/img/portfolio/9.jpg';
import img10 from '../Image/img/logo.png'; 
import img11 from '../Image/img/slider/shadi.jpg';
import img12 from '../Image/img/slider/metrimonial5.jpg';
import img13 from '../Image/img/slider/metrimonial6.jpg';
import aboutUsImg from '../Image/img/about-us.jpg';
import aboutSssImg from '../Image/img/about-sss.jpg';
import whyUsImg from '../Image/img/why-us-2.jpg';
import vrindaImg from '../Image/img/client/vrinda-tayal.jpg';
import shiviImg from '../Image/img/client/shivi-jain.jpg';
import tamannaImg from '../Image/img/client/tamanna-khurana.jpg';
import amishaImg from '../Image/img/client/amisha-gupta.jpg';
import srishtiImg from '../Image/img/client/srishti-aggarwal.jpg';
import sapnaImg from '../Image/img/client/sapna-aggarwal.jpg';
import whatsappImg from '../Image/img/whatsapp.gif';
import callImg from '../Image/img/portfolio/1.jpg';

import logo1 from '/clients-logo/1.png';
import logo2 from '/clients-logo/2.png';
import logo3 from '/clients-logo/3.png';
import logo4 from '/clients-logo/4.png';
import logo5 from '/clients-logo/5.png';
import logo6 from '/clients-logo/6.png';
import logo7 from '/clients-logo/7.png';
import logo8 from '/clients-logo/8.png';
import logo9 from '/clients-logo/9.png';
import logo10 from '/clients-logo/10.png';
import logo11 from '/clients-logo/11.png';
import logo12 from '/clients-logo/12.png';
import logo13 from '/clients-logo/13.png';
import logo14 from '/clients-logo/14.png';
import logo16 from '/clients-logo/16.png';
import logo17 from '/clients-logo/17.png';
import logo18 from '/clients-logo/18.png';
import logo19 from '/clients-logo/19.png';
import logo20 from '/clients-logo/20.png';




function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Language Bar */}
      <div className="bg-gray-100 text-center text-sm text-gray-700 py-2 px-1">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Assamese', 'Bengali', 'Gujarati', 'Hindi', 'Kannada',
            'Malayalam', 'Marathi', 'Punjabi', 'Tamil', 'Telugu', 'Urdu'
          ].map((lang, index) => (
            <React.Fragment key={lang}>
              <a href="#" className="hover:text-pink-600">{lang}</a>
              {index < 10 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={img10} alt="Global Rishte Matrimonial Services" className="h-10 sm:h-12" />
          </a>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-900">Already a member?</span>
            <a
              href="/login"
              className="text-sm text-pink-600 border border-pink-600 px-3 py-1 rounded-full font-medium hover:bg-pink-50 transition"
            >
              Login
            </a>
{/* Help Dropdown */}
<div className="relative ml-4 group">
  <div className="flex items-center text-sm text-gray-900 hover:text-pink-600 cursor-pointer">
    <QuestionMarkCircleIcon className="h-4 w-4 text-gray-500 mr-1" />
    Help
    <ChevronDownIcon className="h-4 w-4 text-gray-500 ml-1 transition-transform duration-300 group-hover:rotate-180" />
  </div>



  {/* Dropdown */}
  <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <p className="text-sm font-semibold text-gray-800 mb-2">24x7 Help</p>
    <p className="text-sm text-gray-700">India: <span className="font-medium text-pink-600">+91 8144998877</span></p>
    <p className="text-sm text-gray-700 mb-3">UAE: <span className="font-medium text-pink-600">+971 525060879</span></p>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="text-gray-700 hover:text-pink-600">Live Help</a></li>
      <li><a href="/contact-us" className="text-gray-700 hover:text-pink-600">Contact Us</a></li>
      <li><a href="#" className="text-gray-700 hover:text-pink-600">Feedback</a></li>
      <li><a href="#" className="text-gray-700 hover:text-pink-600">Business Queries</a></li>
      <li><a href="#" className="text-gray-700 hover:text-pink-600">Retail Stores</a></li>
    </ul>
  </div>
</div>
</div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl text-gray-700"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md`}>
          <ul className="flex flex-col space-y-4 px-4 py-4 text-gray-700 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/package">Package</a></li>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li>
              <span className="text-sm text-gray-700">Already a member?</span>
              <a
                href="/login"
                className="text-pink-600 font-medium border border-pink-600 px-3 py-1 rounded-full block mt-1"
              >
                Login
              </a>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-gray-700">Help</summary>
                <div className="mt-2 space-y-2 text-sm">
                  <p>India: <span className="text-pink-600 font-medium">+91 8144998877</span></p>
                  <p>UAE: <span className="text-pink-600 font-medium">+971 525060879</span></p>
                  <a href="#" className="block hover:text-pink-600">Live Help</a>
                  <a href="/contact-us" className="block hover:text-pink-600">Contact Us</a>
                  <a href="#" className="block hover:text-pink-600">Feedback</a>
                  <a href="#" className="block hover:text-pink-600">Business Queries</a>
                  <a href="#" className="block hover:text-pink-600">Retail Stores</a>
                </div>
              </details>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function Carousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = [img11, img12, img13];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-screen">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-10"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Screenshot-Styled Matrimony Form */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-20 block">
        <form className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl p-6 w-80">
          <h3 className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded mb-3 text-center">
            Create Matrimony Profile
          </h3>
          <h4 className="font-bold text-center text-gray-800 mb-4">
            Find your perfect match
          </h4>

          <div className="mb-3">
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm">
              <option disabled selected>Matrimonial profile for</option>
              <option>Myself</option>
              <option>Son</option>
              <option>Daughter</option>
              <option>Brother</option>
              <option>Relative</option>
              <option>Sister</option>
              <option>Friend</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              placeholder="+91... Enter mobile number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
           className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
>
  REGISTER FREE
          </button>

          <p className="text-xs text-gray-600 mt-3 text-center">
            By clicking Register Free, you agree to our{' '}
            <span className="text-pink-600 underline cursor-pointer">Terms & Conditions</span> and{' '}
            <span className="text-pink-600 underline cursor-pointer">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  );
}

function WelcomeSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={aboutUsImg} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="mt-6 bg-pink-100 p-6 rounded-lg flex items-center">
              <div>
                <h4 className="text-4xl font-bold text-pink-600">13+</h4>
                <h3 className="text-xl font-semibold">Years Of Experiences</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="text-center md:text-left">
              <h3 className="text-pink-600 text-lg">Introduction</h3>
              <h2 className="text-3xl font-bold mb-4">We Make Your Every Moment Special</h2>
              <p className="mb-6">
                At Global rishte Matrimonial Services, we believe that marriage is one of the most significant milestones in a person’s life. With a deep understanding of the cultural and traditional values that shape matrimonial choices, we have dedicated ourselves to providing a platform where individuals can find their perfect life partner.
              </p>
              <ul className="space-y-2">
                {[
                  '5500+ Verified Profiles',
                  'Personalized Matchmaking Services',
                  'Expertise in Multiple Communities',
                  'Commitment to Authenticity and Confidentiality',
                  'Continuous Support Throughout the Process',
                  'A Partner in Your Journey to Love and Happiness',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-circle text-pink-600 mr-2 text-xs"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <a href="about-us.php.html" className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
                  Read More
                </a>
                <a href="contact-us.php.html" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const clients = [
    { name: 'Vrinda Tayal & Saurabh Garg', details: ['S/O Mr Sunil Garg', 'United Engineering Company', 'Residence: Nehru Nagar, Ghaziabad'], img: vrindaImg },
    { name: 'Shivi Jain & Bhavya Jain', details: ['S/O late Mr Jain', 'Vinayl Pipes', 'Residence: Green Park, New Delhi'], img: shiviImg },
    { name: 'Tamanna Khurana & Akash Gupta', details: ['S/O Mr Naresh Gupta', 'Captain Gogo, Kirti Nagar', 'Residence: Moti Nagar, Delhi'], img: tamannaImg },
    { name: 'Amisha Gupta & Mohan Singhal', details: ['S/O Mr Anil Singhal', 'Residence: Rohini, New Delhi'], img: amishaImg },
    { name: 'Srishti Aggarwal & Abhishek Gupta', details: ['S/O Neeraj Gupta', 'Residence: Gurgaon'], img: srishtiImg },
    { name: 'Sapna Aggarwal & Umang Gupta', details: ['S/O Sanjay kumar Gupta', 'Ganesh Trading Company', 'Residence: Dwarka'], img: sapnaImg },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-pink-600 text-lg font-medium uppercase">Clients</h3>
          <h2 className="text-4xl font-bold text-gray-800">Our Happy Couples</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full">
                <img
                  src={client.img}
                  alt={client.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h3>
                {client.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyChooseUsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-pink-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-pink-600 text-lg">Why Choose Us?</h3>
            <h2 className="text-3xl font-bold mb-4">Why global rishte?</h2>
            <p className="mb-6">
              Choosing the right matrimonial service can make all the difference in finding your perfect match. At global rishte Matrimonial Services, we stand out in the crowded matchmaking industry because of our unwavering commitment to excellence, integrity, and personalized service.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'fas fa-shield-alt', title: 'Strict Confidentiality and Privacy' },
                { icon: 'fas fa-thumbs-up', title: 'Expertise Across Multiple Communities' },
                { icon: 'fas fa-cogs', title: 'Continuous Support Throughout Your Journey' },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className={`${item.icon} text-pink-600 text-3xl mr-4`}></i>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={whyUsImg} alt="Why Us" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FactsSection() {
  const facts = [
    { title: 'Project Done', value: 99 },
    { title: 'Happy Couples', value: 98 },
    { title: 'Expert Planner', value: 100 },
    { title: 'Verified Profiles', value: 99.99 },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src={aboutSssImg} alt="Facts" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="lg:w-1/2 bg-pink-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-pink-600 text-lg">Facts & Digit</h3>
            <h2 className="text-3xl font-bold mb-4">From First Meeting to Forever: A Journey of Love</h2>
            <p className="mb-6">
              At Global Rishte Matrimonial Services, we take pride in the countless love stories we've helped create. One of our recent success stories involves a couple who found each other through our platform, sharing a deep connection from their very first meeting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#e5e7eb"
                        strokeWidth="7"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#cda274"
                        strokeWidth="7"
                        fill="none"
                        strokeDasharray={`${fact.value * 2.83}, 283`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                      {fact.value}%
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{fact.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-pink-600 text-lg">Photo Gallery</h3>
          <h2 className="text-3xl font-bold">Our Captured Moments</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <a key={index} href={src} className="block">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover rounded-lg hover:opacity-80" />
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="gallery.php.html" className="text-pink-600 hover:underline">View More Images</a>
        </div>
      </div>
    </section>
  );
}

 function ClientsLogoSection() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, 
    logo11, logo12, logo13, logo14, logo16, logo17, logo18, logo19, logo20,
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-pink-600 text-lg">Clients List</h3>
          <h2 className="text-3xl font-bold">Our Clients</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="h-16 object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function SocialIcons() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-l-lg shadow-lg">
      <ul className="space-y-2 p-4">
        {[
          { icon: 'ti-facebook', label: 'Facebook' },
          { icon: 'ti-instagram', label: 'Instagram' },
          { icon: 'ti-youtube', label: 'Youtube' },
          { icon: 'ti-linkedin', label: 'Linkedin' },
        ].map((item, index) => (
          <li key={index}>
            <a href="#" target="_blank" className="flex items-center space-x-2 hover:text-pink-500">
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <WelcomeSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <FactsSection />
      <GallerySection />
      <ClientsLogoSection />
      <Footer />
      <a href="https://api.whatsapp.com/send/?phone=919650206995" target="_blank">
        <img src={whatsappImg} className="fixed bottom-20 right-4 w-12 h-12" />
      </a>
      <a href="tel:+09650206995" target="_blank">
        <img src={callImg} className="fixed bottom-4 right-4 w-12 h-12" />
      </a>
      <SocialIcons />
      
      <a href="#top" className="fixed bottom-4 left-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;