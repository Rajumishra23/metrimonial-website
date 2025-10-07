import React from "react";
import { UserGroupIcon, ShieldCheckIcon, HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import img4 from "../Image/img/portfolio/4.jpg";

function About() {
  const features = [
    { icon: <UserGroupIcon className="h-6 w-6 text-pink-600" />, title: "Verified Profiles", desc: "All members are verified to ensure authenticity and safety." },
    { icon: <ShieldCheckIcon className="h-6 w-6 text-pink-600" />, title: "Privacy & Security", desc: "Your personal data is fully secure and confidential." },
    { icon: <HeartIcon className="h-6 w-6 text-pink-600" />, title: "Personalized Matchmaking", desc: "Our expert matchmakers provide tailored matches for you." },
    { icon: <StarIcon className="h-6 w-6 text-pink-600" />, title: "Success Stories", desc: "Thousands of couples have found lifelong happiness through us." },
  ];

  const stats = [
    { number: "10K+", label: "Happy Couples" },
    { number: "15+", label: "Years of Experience" },
    { number: "50K+", label: "Verified Profiles" },
    { number: "100%", label: "Privacy Guaranteed" },
  ];

  return (
    <section className="bg-pink-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        {/* ✅ Image Section */}
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="About us rishte"
            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 w-full h-[900px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-pink-600 leading-tight">
            About Global Rishte Matrimonial Services
          </h2>
          <p className="text-xl text-gray-700">
            At Global Rishte, we believe in connecting hearts and creating meaningful, lifelong relationships. 
            Our mission is to provide a safe, secure, and personalized matchmaking experience for individuals seeking their perfect life partner. 
            With over a decade of experience, we have successfully brought together thousands of happy couples.
          </p>

          <p className="text-lg text-gray-600">
            We combine traditional matchmaking values with modern technology to ensure you meet profiles that truly match your preferences. 
            Every profile is verified by our expert team, giving you the confidence and trust you deserve while finding your soulmate.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex items-start gap-4"
              >
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-pink-600 text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-bold text-pink-600">{stat.number}</h3>
                <p className="text-gray-600 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#membership"
            className="mt-10 inline-block px-8 py-4 bg-pink-600 text-white rounded-full font-medium text-lg hover:bg-pink-700 transition"
          >
            Find Your Match Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
