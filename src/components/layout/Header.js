import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/images/GitHub.png";
import reactRoutes from "../../utils/routs/reactRouts";
function Header() {
  return (
    <div className=" h-32 w-full mb-5 shadow-2xl flex">
      <div className="w-3/12 h-full">
        <Link to={reactRoutes.home}>
          <img
            src={github}
            className=" w-1/2 h-full object-fill"
            alt="header avatar"
          />
        </Link>
      </div>

      <nav className="flex w-9/12 items-end justify-end gap-5 m-5">
        <Link
          className="focus:underline hover:text-midnight hover:text-xl hover:font-bold"
          to={reactRoutes.search}
        >
          search
        </Link>
        <Link
          className="focus:underline hover:text-midnight hover:text-xl hover:font-bold"
          to={reactRoutes.history}
        >
          History
        </Link>
      </nav>
    </div>
  );
}

export default Header;
