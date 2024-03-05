import React from "react";

const Certification = () => {
  return (
    <section className="grid gap-8 md:pt-11 mt-5" id="certifications">
      <div className="text-xl font-bold text-zinc-200 mb-3">Certifications</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 2xl::grid-cols-7 gap-5">
        <div className="flex-1 flex flex-col m-auto certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/PythonDataStructures.jpg')] bg-no-repeat bg-cover w-44 h-40">
          <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-md text-center">
              <span>Python Data Structurs</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col m-auto certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg')] bg-no-repeat bg-cover w-44 h-40">
          <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-md text-center">
              <span>Capstone Retrieving Processing And Visualizing</span>
            </div>
          </div>
        </div>
        <div className="flex m-auto certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/ProgrammingForEverybody(GettingStartedWithPython).jpg')] bg-no-repeat bg-cover w-44 h-40">
          <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-md text-center">
              <span>
                Programming For Everybody(Getting Started With Python)
              </span>
            </div>
          </div>
        </div>
        <div className="flex m-auto certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/UsingDatabasesWithPython.jpg')] bg-no-repeat bg-cover w-44 h-40">
          <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-md text-center">
              <span>Using Databases With Python</span>
            </div>
          </div>
        </div>
        <div className="flex m-auto certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/UsingPythonToAccessWebData.jpg')] bg-no-repeat bg-cover w-44 h-40">
          <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-md text-center">
              <span>Using Python To Access Web Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
