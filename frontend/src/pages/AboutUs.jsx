import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex-shrink-0">
          <img
            className="h-auto w-auto rounded-full mx-auto lg:mx-0 lg:h-80 lg:w-80 transition-transform duration-500 hover:scale-105"
            src="/rb_20165.png"
            alt="About Us"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About LibroEsfera
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed text-justify">
            Welcome to LibroEsfera, your number one source for all things books. We're dedicated to giving you the very best of book recommendations, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed text-justify">
            Founded in 2025 by a group of book enthusiasts, LibroEsfera has come a long way from its beginnings. When we first started out, our passion for books drove us to do tons of research so that LibroEsfera can offer you the world's most advanced book recommendation platform. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
          </p>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed text-justify">
            We hope you enjoy our recommendations as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed text-justify">
            Sincerely,<br />
            <span className="font-semibold">The LibroEsfera Team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;