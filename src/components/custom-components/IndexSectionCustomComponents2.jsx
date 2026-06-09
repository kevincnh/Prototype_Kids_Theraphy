import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
        <section className="py-20 bg-yellow-300">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-16">
      <div className="mb-4 inline-block px-4 py-2 bg-pink-500 text-white font-bold text-sm tracking-wider uppercase">OUR SERVICES</div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight mb-6 tracking-tight">
        <span>PLAYFUL</span>
        <span className="text-pink-500">THERAPIES</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">We offer a variety of fun and engaging therapeutic approaches designed specifically for children.</p>
    </div>
    <div className="flex flex-wrap -mx-4 -mb-16">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">PLAY THERAPY</h3>
            <p className="text-base leading-relaxed text-white font-medium">Using toys, games, and creative activities to help children express emotions and develop coping skills in a natural way.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">MUSIC THERAPY</h3>
            <p className="text-base leading-relaxed text-white font-medium">Rhythm, songs, and musical instruments help children improve communication, motor skills, and emotional regulation.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm-4-4h8v-1l-1-1v-2.61c0-2.19-1.2-4.03-3.25-4.52V7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.87C7.2 8.86 6 10.7 6 12.89V15l-1 1v1zm5-14.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v.64c-2.19.52-3.5 2.17-3.82 4.36H5c-.55 0-1 .45-1 1s.45 1 1 1h.07c.16 2.02.77 3.59 1.51 4.5H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-1.58c.74-.91 1.35-2.48 1.51-4.5H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.18c-.32-2.19-1.63-3.84-3.82-4.36V3.5z" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">ART THERAPY</h3>
            <p className="text-base leading-relaxed text-white font-medium">Drawing, painting, and crafts allow children to express feelings they may not be able to put into words.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">MOVEMENT THERAPY</h3>
            <p className="text-base leading-relaxed text-white font-medium">Physical activities and dance help children develop coordination, body awareness, and release pent-up energy.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">GROUP SESSIONS</h3>
            <p className="text-base leading-relaxed text-white font-medium">Social play groups where children learn interaction skills, teamwork, and friendship building in a supportive setting.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
        <div className="flex h-full bg-pink-500 border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <span className="mr-6 flex-shrink-0">
            <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-500 w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" fill="currentColor" />
              </svg>
            </div>
          </span>
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-black font-heading text-white tracking-tight">PARENT COACHING</h3>
            <p className="text-base leading-relaxed text-white font-medium">Guidance for parents on how to support their child's development and continue therapeutic techniques at home.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;