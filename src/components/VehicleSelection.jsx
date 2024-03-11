import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { vehicles } from "../data";

const VehicleSelection = ({ cop, cops, setCops }) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="vehicle" className="text-lg min-w-[125px]">
        Select Vehicle:
      </label>

      <Dialog>
        <DialogTrigger>
          <input
            autoComplete="off"
            type="text"
            name="vehicle"
            id="vehicle"
            value={cop.vehicle}
            onChange={() => {}}
            className="p-2 border-2 border-fuchsia-900 rounded bg-fuchsia-300 cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent className="min-w-[90vw] max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-center">Select City:</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            {vehicles.map(({ type, range, count, url }, index) => {
              const isVehicleAlreadySelectedByAnotherCop = cops.find(
                (cop) => cop.vehicle === type
              );

              return (
                <DialogClose
                  asChild
                  key={index}
                  className={
                    !!isVehicleAlreadySelectedByAnotherCop
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }
                  style={{
                    opacity: !!isVehicleAlreadySelectedByAnotherCop ? 0.5 : 1,
                  }}
                  onClick={() => {
                    let copsCopy = [...cops];
                    copsCopy[cop.cop - 1].vehicle = type;
                    setCops(copsCopy);
                  }}
                >
                  <div className="flex flex-col border-2 border-fuchsia-900 rounded-lg cursor-pointer overflow-hidden pb-4">
                    <img src={url} alt={type} />
                    <div className="flex flex-col gap-2">
                      <p className="text-center text-xl bg-fuchsia-900 text-white p-2">
                        {type}
                      </p>
                      <span className="flex items-center justify-center gap-4">
                        <p className="text-center text-lg">Range: {range}KM</p>
                        <p className="text-center text-lg">
                          Available: {count}
                        </p>
                      </span>
                      {isVehicleAlreadySelectedByAnotherCop && (
                        <p className="text-center text-fuchsia-900 italic underline underline-offset-2">
                          Selected by Cop {isVehicleAlreadySelectedByAnotherCop.cop}
                        </p>
                      )}
                    </div>
                  </div>
                </DialogClose>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VehicleSelection;
