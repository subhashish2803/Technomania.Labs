import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Note = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const syllabusLinks = [
    { branch: 'CSE & MCA', url: 'https://drive.google.com/file/d/1tDEfpGmiLjuT_QCfl42skYxPelJ3AMVS/view?usp=sharing' },
    { branch: 'ECE', url: 'https://drive.google.com/file/d/1fE9qyvjlzPeW8PP7Kg_z8ySjkzxEtzQ9/view?usp=sharing' },
    { branch: 'EEE', url: 'https://drive.google.com/file/d/1NHSTTkBaaDVOeoW9CkvCefDvcnbSVHju/view?usp=sharing' },
    { branch: 'EIE', url: 'https://drive.google.com/file/d/1bcWrFey-AJjkuj--SD2OR7cynqpjAmgr/view?usp=sharing' },
  ];

  const notesList = {
    '': [
      'Engineering Maths I',
      'Constitution of India',
      'Basic Electronics Engineering',
      'Communicative & Technical English',
      'Engineering Chemistry',
      'C Programming',
      'Environmental Science & Engineering',
      'Basic Electrical Engineering',
      'Data Structures & Algorithms',
      'Engineering Mathematics II',
      'Engineering Physics',
    ],
    MCA: [
      'Object-Oriented Programming using JAVA',
      'Digital Electronics',
      'Discrete Mathematics',
      'Engineering Economics',
      'Engineering Mathematics III',
      'Object-Oriented Programming using JAVA',
      'Fundamentals of Management',
      'Computer Organization and Architecture',
      'Database Management System',
      'Design and Analysis of Algorithms',
      'Engineering Mathematics IV',
      'Operating Systems',
      'Computer Networks',
      'Biology for Engineers',
      'Data Mining & Data Warehousing',
      'Statistical Inference',
      'Cloud Computing',
      'Professional Ethics & Values',
      'Advanced Java Programming',
      'Mobile Computing',
      'Formal Languages & Automata Theory',
      'System Programming',
      'Software Engineering',
      'Machine Learning',
      'Artificial Intelligence',
      'Natural Language Processing',
      'Wireless Sensor Networks',
    ],
    ECE: [
      'Circuit Theory',
      'Maths -III Complex Numbers',
      'Electronic Devices',
      'Analog Electronics Circuits',
      'Engineering Mathematics IV (ECE)',
    ],
  };

  // Filtered notes based on search
  const filteredNotesList = {};
  Object.entries(notesList).forEach(([category, topics]) => {
    const filteredTopics = topics.filter(topic =>
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredTopics.length > 0) {
      filteredNotesList[category] = filteredTopics;
    }
  });

  return (
    <div
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 contrast-100 brightness-100"
    >
      <div className="px-6 pb-8 max-w-4xl mx-auto text-gray-700 space-y-4">
        {/* Header */}
        <section className="py-4 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-7xl font-sans text-black">NOTES</h1>
            <p className="mt-6 text-lg text-gray-600">The only notes that you would ever need.</p>
            <h2 className="font-sans mt-6 text-black">
              B.Tech & MCA Syllabus:{' '}
              {syllabusLinks.map((link, i) => (
                <span key={i}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="text-xl text-black underline">
                    {link.branch}
                  </a>
                  {i !== syllabusLinks.length - 1 && <span className="mx-2">|</span>}
                </span>
              ))}
            </h2>
          </div>
          <img src="/logos/notes.svg" alt="notes" className="hidden sm:block w-1/2" />
        </section>

        {/* Search */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 border rounded px-3 py-1 text-sm"
          />
          <button className="ml-3 text-black border border-dashed px-3 py-1 rounded">🔍</button>
        </div>

        {/* Notes Section */}
        <h1 className='text-3xl font-sans text-black'>1ST YEAR</h1>
        {Object.entries(filteredNotesList).map(([category, topics]) => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-semibold">{category}</h2>
            <hr className="my-2" />
            <ul className="space-y-1 pl-4 list-disc">
              {topics.map((topic, index) => (
                <li key={index}>
                  <a href={`/previewnotes?id=${index + 1}`} className="text-black hover:underline">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {Object.keys(filteredNotesList).length === 0 && (
          <p className="text-center text-gray-500 mt-10">No results found for "{searchQuery}"</p>
        )}
      </div>
      <div className="p-3 p-sm-5 text-[0.8rem]">
        <Link className="text-var font-bold" to="/resoc">Disclaimer</Link>
        : Please go through our community guidelines for more information on
        contributions and sponsorships.
        <br />
        <span className="text-var">Contribute to VISTOFY</span>
      </div>
    </div>
  );
};

export default Note;
