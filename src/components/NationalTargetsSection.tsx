import React from 'react';

const NationalTargetsSection = () => {
  return (
    <section className="py-16 px-6 bg-blue-50" id="national-targets">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
          10-YEAR NATIONAL TARGETS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 2030 Goal */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-blue-800">2030 Goal</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-2">
              Reach 80% CRC screening rate
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>Accelerated uptake through non-invasive, blood-based screening</li>
              <li>Overcomes barriers of stool-based tests — discomfort, stigma, and delay</li>
              <li>Targets younger, working-age adults and high-risk populations</li>
            </ul>
          </div>

          {/* 2035 Goal */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💪</span>
              <h3 className="text-xl font-bold text-blue-800">2035 Goal</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-2">
              Reduce CRC-related deaths by 80%
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>Earlier detection through more sensitive blood-based screening tools</li>
              <li>Timely colonoscopy ensures early-stage intervention</li>
              <li>Outcomes aligned with 20-year U.S. data — with even more ambitious targets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalTargetsSection;

