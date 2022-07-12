import React from "react";
import GitHub from "../components/assets/images/GitHub.png";
const ProfileCard = ({ profileData }) => {
  console.log(profileData);
  return (
    <div className="mt-5  rounded-lg  border-gray-200 shadow-md p-3 bg-light-green">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={profileData.avatar_url ? profileData.avatar_url : GitHub}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {profileData?.name}
        </h5>
        <span className="text-sm text-gray-500">{profileData?.bio}</span>
        <span className="text-sm text-gray-500">
          {profileData?.email ? profileData?.email : "email not exist"}
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            target="_blank"
            href={profileData?.html_url}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            show on github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
