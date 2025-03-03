import React from 'react';

const AsyncAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container with animation */}
      <div className="animate-moveContainer p-6 bg-white rounded-lg shadow-lg">
        {/* Card 1 */}
        <div className="animate-moveText1 mb-4 p-4 bg-blue-100 rounded-lg">
          <p className="text-blue-800 font-mono">Card 1 Text</p>
        </div>
        {/* Card 2 */}
        <div className="animate-moveText2 p-4 bg-green-100 rounded-lg">
          <p className="text-green-800">Card 2 Text</p>
        </div>
      </div>
    </div>
  );
};

export default AsyncAnimation;