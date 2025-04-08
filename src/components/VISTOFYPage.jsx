import React from "react";

const VISTOFYPage = () => {
  return (
    <div
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 brightness-100 contrast-100"
    >
      <div className="px-6 pb-8 max-w-4xl mx-auto text-gray-700 space-y-4">
        {/* Hero Section */}
        <section className="py-4 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-sans text-black">TOS / CG</h1>
            <p className="mt-6 text-lg text-gray-600">
              Please go through the following community guidelines.
            </p>
          </div>
          <img
            className="hidden sm:block w-1/2"
            src="/logos/blueplanet.png"
            alt="guidelines visual"
          />
        </section>

        {/* Guidelines Content */}
        <div className=" p-4 rounded-lg shadow-md text-black space-y-4 text-sm sm:text-base border border-gray-300 bg-gray-50">
          <p>
            <strong>Disclaimer</strong>: This is a community-driven project. We are <strong>not responsible for any kind of loss or damage</strong> caused by the content provided on this website. The content is provided for educational purposes only.
          </p>
          <p>
            At VISTOFY, we value transparency and openness. All users are encouraged to engage positively and maintain mutual respect. Misuse of content, spamming, or any kind of abuse may lead to permanent removal.
          </p>
          <p>
            Our team works hard to ensure content accuracy. However, VISTOFY cannot guarantee completeness or correctness at all times. Kindly verify through official academic resources before use.
          </p>
          <p>
            By using this platform, you agree to follow these community guidelines and help foster a supportive learning space.
          </p>
          <p>
            We hope that you find our community guidelines clear and informative. At VISTOFY, we strive to provide high-quality educational content, and we welcome all feedback, queries, and suggestions. Let's work together to create a better world, one step at a time.
          </p>
        </div>

        {/* Signoff */}
        <div className=" p-2 text-black text-sm">
          With love and pizza dreams,<br />— TeamSFY ❤️
        </div>

        {/* Footer */}
        <footer className="p-2 text-center relative z-10 text-black text-xs" id="learnaboutus">
          <p>Made with ❤️ by TeamSFY</p>
        </footer>
      </div>
    </div>
  );
};

export default VISTOFYPage;
