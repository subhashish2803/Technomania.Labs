import React from "react";

function Notes() {
  return (
    <div
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 contrast-100 brightness-100"
    >
      {/* Navbar */}
      <nav className="flex items-center  px-6 py-4 shadow ">
        <div className="flex items-center space-x-3"></div>
        <img
            src="/logos/astronauthelmet.svg"
            alt="illustration"
            className="w-15 h-15"
          />
        <div className=" md:flex space-x-6 ml-2">
        
          <a href="/Notes" className="hover:text-blue-600">Notes</a>
          <a href="/taskboard" className="hover:text-blue-600">Tasks</a>
        </div>
      </nav>

      {/* Hero Section (Fixed) */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-6xl font-sans mb-4">
              VI<span className="text-gray-500">STOFY</span>
            </h2>
            <p className="text-lg text-gray-700">
              VISTOFY: The coolest academic notes-sharing platform around!
            </p>
          </div>
          <img
            src="https://resoc.in/static/media/moonlight.55a7737d052c628f33b29081e6d23365.svg"
            alt="illustration"
            className="w-50 h-50"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 pb-12 max-w-4xl mx-auto text-gray-700 space-y-4">
        <p>
          VISTOFY is the coolest academic notes-sharing platform around, built by a bunch of
          tech-savvy students at Trident Institute, and it's totally free ❤️. You don't have to sell
          your soul to afford <a className="text-blue-600 font-medium" href="/notes">good quality notes</a> anymore.
        </p>
        <p>
          We have a nifty <a className="text-blue-600 font-medium" href="/taskboard">task section</a> for you to manage your work.
          No more forgetting deadlines and drowning in assignments. Pop over to the 
          <a className="text-blue-600 font-medium" href="/community"> community chat page</a> and give us a holler.
        </p>
        <p>
          We're looking for active contributions and you're always welcome to 
          <a className="text-blue-600 font-medium" href="/contributions"> contribute</a> to VISTOFY :)
        </p>
        <p>
          If you love what we're doing, consider supporting us ❤️
        </p>
        
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © 2025 VISTOFY. Built with ❤️ by Subhashish & Team.
      </footer>
    </div>
  );
}

export default Notes;
