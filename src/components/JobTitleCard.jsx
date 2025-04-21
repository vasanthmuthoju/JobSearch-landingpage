import React from 'react';

function JobTitleCard({ title }) {
  return (
    <div className="bg-white border-2 border-blue-50  rounded-xl shadow-md p-4 text-center transition-transform transform hover:shadow-lg hover:bg-blue-50 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
    </div>
  );
}

export default JobTitleCard;