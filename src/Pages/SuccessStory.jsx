import React from "react";
import img1 from '../Image/img/portfolio/1.jpg';
import img2 from '../Image/img/portfolio/2.jpg';
import img3 from '../Image/img/portfolio/3.jpg';
import img4 from '../Image/img/portfolio/4.jpg';
import img5 from '../Image/img/portfolio/5.jpg';
import img6 from '../Image/img/portfolio/6.jpg';

function SuccessStories() {
  const stories = [
    {
      img: img1,
      name: "Rohan & Priya",
      story:
        "We met through Global Rishte and it was love at first chat! Thank you for bringing us together.",
    },
    {
      img: img2,
      name: "Amit & Sneha",
      story:
        "The process was smooth and simple. Today we are happily married, all thanks to the platform.",
    },
    {
      img: img3,
      name: "Rahul & Anjali",
      story:
        "We never thought online matchmaking could be this effective. Truly grateful for this amazing service!",
    },
    {
      img: img4,
      name: "Karan & Anika",
      story:
        "Our journey started here, and today we are celebrating our love. Truly a wonderful experience!",
    },
    {
      img: img5,
      name: "Vikram & Neha",
      story:
        "Thanks to Global Rishte, we found each other easily and efficiently. So happy together!",
    },
    {
      img: img6,
      name: "Siddharth & Riya",
      story:
        "A perfect match made possible through the platform. Grateful for the guidance and support!",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Success Stories</h2>
          <p className="text-gray-700 text-lg">
            Meet some of our happy couples who found their life partners through us.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={story.img}
                alt={story.name}
                className="w-70 h-80 rounded-xl object-cover mb-4 border-4 border-pink-600"
              />
              <h3 className="text-xl font-bold text-pink-600 mb-2">{story.name}</h3>
              <p className="text-gray-700 text-sm">{story.story}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/success-stories"
            className="inline-block px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
          >
            Read All Stories
          </a>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
