import React from "react";
import GitHub from "../components/assets/images/GitHub.png";
const ProfileCard = (props) => {
  return (
    <div className="mt-5 bg-white rounded-lg border border-gray-200 shadow-md">

      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={GitHub}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500">
          Visual Designer
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Message
          </a>
        </div>
      </div>
    </div>
    // <>
    //   <div>parham</div>
    // </>
  );
};

export default ProfileCard;
