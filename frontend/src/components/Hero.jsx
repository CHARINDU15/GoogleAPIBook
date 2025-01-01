import React, { useState } from 'react';

const Hero = ({ fetchBooks, resultsRef }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(search);
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                Discover the World of Books at Your Fingertips
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Explore your next favorite book using the Google Books API
                </p>

                <form onSubmit={handleSearch} method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="search"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      id="search"
                      placeholder="Search for books..."
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required=""
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                      >
                        Search Books
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <img className="w-full" src="/rb_2149341898.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;