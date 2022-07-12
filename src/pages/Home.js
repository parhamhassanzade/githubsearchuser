import React from "react";

function Home() {
  return (
    <div>
      <div className="p-5">
        <p className="font-bold text-2xl">
          This project create for test, and with this project we can do all this
          jobs:
        </p>
        <ul className="list-inside list-disc ml-3">
          <li>search in gitHub by userName</li>
          <li>have access to the search history</li>
          <li>
            see the profile and repository of users that allready searched
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
