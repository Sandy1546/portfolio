import React from "react";
import Image from "next/image";

const Certification = () => {
  return (
    <>
      <section className="grid gap-8 md:pt-11 mt-5" id="certifications">
        <div className="text-xl pl-2 font-bold text-zinc-200 mb-3">
          Certifications
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 2xl::grid-cols-7 gap-5">
          {/* Cert 1 */}
          <div
            data-modal-target="modal-PythonDataStructures"
            data-modal-toggle="modal-PythonDataStructures"
            className="flex m-auto cursor-pointer certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/PythonDataStructures.jpg')] bg-no-repeat bg-cover w-44 h-40"
          >
            <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
              <div className="text-gray-300 font-medium text-md text-center">
                <span>Python Data Structurs</span>
              </div>
            </div>
          </div>

          {/* Cert 2 */}
          <div
            data-modal-target="modal-CapstoneRetrievingProcessingAndVisualizing"
            data-modal-toggle="modal-CapstoneRetrievingProcessingAndVisualizing"
            className="flex m-auto cursor-pointer certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg')] bg-no-repeat bg-cover w-44 h-40"
          >
            <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
              <div className="text-gray-300 font-medium text-md text-center">
                <span>Capstone Retrieving Processing And Visualizing</span>
              </div>
            </div>
          </div>

          {/* Cert 3 */}
          <div
            data-modal-target="modal-ProgrammingForEverybody(GettingStartedWithPython)"
            data-modal-toggle="modal-ProgrammingForEverybody(GettingStartedWithPython)"
            className="flex m-auto cursor-pointer certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/ProgrammingForEverybody(GettingStartedWithPython).jpg')] bg-no-repeat bg-cover w-44 h-40"
          >
            <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
              <div className="text-gray-300 font-medium text-md text-center">
                <span>
                  Programming For Everybody(Getting Started With Python)
                </span>
              </div>
            </div>
          </div>

          {/* Cert 4 */}
          <div
            data-modal-target="modal-UsingDatabasesWithPython"
            data-modal-toggle="modal-UsingDatabasesWithPython"
            className="flex m-auto cursor-pointer certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/UsingDatabasesWithPython.jpg')] bg-no-repeat bg-cover w-44 h-40"
          >
            <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
              <div className="text-gray-300 font-medium text-md text-center">
                <span>Using Databases With Python</span>
              </div>
            </div>
          </div>

          {/* Cert 5 */}
          <div
            data-modal-target="modal-UsingPythonToAccessWebData"
            data-modal-toggle="modal-UsingPythonToAccessWebData"
            className="flex m-auto cursor-pointer certificte-wrapper rounded-lg bg-[url('/assets/images/Certifications/UsingPythonToAccessWebData.jpg')] bg-no-repeat bg-cover w-44 h-40"
          >
            <div className="bg-gray-700 rounded-lg bg-opacity-85 w-full h-full py-4 flex items-center justify-center">
              <div className="text-gray-300 font-medium text-md text-center">
                <span>Using Python To Access Web Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOdal 1 */}
      <div
        id="modal-PythonDataStructures"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-zinc-600 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button
                type="button"
                class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-PythonDataStructures"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <Image
                src="/assets/images/Certifications/PythonDataStructures.jpg"
                alt="PythonDataStructures"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div
        id="modal-CapstoneRetrievingProcessingAndVisualizing"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-zinc-600 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button
                type="button"
                class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-CapstoneRetrievingProcessingAndVisualizing"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <Image
                src="/assets/images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg"
                alt="PythonDataStructures"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 */}
      <div
        id="modal-ProgrammingForEverybody(GettingStartedWithPython)"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-zinc-600 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button
                type="button"
                class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-ProgrammingForEverybody(GettingStartedWithPython)"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <Image
                src="/assets/images/Certifications/ProgrammingForEverybody(GettingStartedWithPython).jpg"
                alt="PythonDataStructures"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal 4 */}
      <div
        id="modal-UsingDatabasesWithPython"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-zinc-600 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button
                type="button"
                class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-UsingDatabasesWithPython"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <Image
                src="/assets/images/Certifications/UsingDatabasesWithPython.jpg"
                alt="PythonDataStructures"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal 5 */}
      <div
        id="modal-UsingPythonToAccessWebData"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-zinc-600 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button
                type="button"
                class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-UsingPythonToAccessWebData"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <Image
                src="/assets/images/Certifications/UsingPythonToAccessWebData.jpg"
                alt="PythonDataStructures"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
