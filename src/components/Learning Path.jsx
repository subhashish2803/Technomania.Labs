import React from "react";

const LearningPath = () => {
  const notes = [
    {
      title: "React Interview Notes",
      description: "Comprehensive notes for React interview preparation.",
      url: "/pdfs/React_Notes.pdf",
    },
    {
      title: "Node.js Interview Tips",
      description: "Important tips and tricks for Node.js interviews.",
      url: "/pdfs/NodeJS_Interview_Tips.pdf",
    },
    {
      title: "Database Concepts",
      description: "Key database concepts for technical interviews.",
      url: "/pdfs/Database_Concepts.pdf",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Interview Preparation Notes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 border hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="text-gray-600 mb-4">{note.description}</p>
            <div className="flex justify-between">
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View PDF
              </a>
              <a
                href={note.url}
                download
                className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
