import React from 'react';

const IndexSectionCustomComponents1 = () => {
    return (
        <section className="relative pb-8 md:pb-16 lg:pb-24 overflow-hidden">
  <div className="relative container px-6 mx-auto">
    <nav className="relative flex justify-between items-center py-8 border-b-4 border-black">
      <a href="#">
        <img src="https://static.shuffle.dev/uploads/files/a5/a502e854efb113b2d72ad8f1b1d27984fd22a423/logos/logo-9b23fae3e0dbed745277575e5d1bd46c.png" alt="PlayTherapy Logo" className="h-7" />
      </a>
      <div className="lg:hidden">
        <button className="block w-12 h-12 bg-pink-500 hover:bg-yellow-300 transition-colors border-2 border-black">
          <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center space-x-0">
        <li>
          <a className="block px-6 py-4 text-lg font-bold hover:bg-pink-500 hover:text-white transition-all border-2 border-black border-r-0" href="#">ABOUT US</a>
        </li>
        <li>
          <a className="block px-6 py-4 text-lg font-bold hover:bg-pink-500 hover:text-white transition-all border-2 border-black border-r-0" href="#">THERAPIES</a>
        </li>
        <li>
          <a className="block px-6 py-4 text-lg font-bold hover:bg-pink-500 hover:text-white transition-all border-2 border-black border-r-0" href="#">OUR TEAM</a>
        </li>
        <li>
          <a className="block px-6 py-4 text-lg font-bold hover:bg-pink-500 hover:text-white transition-all border-2 border-black" href="#">CONTACT</a>
        </li>
      </ul>
      <div className="hidden lg:block">
        <button className="px-8 py-4 bg-yellow-300 hover:bg-pink-500 text-black hover:text-white font-black font-heading text-lg border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000]">
          BOOK A VISIT
        </button>
      </div>
    </nav>
    <div className="flex flex-wrap items-center -mx-6 mt-16 lg:mt-24 mb-16 md:mb-24">
      <div className="w-full lg:w-1/2 px-6 mb-16 lg:mb-0">
        <div className="mb-8 inline-block px-4 py-2 bg-pink-500 text-white font-bold text-sm tracking-wider uppercase">
          PLAYFUL KIDS THERAPY
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-[0.9] mb-8 tracking-tight">
          <span>HEALING</span>
          <br />
          <span className="text-pink-500">THROUGH</span>
          <br />
          <span>PLAY</span>
        </h1>
        <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-12 max-w-lg font-medium">
          We help children grow, develop, and overcome challenges through fun, engaging therapeutic activities in a warm and safe environment.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="inline-block px-6 py-4 bg-pink-500 hover:bg-yellow-300 text-white hover:text-black font-black font-heading text-xl border-4 border-black transition-all hover:translate-x-2 hover:translate-y-2 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]">
            SCHEDULE APPOINTMENT
          </a>
          <a href="#" className="inline-block px-6 py-4 bg-white hover:bg-pink-500 text-black hover:text-white font-black font-heading text-xl border-4 border-black transition-all hover:translate-x-2 hover:translate-y-2 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-pink-500 translate-x-6 translate-y-6 border-4 border-black" />
          <img className="relative w-full h-auto border-4 border-black bg-white object-cover" src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Children playing in therapy" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-300 border-4 border-black" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-500 border-4 border-black" />
        </div>
      </div>
    </div>
    <div className="border-t-4 border-black py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div className="text-center">
          <div className="text-5xl font-black font-heading text-black mb-2">500+</div>
          <div className="text-lg font-bold text-gray-600">HAPPY KIDS</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black font-heading text-black mb-2">15+</div>
          <div className="text-lg font-bold text-gray-600">THERAPISTS</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black font-heading text-black mb-2">10+</div>
          <div className="text-lg font-bold text-gray-600">YEARS EXPERIENCE</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black font-heading text-black mb-2">4.9★</div>
          <div className="text-lg font-bold text-gray-600">PARENT RATING</div>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-full max-w-sm z-50 transition-duration-300 ease-in-out hidden">
    <div className="fixed inset-0 bg-black bg-opacity-50" />
    <nav className="relative w-full h-full bg-white border-r-4 border-black overflow-y-auto">
      <div className="flex items-center justify-between p-6 border-b-4 border-black">
        <a href="#">
          <img src="https://static.shuffle.dev/uploads/files/a5/a502e854efb113b2d72ad8f1b1d27984fd22a423/logos/logo-9b23fae3e0dbed745277575e5d1bd46c.png" alt="PlayTherapy Logo" className="h-6" />
        </a>
        <button className="w-10 h-10 bg-pink-500 hover:bg-yellow-300 border-2 border-black">
          <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <ul className="space-y-0">
          <li>
            <a className="block p-4 text-xl font-black font-heading hover:bg-pink-500 hover:text-white border-2 border-black border-b-0" href="#">ABOUT US</a>
          </li>
          <li>
            <a className="block p-4 text-xl font-black font-heading hover:bg-pink-500 hover:text-white border-2 border-black border-b-0" href="#">THERAPIES</a>
          </li>
          <li>
            <a className="block p-4 text-xl font-black font-heading hover:bg-pink-500 hover:text-white border-2 border-black border-b-0" href="#">OUR TEAM</a>
          </li>
          <li>
            <a className="block p-4 text-xl font-black font-heading hover:bg-pink-500 hover:text-white border-2 border-black" href="#">CONTACT</a>
          </li>
        </ul>
        <div className="mt-8">
          <a href="#" className="block text-center w-full px-6 py-4 bg-yellow-300 hover:bg-pink-500 text-black hover:text-white font-black font-heading text-lg border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000]">
            BOOK A VISIT
          </a>
        </div>
      </div>
    </nav>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents1;