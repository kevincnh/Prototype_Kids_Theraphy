import React from 'react';

const IndexSectionCustomComponents4 = () => {
    return (
        <section className="py-20 bg-pink-500">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-16">
      <div className="mb-4 inline-block px-4 py-2 bg-yellow-300 text-black font-bold text-sm tracking-wider uppercase">GET IN TOUCH</div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight mb-6 tracking-tight text-white">
        <span>BOOK YOUR</span>
        <span className="text-yellow-300">FIRST VISIT</span>
      </h2>
      <p className="text-xl text-white max-w-2xl mx-auto font-medium">Ready to help your child thrive? Schedule a free consultation today and let's discuss how we can support your family.</p>
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000]">
        <form action="#" method="post">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-sm uppercase font-bold" htmlFor="parent-name">Parent Name</label>
              <input className="w-full py-4 px-4 border-4 border-black font-bold text-lg placeholder-gray-600 focus:outline-none focus:border-pink-500 transition-colors" type="text" name="parent-name" placeholder="Your Name" />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-sm uppercase font-bold" htmlFor="child-name">Child's Name</label>
              <input className="w-full py-4 px-4 border-4 border-black font-bold text-lg placeholder-gray-600 focus:outline-none focus:border-pink-500 transition-colors" type="text" name="child-name" placeholder="Child's Name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-sm uppercase font-bold" htmlFor="email">Email</label>
              <input className="w-full py-4 px-4 border-4 border-black font-bold text-lg placeholder-gray-600 focus:outline-none focus:border-pink-500 transition-colors" type="email" name="email" placeholder="your@email.com" />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-sm uppercase font-bold" htmlFor="phone">Phone</label>
              <input className="w-full py-4 px-4 border-4 border-black font-bold text-lg placeholder-gray-600 focus:outline-none focus:border-pink-500 transition-colors" type="tel" name="phone" placeholder="(123) 456-7890" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm uppercase font-bold" htmlFor="message">Tell us about your child</label>
            <textarea className="w-full py-4 px-4 border-4 border-black font-bold text-lg placeholder-gray-600 focus:outline-none focus:border-pink-500 transition-colors" name="message" rows={4} placeholder="Share any concerns or goals you have..." defaultValue={""} />
          </div>
          <div className="text-center">
            <button className="inline-block px-8 py-4 bg-yellow-300 hover:bg-pink-500 text-black hover:text-white font-black font-heading text-xl border-4 border-black transition-all hover:translate-x-2 hover:translate-y-2 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]" type="submit">
              SCHEDULE FREE CONSULTATION
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents4;