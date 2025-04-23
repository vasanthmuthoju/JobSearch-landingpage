import React from 'react';
import JobTitleCard from './JobTitleCard'; 
import Button from './Button';

function Body() {
  const jobTitles = [
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer",
    "Mobile App Developer",
    "Data Scientist",
    "QA Engineer",
    "Technical Writer"
  ];

  return (
    <div>
      <div className="text-center py-20 px-4 bg-blue-50 mt-3">
       
        <h2 className="text-4xl font-bold mb-4 ">Find Your Dream Job</h2>
        <p className="text-lg mb-4 text-gray-600">
          Explore thousands of job opportunities tailored to your skills and preferences. Start your journey with JobSearch today.
        </p>
        <div className="flex justify-center  items-center gap-4">
          <input
            type="text"
            placeholder="Search job titles..."
            className="border border-gray-300 rounded-4xl mt-2 focus:outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 px-4 py-2 w-1/3"
          />
          <Button  label="Get Started" />
        </div>
      </div>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 underline">Explore Popular Roles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {jobTitles.map((title, index) => (
            <JobTitleCard key={index} title={title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Body;
