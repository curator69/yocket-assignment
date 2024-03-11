import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center p-4 bg-fuchsia-900 text-white w-full">Cops and Crimes</h1>
      <p className="text-center bg-black text-white w-full italic">
        The notorious criminal has escaped! Help the cops capture him.
      </p>
      <Link to="/selection" className="mt-4 rounded-[30px] bg-fuchsia-900 text-white p-4 px-8 border-2 border-white">
        Start Mission
      </Link>
    </div>
  );
};

export default StartPage;
