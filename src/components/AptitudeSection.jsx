import React from 'react'

const AptitudeSection = () => {
  const faqs = [
    {
      question: "What are the most important aptitude topics for placements?",
      answer: `The most important aptitude topics for placements are categorized into:
      - Quantitative Aptitude (Percentages, Profit & Loss, Time & Work, etc.)
      - Logical Reasoning (Puzzles, Blood Relations, Seating Arrangement, etc.)
      - Verbal Ability (Reading Comprehension, Synonyms & Antonyms, Grammar, etc.)`
    },
    {
      question: "How do I prepare for aptitude tests for placements?",
      answer: `Start with the basics of each topic and gradually move to advanced problems. 
      You can check out [this page](#) to begin your preparation. Practice regularly and take mock tests.`
    },
    {
      question: "Is aptitude necessary for placements?",
      answer: `Yes, aptitude is a crucial part of placement exams. It is usually the first elimination round 
      in most companies' recruitment process.`
    }
  ];

  return (
    <div className='bg-gray-50'>
      <h1 className='text-black font-sans text-3xl text-center mt-4 mb-4'>Most Important Aptitude Topics For Campus Placements</h1>
    <div className="bg-violet-300 text-black py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/logos/notes.svg" // <-- apni image ka path daal
            alt="Aptitude"
            className="w-60 h-auto"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4">
            Most Important Aptitude Topics For Placements
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Important Aptitude Topics for Placements are listed on this page. You can start your aptitude preparation for various Service Based and Product Based companies, by going through this page. On this page, you will find:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
            <li>
              Important Aptitude Topics for Campus Placements – Quants
            </li>
            <li>
              Important Aptitude Topics for Campus Placements – Logical
            </li>
            <li>
              Important Aptitude Topics for Campus Placements – Verbal Ability
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img
            src="/logos/apti.png" // <-- apni image ka path daal
            alt="Aptitude"
            className="w-auto h-auto"
          />

<section className="bg-white px-4  md:px-10 mb-6">
      <h2 className="text-2xl font-sans text-center text-black mb-8">
        FAQs on "Important Aptitude Topics for Placements"
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300  rounded-lg p-5 bg-gray-50">
            <h3 className="text-lg font-semibold text-black  mb-2">{faq.question}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
    </div>

  )
}

export default AptitudeSection

