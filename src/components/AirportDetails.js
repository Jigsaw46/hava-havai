import React, { useState } from "react";

const AirportHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="px-6 py-4">
      <div className="text-sm text-gray-500 mb-2">
        <a href="/airports" className="hover:underline">
          Airports
        </a>{" "}
        &gt; Indira Gandhi International Airport
      </div>
      <h1 className="text-3xl font-bold mb-4">
        Indira Gandhi International Airport
      </h1>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <a
            href="/"
            className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-deep-white border-deep-white"
          >
            Terminals
          </a>
          <a
            href="/"
            className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-deep-white hover:border-deep-white"
          >
            Transport
          </a>
          <a
            href="/"
            className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-deep-white hover:border-deep-white"
          >
            Contact details
          </a>
        </nav>
      </div>
      <br />
      <div className="flex space-x-4 mb-4 items-center">
        <a
          href="/"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/Terminal.jpg"
            alt="Terminal 1"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Terminal 1
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Terminal 1 description here.
            </p>
          </div>
        </a>
        <a
          href="/"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/Terminal.jpg"
            alt="Terminal 2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Terminal 2
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Terminal 2 description here.
            </p>
          </div>
        </a>
        <button
          onClick={togglePopup}
          className="px-4 py-2 bg-deep-white text-black font-semibold border-2 border-black rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          + Add Terminal
        </button>
      </div>
      <br />
      <div className="font-bold py-3.5">
        <h1>Services</h1>
      </div>
      <div className="py-3.5">
        <h5>Lost & Found</h5>
      </div>
      <hr />
      <br />
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label
              htmlFor="ServiceName"
              className="block text-sm font-medium text-gray-700"
            >
              Service Name
            </label>
            <input
              type="text"
              id="ServiceName"
              className="mt-1 px-3 py-2 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full rounded-md sm:text-sm"
              placeholder="Lost & Found"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="Category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="Category"
              className="mt-1 px-3 py-2 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full rounded-md sm:text-sm"
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="SubCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Sub Category
            </label>
            <select
              id="SubCategory"
              className="mt-1 px-3 py-2 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full rounded-md sm:text-sm"
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 4a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 10 4zm2.47 3.28a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06L10 9.44l2.47-2.47z"
                  clipRule="evenodd"
                />
              </svg>
              Upload Image
              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Show image
              </span>
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="Description"
              className="mt-1 px-3 py-2 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full rounded-md sm:text-sm"
              placeholder="Type here"
            />
          </div>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800">
            Save
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h3>Loung</h3>
      <br />
      <hr />
      <br />
      <h3>Money Exchange</h3>
      <br />
      <hr />

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Terminal Title</h2>
            <hr className="border-t-2 border-gray-400 my-4" />
            <p>Description goes here. Click on cancel to close</p>
            <div className="flex justify-between mt-4">
              <button className="px-2 py-1 text-sm bg-deep-white text-black font-semibold border-2 border-black rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
               Upload Image
              </button>
              <div className="flex">
                <button
                  className="px-2 py-1 mr-2 text-sm bg-deep-white text-black font-semibold border-2 border-black rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button className="px-2 py-1 text-sm bg-deep-white text-black font-semibold border-2 border-black rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportHeader;
