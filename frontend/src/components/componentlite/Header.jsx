import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <div className="gap-2 m-auto flex flex-col items-center justify-center my-10">
          <span className="px-4 py-2 mt-2 bg-gray-200 text-red-600 font-bold text-2xl rounded-full">
            No. One job hunt website
          </span>
          <h2 className="text-5xl font-bold">
            Search appy &<br /> Get your
            <span className="text-blue-500 m-2">Dream Job</span>{" "}
          </h2>
          <p>
            Lorem Ipsum, giving information on its origins, as well as a <br />
            random Lipsum generator.
          </p>
          <div>
            <input
              text="text"
              className="p-2 rounded-md border border-gray-300"
              placeholder="Search for jobs..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
