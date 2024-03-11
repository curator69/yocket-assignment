import { Link } from "react-router-dom";
import Cop from "./Cop";

const Selection = ({ cops, setCops }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-center p-4 bg-fuchsia-900 text-white w-full">
        Please select the city and the vehicle for each cop.
      </h1>

      <div className="grid grid-cols-3 gap-4 w-full px-8">
        {cops && cops.map((cop, index) => (
          <Cop key={index} cop={cop} cops={cops} setCops={setCops} />
        ))}
      </div>

      <button className="rounded-[30px] bg-fuchsia-900 text-white p-4 px-8 border-2 border-white">
        <Link to="/result" aria-disabled onClick={() => {}}>
          Find the criminal
        </Link>
      </button>
    </div>
  );
};

export default Selection;
