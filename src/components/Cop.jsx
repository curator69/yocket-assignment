import CitySelection from "./CitySelection";
import VehicleSelection from "./VehicleSelection";

const Cop = ({ cop, cops, setCops }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-fuchsia-900 rounded-lg p-4">
      <h4 className="text-xl">Cop {cop.cop}</h4>
      <CitySelection cop={cop} cops={cops} setCops={setCops} />
      <VehicleSelection cop={cop} cops={cops} setCops={setCops} />
    </div>
  );
};

export default Cop;
