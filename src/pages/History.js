import { useState, useContext } from "react";

import { GeneralContext } from "../context/GeneralContext";
import GitHub from "../components/assets/images/GitHub.png";
import { Link } from "react-router-dom";

function History() {
  const [info, setInfo] = useContext(GeneralContext);
  const [search, setSerch] = useState([...info].reverse());

  return (
    <div className="m-5  rounded-lg  border-gray-200 shadow-lg p-3 bg-light-green">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl">
        history List:
      </h5>

      <ul className="my-4 space-y-3">
        {search &&
          search?.map((userInfo) => (
            <a target="_blank" href={userInfo.html_url}>
              <li className="flex items-center p-3 text-tiny text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100  hover:shadow-lg gap-3">
                <img
                  className=" w-12 h-12 rounded-full shadow-lg"
                  src={userInfo.avatar_url ? userInfo.avatar_url : GitHub}
                  alt="Bonnie image"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-lg">{userInfo.name}</span>
                  <span className="text-tiny">{userInfo.bio}</span>
                </div>
              </li>
            </a>
          ))}
      </ul>
    </div>
  );
}

export default History;
