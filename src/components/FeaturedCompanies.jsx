import React from 'react';

function FeaturedCompanies() {
  const companies = [
    {
      name: "Tech Innovators Inc.",
      description: "Leading the way in AI and machine learning solutions.",
    },
    {
      name: "Creative Solutions Ltd.",
      description: "Designing digital experiences that engage and inspire.",
    },
    {
      name: "HealthTech Global",
      description: "Revolutionizing healthcare with innovative tech solutions.",
    },
    {
      name: "FinTech Pros",
      description: "Pioneering the future of finance with cutting-edge technology.",
    }
  ];

  return (
    <section className="py-12 ">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">Featured Companies Actively Hiring</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>

              <p className="text-sm text-gray-600 mb-4">{company.description}</p>

              <a href=''className="text-blue-600 hover:text-blue-800 font-semibold">
                Explore Jobs
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCompanies;
