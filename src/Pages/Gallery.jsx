import React from "react";
import img1 from '../Image/img/portfolio/1.jpg';
import img2 from '../Image/img/portfolio/2.jpg';
import img3 from '../Image/img/portfolio/3.jpg';
import img4 from '../Image/img/portfolio/4.jpg';
import img5 from '../Image/img/portfolio/5.jpg';
import img6 from '../Image/img/portfolio/6.jpg';

function Gallery() {
  // ✅ Correct array (no extra brackets)
  const galleryImages = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Happy Couples Gallery</h2>
          <p className="text-gray-700 text-lg">
            Celebrating love and lifelong connections. Meet some of our happy couples.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={img}
                alt={`Couple ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Happy Couple</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
          >
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
