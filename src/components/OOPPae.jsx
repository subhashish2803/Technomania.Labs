import React from "react";
import { Link } from "react-router-dom";
const OOPPage = () => {
  return (
    <div
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 brightness-100 contrast-100 min-h-screen"
    >
      <div className="px-6 pb-8 max-w-4xl mx-auto text-gray-800 space-y-4">
        {/* Hero Section */}
        <section className="py-4 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-sans text-black">OOP</h1>
            <p className="mt-6 text-lg text-gray-600">
              Explore curated content on Object Oriented Programming 📘
            </p>
          </div>
          <img
            className="hidden sm:block w-1/2"
            src="/logos/note-taking.svg"
            alt="note-taking"
          />
        </section>

        {/* OOP Content */}
        <div className="">
          <h2 className="text-4xl text-black font-sans">LINKS</h2>
          <ul className="list-none space-y-2">
  <li>
    <a
      href="https://drive.google.com/file/d/your-oop-mod1-2-link/view?usp=share_link"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Notes MOD 1-2
    </a>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/your-lab-record-link/view?usp=share_link"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Lab Record Complete
    </a>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/your-important-questions-link/view?usp=share_link"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Important Questions
    </a>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/your-previous-papers-link/view?usp=share_link"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Previous Year Papers
    </a>
  </li>
</ul>

        </div>

        {/* Contributors */}
        <div className="mt-8">
          <h2 className="text-4xl font-sans text-black">CONTRIBUTORS</h2>
          <ul className="list-none space-y-2">
  <li>
    <a
      href="https://www.linkedin.com/in/subhashish-nayak"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Subhashish Nayak
    </a>
  </li>
  <li>
    <a
      href="https://trident.ac.in/"
      target="_blank"
      rel="noreferrer"
      className="text-black underline"
    >
      Trident Academy of Technology, Bhubaneswar
    </a>
  </li>
</ul>

        </div>

        {/* Disclaimer */}
        <div className="p-3 p-sm-5 text-[0.8rem]">
                <Link className="text-var font-bold" to="/resoc">Disclaimer</Link>
                : Please go through our community guidelines for more information on
                contributions and sponsorships.
                <br />
                <span className="text-var">Contribute to VISTOFY</span>
              </div>

        
      </div>
    </div>
  );
};

export default OOPPage;
